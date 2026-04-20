import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-surface text-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-[2rem] bg-gradient-to-br from-primary to-accent p-1 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2rem] flex flex-col items-center justify-center p-8 text-center glass z-10 relative">
                <span className="text-6xl font-serif font-bold text-primary mb-2">١٩٩٦</span>
                <p className="text-lg font-semibold text-background/80">عام التأسيس والتميز المهني</p>
                <div className="absolute -inset-4 border border-accent/20 rounded-[2.5rem] -z-10" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <p className="text-accent font-bold tracking-widest uppercase mb-2">من نحن</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">شركاؤكم في النمو والتميز المهني</h2>
            </div>
            
            <p className="text-lg text-background/70 leading-relaxed">
              تأسس مكتب عبد الرؤوف حسان في عام 1996م وهو عضو في طلال أبو غزالة وشركاه الدولي (TAG-Audit).
              وهو مكتب متكامل الخدمات يقود عملياته قيادات وطنية يدعمها فرق إقليمية متخصصة في عملها ومجموعة من الموظفين الموهوبين الذين يتمتعون بقدرات إدارية وخبرات طويلة في مجالات مختلفة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary mb-2 text-xl">رؤيتنا</h3>
                <p className="text-sm text-background/70">
                  الاستمرار في الحفاظ على مكانتنا كمكتب رائد من خلال تقديم خدمة متميزة، والمشاركة مع العميل في تطوير وتنظيم أعماله.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary mb-2 text-xl">تميزنا</h3>
                <p className="text-sm text-background/70">
                  تأثيرنا المباشر على جودة الخدمة يستند إلى خبرتنا في مجموعة متنوعة من القطاعات، ونركز على الجودة والتفاصيل الدقيقة.
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
