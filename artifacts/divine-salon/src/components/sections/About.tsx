import { motion } from 'framer-motion';
import aboutImg from '@assets/generated_images/about.jpg';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img
                src={aboutImg}
                alt="Luxury salon interior detail"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-primary/30 z-0 rounded-sm hidden md:block" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              About Divine <br className="hidden md:block"/> Unisex Salon
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                Divine Unisex Salon is a trusted beauty destination in Sector 37C, Chandigarh. We are dedicated to providing a premium, serene environment where you can relax, rejuvenate, and reinvent yourself.
              </p>
              <p>
                We provide professional haircuts, hair coloring, keratin, smoothing, facials, makeup, skincare, grooming, and beauty treatments for both men and women.
              </p>
              <p>
                Our experienced team focuses on quality, hygiene, personalized care, and customer satisfaction to deliver exceptional results every visit. Step into our world of effortless sophistication and leave feeling deeply confident.
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-border flex items-center gap-8">
              <div>
                <h4 className="text-4xl font-serif text-primary font-bold mb-2">10+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Years Experience</p>
              </div>
              <div className="w-[1px] h-12 bg-border"></div>
              <div>
                <h4 className="text-4xl font-serif text-primary font-bold mb-2">5k+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Happy Clients</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
