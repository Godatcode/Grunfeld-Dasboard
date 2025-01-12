import { Suspense } from 'react';
import { Search } from 'lucide-react';
import StudentList from '@/components/student-list';
import TopLeaderboard from '@/components/top-leaderboard';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-1">
              OS Club Dashboard
            </h1>
            <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
              Track achievements, monitor progress, and celebrate success in our open source community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr,300px]">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    className="pl-8"
                  />
                </div>
                <select className="px-3 py-2 rounded-md border bg-background">
                  <option value="">Filter by...</option>
                  <option value="ranking">Ranking</option>
                  <option value="badges">Badges</option>
                  <option value="points">Points</option>
                </select>
              </div>

              <Suspense fallback={<div>Loading students...</div>}>
                <StudentList />
              </Suspense>
            </div>

            <div>
              <Suspense fallback={<div>Loading leaderboard...</div>}>
                <TopLeaderboard />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}