'use client';

import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import type { Attendance } from '@/lib/supabase/types';

export default function AttendanceHeatmap({ studentId }: { studentId: string }) {
  const [attendance, setAttendance] = useState<Attendance[]>([]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02
      }
    }
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 }
  };

  // Generate dummy data for the heatmap
  const dummyData = Array.from({ length: 52 * 7 }, (_, i) => ({
    date: new Date(2024, 0, i + 1),
    intensity: Math.random()
  }));

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Calendar className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Contribution Heatmap</h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-52 gap-1"
      >
        {dummyData.map((day, index) => (
          <motion.div
            key={index}
            variants={item}
            className={`w-3 h-3 rounded-sm transform hover:scale-150 transition-transform duration-200 cursor-pointer
              ${day.intensity > 0.7 ? 'bg-chart-1' :
                day.intensity > 0.5 ? 'bg-chart-2' :
                day.intensity > 0.3 ? 'bg-chart-3' :
                day.intensity > 0 ? 'bg-chart-4' : 'bg-secondary'}`}
            title={`${day.date.toLocaleDateString()}: ${Math.round(day.intensity * 100)}%`}
          />
        ))}
      </motion.div>
    </Card>
  );
}