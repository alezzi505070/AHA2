import { SERVICES } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ArrowUpLeft } from 'lucide-react';

export const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-sans font-bold text-white mb-4">خدماتنا</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات المهنية التي صممت بعناية لتلبية أهدافكم ودعم نجاح أعمالكم.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-2xl group cursor-pointer border border-[#C4A35A]/0 hover:border-[#C4A35A]/40 transition-all duration-300 relative overflow-hidden"
              onClick={() => setSelectedService(service)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:rotate-[360deg] transition-transform duration-700">
                <span className="text-accent text-2xl font-serif">{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/60 mb-6 line-clamp-2">{service.preview}</p>
              
              <button className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:text-white transition-colors">
                المزيد من التفاصيل 
                <ArrowUpLeft size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dialog */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 left-6 text-white/50 hover:text-white"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold text-accent mb-6 bg-clip-text text-transparent bg-gradient-to-l from-accent to-white">{selectedService.title}</h2>
              <div className="text-white/80 leading-relaxed whitespace-pre-wrap">
                {selectedService.details}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
