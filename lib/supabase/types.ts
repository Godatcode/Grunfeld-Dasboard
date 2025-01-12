export type Student = {
  id: string;
  name: string;
  github_url: string | null;
  points: number;
  ranking: number;
  created_at: string;
  updated_at: string;
  badge_count?: number;
  certificate_count?: number;
};

export type Badge = {
  id: string;
  name: string;
  description: string | null;
  icon_url: string | null;
  created_at: string;
};

export type StudentBadge = {
  id: string;
  student_id: string;
  badge_id: string;
  awarded_at: string;
  badge?: Badge;
};

export type Certificate = {
  id: string;
  student_id: string;
  name: string;
  issuer: string;
  issue_date: string;
  created_at: string;
};

export type Attendance = {
  id: string;
  student_id: string;
  date: string;
  hours: number;
  created_at: string;
};