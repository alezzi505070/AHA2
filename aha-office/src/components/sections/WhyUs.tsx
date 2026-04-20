import { WHY_US } from '@/data/content';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-[#111] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sans font-bold mb-4">فعالية خدماتنا</h2>
          <p className="text-white/60">لماذا تختار مكتب عبد الرؤوف حسان؟</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHY_US.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl flex items-start gap-4"
            >
              <CheckCircle2 className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
