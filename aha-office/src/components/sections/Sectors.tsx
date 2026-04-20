import { SECTORS } from '@/data/content';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const Sectors = () => {
  return (
    <section id="sectors" className="py-24 bg-surface text-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sans font-bold mb-4">القطاعات التي نخدمها</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SECTORS.map((sector, idx) => {
            const IconComponent = (Icons as any)[sector.icon];
            
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-4 hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white transition-all duration-300 group cursor-pointer"
              >
                <div className="text-primary group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className="font-semibold">{sector.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
