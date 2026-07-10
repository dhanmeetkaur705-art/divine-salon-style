import { motion } from 'framer-motion';
import heroImg from '@assets/generated_images/hero.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="block text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-6"
          >
            Welcome to Divine Unisex Salon
          </motion.span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-8">
            Where Beauty <br className="hidden md:block" /> Meets Perfection
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Premium hair, skin & makeup services crafted to make you look and feel your best. Experience the luxury of personalized care in Chandigarh.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </a>
            <a
              href="https://wa.me/919478809160"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll Discover</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-primary absolute top-0 left-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
