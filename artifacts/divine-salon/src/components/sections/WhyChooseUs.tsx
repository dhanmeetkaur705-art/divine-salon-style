import { motion } from 'framer-motion';
import { Award, Droplet, ShieldCheck, UserCheck, Diamond, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Experienced Professionals',
    desc: 'Our stylists and beauticians bring years of industry expertise.'
  },
  {
    icon: Droplet,
    title: 'Premium Products',
    desc: 'We only use top-tier, internationally recognized beauty brands.'
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Environment',
    desc: 'Impeccable cleanliness and sanitized tools for your safety.'
  },
  {
    icon: Diamond,
    title: 'Personalized Consultation',
    desc: 'Customized advice tailored to your unique skin and hair needs.'
  },
  {
    icon: Award,
    title: 'Affordable Luxury',
    desc: 'Experience high-end salon services at accessible prices.'
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    desc: 'We are committed to making sure you leave with a smile.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_50%)] blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">The Divine Standard</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Why Choose Us</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors backdrop-blur-sm group"
            >
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{reason.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
