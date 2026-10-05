import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Leaf, Sparkles, Droplets, Gem } from 'lucide-react';

const categories = [
  {
    title: 'Hair Services',
    icon: Scissors,
    description: 'Expert cuts, colour, and treatments for every hair type.',
    items: [
      'Haircut',
      'Hairstyling',
      'Shampoo & Conditioning',
      'Hair Spa',
      'Hair Color',
      'Global Highlights',
      'Keratin',
      'Hair Smoothing',
      'Rebonding',
    ],
  },
  {
    title: 'Skin & Spa',
    icon: Leaf,
    description: 'Revitalising skin care and full-body relaxation rituals.',
    items: [
      'Facials',
      'Skin Care',
      'Cleanup',
      'Detan',
      'Bleach',
      'Massage',
      'Spa Services',
      'Tanning',
    ],
  },
  {
    title: 'Beauty & Makeup',
    icon: Sparkles,
    description: 'Flawless looks for every occasion, from bridal to everyday glam.',
    items: [
      'Makeup',
      'Makeup Services',
      'Bridal Services',
      'Eyebrow Beautification',
      'Eyebrow Threading',
      'Eyelashes',
    ],
  },
  {
    title: 'Body & Grooming',
    icon: Droplets,
    description: 'Smooth, refined body care and precision grooming.',
    items: [
      'Body Waxing',
      'Waxing',
      'Threading',
      'Shaving',
    ],
  },
  {
    title: 'Nail Care',
    icon: Gem,
    description: 'Luxury manicure and pedicure treatments for perfect nails.',
    items: [
      'Manicure',
      'Pedicure',
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            A comprehensive range of premium beauty treatments designed to enhance your natural radiance.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                data-testid={`tab-service-${i}`}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105'
                    : 'bg-background text-muted-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </button>
            );
          })}
        </motion.div>

        {/* Service Panel */}
        <div className="relative min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              {/* Left: description + icon */}
              <div className="bg-background border border-border rounded-sm p-10 flex flex-col justify-center h-full min-h-[280px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  {(() => {
                    const Icon = categories[active].icon;
                    return (
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                        <Icon className="w-7 h-7" />
                      </div>
                    );
                  })()}
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                    {categories[active].title}
                  </h3>
                  <p className="text-muted-foreground font-light text-lg leading-relaxed">
                    {categories[active].description}
                  </p>
                  <div className="mt-8">
                    <a
                      href="https://wa.me/919478809160"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
                    >
                      Book This Service
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: service items grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories[active].items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="flex items-center gap-3 bg-background border border-border rounded-sm px-5 py-4 hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-foreground font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
