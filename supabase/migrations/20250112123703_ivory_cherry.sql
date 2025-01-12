/*
  # Initial Schema for OS Club Dashboard

  1. New Tables
    - `students`
      - `id` (uuid, primary key)
      - `name` (text)
      - `github_url` (text)
      - `points` (integer)
      - `ranking` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `badges`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `icon_url` (text)
      - `created_at` (timestamp)
    
    - `student_badges`
      - `id` (uuid, primary key)
      - `student_id` (uuid, foreign key)
      - `badge_id` (uuid, foreign key)
      - `awarded_at` (timestamp)
    
    - `certificates`
      - `id` (uuid, primary key)
      - `student_id` (uuid, foreign key)
      - `name` (text)
      - `issuer` (text)
      - `issue_date` (date)
      - `created_at` (timestamp)
    
    - `attendance`
      - `id` (uuid, primary key)
      - `student_id` (uuid, foreign key)
      - `date` (date)
      - `hours` (numeric)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Students table
CREATE TABLE students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  github_url text,
  points integer DEFAULT 0,
  ranking integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Badges table
CREATE TABLE badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  icon_url text,
  created_at timestamptz DEFAULT now()
);

-- Student Badges junction table
CREATE TABLE student_badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  badge_id uuid REFERENCES badges(id) ON DELETE CASCADE,
  awarded_at timestamptz DEFAULT now(),
  UNIQUE(student_id, badge_id)
);

-- Certificates table
CREATE TABLE certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  name text NOT NULL,
  issuer text NOT NULL,
  issue_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Attendance table
CREATE TABLE attendance (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  date date NOT NULL,
  hours numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow read access to all users"
  ON students FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow read access to all users"
  ON badges FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow read access to all users"
  ON student_badges FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow read access to all users"
  ON certificates FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow read access to all users"
  ON attendance FOR SELECT TO authenticated
  USING (true);

-- Create function to update student ranking
CREATE OR REPLACE FUNCTION update_student_rankings()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE students
  SET ranking = ranks.rank
  FROM (
    SELECT id, RANK() OVER (ORDER BY points DESC) as rank
    FROM students
  ) ranks
  WHERE students.id = ranks.id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update rankings when points change
CREATE TRIGGER update_rankings
AFTER INSERT OR UPDATE OF points ON students
FOR EACH ROW
EXECUTE FUNCTION update_student_rankings();