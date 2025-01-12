'use client';

import { useEffect, useState } from 'react';
import { ScrollText, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import type { Certificate } from '@/lib/supabase/types';

export default function CertificateSection({ studentId }: { studentId: string }) {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

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
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        <ScrollText className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Certificates</h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {[1,2,3].map((_, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-chart-4 to-chart-5 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative p-4 bg-card border rounded-lg transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Certificate {index + 1}</h3>
                  <p className="text-sm text-muted-foreground">Issuer Name</p>
                  <p className="text-xs text-muted-foreground mt-1">Issued on: Jan 2024</p>
                </div>
                <Award className="h-6 w-6 text-chart-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
}