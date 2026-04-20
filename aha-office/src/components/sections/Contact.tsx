import { CONTACT } from '@/data/content';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">تواصل معنا</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <MapPin className="text-white/50 group-hover:text-accent transition-colors mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">الموقع</h4>
                  <p className="text-white/70">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <Mail className="text-white/50 group-hover:text-accent transition-colors mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">البريد الإلكتروني</h4>
                  <p className="text-white/70" dir="ltr">{CONTACT.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <Phone className="text-white/50 group-hover:text-accent transition-colors mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">الهاتف</h4>
                  <div className="text-white/70 flex flex-col items-start gap-1" dir="ltr">
                    {CONTACT.phones.map((phone, i) => (
                      <span key={i}>{phone}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <Clock className="text-white/50 group-hover:text-accent transition-colors mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">ساعات العمل</h4>
                  <p className="text-white/70">{CONTACT.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="الاسم الكامل"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent"
              />
              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent"
              />
              <textarea
                placeholder="رسالتك"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                إرسال <Send size={18} className="rotate-180" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
