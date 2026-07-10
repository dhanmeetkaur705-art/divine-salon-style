import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-10">Visit Divine Salon</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Location</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    SCO 176, 1st Floor, Main Market,<br/>
                    Sector 37C, Chandigarh – 160036
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Contact</h4>
                  <a href="tel:+919478809160" className="text-muted-foreground font-light hover:text-primary transition-colors block mb-1">
                    +91 94788 09160
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Hours</h4>
                  <p className="text-muted-foreground font-light">
                    Monday–Sunday<br/>
                    10:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919478809160"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-foreground/90 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/919478809160"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/qT1TbhKbdhgKcYKc8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground text-sm font-semibold uppercase tracking-wider rounded-sm hover:border-primary hover:text-primary transition-colors"
              >
                Directions <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[500px] bg-muted rounded-sm overflow-hidden border border-border shadow-md"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Divine+Unisex+Salon,+SCO+176,+Sector+37C,+Chandigarh&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps location of Divine Salon Sector 37C Chandigarh"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
