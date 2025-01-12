import { notFound } from 'next/navigation';
import ProfileHeader from '@/components/profile-header';
import BadgeSection from '@/components/badge-section';
import CertificateSection from '@/components/certificate-section';
import AttendanceHeatmap from '@/components/attendance-heatmap';

// Dummy student data
const dummyStudents = [
  {
    id: '1',
    name: 'Alex Johnson',
    points: 1250,
    ranking: 1,
    github_url: 'https://github.com/alex',
    created_at: '2024-01-01',
    updated_at: '2024-03-15'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    points: 980,
    ranking: 2,
    github_url: 'https://github.com/sarah',
    created_at: '2024-01-15',
    updated_at: '2024-03-15'
  },
  {
    id: '3',
    name: 'Michael Park',
    points: 850,
    ranking: 3,
    github_url: 'https://github.com/michael',
    created_at: '2024-02-01',
    updated_at: '2024-03-15'
  },
  {
    id: '4',
    name: 'Emma Wilson',
    points: 720,
    ranking: 4,
    github_url: 'https://github.com/emma',
    created_at: '2024-02-15',
    updated_at: '2024-03-15'
  },
  {
    id: '5',
    name: 'David Lee',
    points: 650,
    ranking: 5,
    github_url: 'https://github.com/david',
    created_at: '2024-03-01',
    updated_at: '2024-03-15'
  }
];

// Required for static site generation
export function generateStaticParams() {
  return dummyStudents.map((student) => ({
    id: student.id,
  }));
}

export default function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const student = dummyStudents.find(s => s.id === params.id);

  if (!student) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <ProfileHeader student={student} />
          
          <div className="grid gap-8 md:grid-cols-2">
            <BadgeSection studentId={student.id} />
            <CertificateSection studentId={student.id} />
          </div>

          <AttendanceHeatmap studentId={student.id} />
        </div>
      </main>
    </div>
  );
}