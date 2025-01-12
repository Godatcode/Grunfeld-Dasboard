'use client';

import { Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Student } from '@/lib/supabase/types';

// Using the same dummy data from the top 5 students
const dummyTopStudents = [
  {
    id: '1',
    name: 'Alex Johnson',
    points: 1250,
    ranking: 1
  },
  {
    id: '2',
    name: 'Sarah Chen',
    points: 980,
    ranking: 2
  },
  {
    id: '3',
    name: 'Michael Park',
    points: 850,
    ranking: 3
  },
  {
    id: '4',
    name: 'Emma Wilson',
    points: 720,
    ranking: 4
  },
  {
    id: '5',
    name: 'David Lee',
    points: 650,
    ranking: 5
  }
] as Student[];

export default function TopLeaderboard() {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Trophy className="h-5 w-5 text-yellow-500" />
        <h2 className="text-xl font-semibold">Top Contributors</h2>
      </div>
      <div className="space-y-4">
        {dummyTopStudents.map((student, index) => (
          <div
            key={student.id}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-chart-1 to-chart-2 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <div className="relative flex items-center space-x-4 p-3 rounded-lg bg-gradient-to-r from-background to-secondary">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{student.name}</p>
                <p className="text-sm text-muted-foreground">
                  {student.points} points
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}