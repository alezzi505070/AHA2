import { Canvas } from '@react-three/fiber';
import { ParticleField } from '@/components/three/ParticleField';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-[100dvh] bg-[#0D0D0D] overflow-hidden flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <fog attach="fog" args={['#0D0D0D', 2, 10]} />
          <ParticleField />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center"
      >
        <motion.p
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="text-accent tracking-widest text-sm lg:text-lg mb-4"
        >
          عضو في طلال أبو غزاله الدولي
        </motion.p>
        
        <motion.h1
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="text-white font-serif text-5xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          مكتب عبد الرؤوف حسّان
        </motion.h1>

        <motion.p
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="text-white/80 text-lg lg:text-2xl mb-10 max-w-2xl mx-auto"
        >
          التميز في خدمات التدقيق والاستشارات المالية منذ ١٩٩٦م
        </motion.p>

        <motion.div
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#services" className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-md font-semibold hover:opacity-90 transition-opacity">
            اكتشف خدماتنا
          </a>
          <a href="#contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md font-semibold hover:bg-white/20 transition-colors">
            تواصل معنا
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <span className="block w-6 h-10 border-2 border-white/30 rounded-full relative">
          <span className="block w-1 h-2 bg-accent rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
        </span>
      </motion.div>
    </section>
  );
};
