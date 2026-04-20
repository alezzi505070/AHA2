import { motion } from 'framer-motion';

export const TagAffiliation = () => {
  return (
    <section className="py-24 bg-[#0D0D0D] text-white border-y border-white/5 relative overflow-hidden">
      {/* Decorative World Map SVG */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 1000 500" className="w-full h-full fill-white stroke-accent" preserveAspectRatio="none">
           {/* Abstract representational map path can go here */}
           <path d="M400,200 Q500,100 600,200 T800,250 M600,200 Q550,300 450,250" strokeWidth="2" fill="none" />
           <circle cx="400" cy="200" r="4" fill="#C4A35A" className="animate-pulse" />
           <circle cx="600" cy="200" r="4" fill="#C4A35A" className="animate-pulse" />
           <circle cx="800" cy="250" r="4" fill="#C4A35A" className="animate-pulse" />
           <circle cx="450" cy="250" r="4" fill="#C4A35A" className="animate-pulse" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient">طلال أبوغزاله العالمية</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              مؤسسة عالمية رائدة منذ ١٩٧٢، تضم أكثر من ١٠٠ مكتباً في العالم العربي، وتمتد خدماتها مع خبرات عربية مؤهلة لتلبية كافة احتياجات الأعمال.
            </p>
          </motion.div>

          <div className="flex-1 flex w-full relative h-[100px] items-center justify-center">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 h-1 bg-white/10 top-1/2 -translate-y-1/2" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute right-0 w-full h-1 bg-accent top-1/2 -translate-y-1/2 origin-right"
            />
            
            {/* Milestones */}
            <div className="absolute right-0 flex flex-col items-center -translate-y-1/2 top-1/2 z-10">
              <div className="w-5 h-5 rounded-full bg-accent animate-pulse" />
              <div className="absolute -bottom-8 whitespace-nowrap text-white font-bold font-serif">1972</div>
            </div>
            
            <div className="absolute left-0 flex flex-col items-center -translate-y-1/2 top-1/2 z-10">
              <div className="w-5 h-5 rounded-full bg-accent animate-pulse" />
              <div className="absolute -bottom-8 whitespace-nowrap text-white font-bold font-serif">+100</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
