'use client';

import { useEffect, useState } from 'react';
import { Badge as BadgeIcon, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import type { StudentBadge } from '@/lib/supabase/types';

export default function BadgeSection({ studentId }: { studentId: string }) {
  const [badges, setBadges] = useState<StudentBadge[]>([]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <Card className="p-6 overflow-hidden">
      <div className="flex items-center space-x-2 mb-6">
        <Award className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Badges & Achievements</h2>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {[1,2,3,4,5,6].map((_, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-chart-1 to-chart-2 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-75" />
            <div className="relative bg-card p-4 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1">
              <BadgeIcon className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold">Achievement {index + 1}</h3>
              <p className="text-sm text-muted-foreground">Placeholder description</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
}