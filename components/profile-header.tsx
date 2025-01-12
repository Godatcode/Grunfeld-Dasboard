'use client';

import { Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Student } from '@/lib/supabase/types';

export default function ProfileHeader({ student }: { student: Student }) {
  return (
    <Card className="p-8">
      <div className="flex items-center space-x-6">
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center text-white text-3xl font-bold">
          #{student.ranking}
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold">{student.name}</h1>
            {student.github_url && (
              <a
                href={student.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-6 w-6" />
              </a>
            )}
          </div>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <span className="text-xl font-semibold">{student.points} points</span>
            <span>Joined {new Date(student.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}