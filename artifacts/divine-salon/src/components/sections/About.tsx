import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
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
              We provide professional haircuts, hair coloring, keratin, smoothing, facials, makeup, skincare, grooming, and beauty treatments for both men and women. We use premium L'Oréal and Schwarzkopf professional colours for all our hair coloring services.
            </p>
            <p>
              Our experienced team focuses on quality, hygiene, personalized care, and customer satisfaction to deliver exceptional results every visit. Step into our world of effortless sophistication and leave feeling deeply confident.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-border flex items-center justify-center gap-8">
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
    </section>
  );
}
