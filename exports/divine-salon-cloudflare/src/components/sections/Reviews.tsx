import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Pallavi Atoria",
    text: "Had a wonderful experience. Professional, friendly staff and excellent hygiene. Loved the results."
  },
  {
    name: "Poonam Rai",
    text: "Best salon! Dedicated staff with amazing makeup and beauty services."
  },
  {
    name: "Nandani",
    text: "Loved my global highlights. Perfect finishing and beautiful colour."
  },
  {
    name: "Silky Mehra",
    text: "Excellent hair smoothing, keratin and highlights. Highly recommended."
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start justify-between mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-center md:text-left"
          >
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Client Stories</h2>
            <p className="text-muted-foreground text-lg font-light">
              Don't just take our word for it. Here is what our clients have to say about their Divine experience.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background border border-border p-6 rounded-sm shadow-sm flex items-center gap-6"
          >
            <div className="text-5xl font-serif font-bold text-foreground">4.9</div>
            <div>
              <div className="flex text-primary mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Google Rating</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background p-8 border border-border rounded-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex text-primary mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current mr-1" />
                ))}
              </div>
              <p className="text-foreground text-lg font-light leading-relaxed italic mb-8">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Verified Client</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
