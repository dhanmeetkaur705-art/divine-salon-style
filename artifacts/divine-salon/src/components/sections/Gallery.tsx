import { motion } from 'framer-motion';

import imgHairStyling from '@assets/6_IMG_7332_1783674227733.jpeg';
import imgBridalHair from '@assets/3_IMG_7335_1783674227732.jpeg';
import imgMakeup from '@assets/4_IMG_7334_1783674227733.jpeg';
import imgNailArt from '@assets/5_IMG_7333_1783674227733.jpeg';
import imgWavyHair from '@assets/7f26904e-2749-444d-ba00-9e3348a838ec_1783840730872.jpeg';
import imgHairColor from '@assets/gallery_hair_color.jpg';
import imgNailReveal from '@assets/gallery_nail_reveal.jpg';
import imgSalonInterior from '@assets/0_IMG_7338_1783674227732.jpeg';

const images = [
  { src: imgHairStyling, alt: 'Layered Hair Styling', title: 'Hair Styling' },
  { src: imgBridalHair, alt: 'Bridal Hair Updo', title: 'Bridal Hair' },
  { src: imgMakeup, alt: 'Party Makeup Look', title: 'Makeup' },
  { src: imgNailArt, alt: 'Luxury Nail Art', title: 'Nail Art' },
  { src: imgWavyHair, alt: 'Beachy Hair Waves', title: 'Hair Waves' },
  { src: imgHairColor, alt: 'Rich Hair Coloring', title: 'Hair Coloring' },
  { src: imgNailReveal, alt: 'Manicure Finish', title: 'Manicure' },
  { src: imgSalonInterior, alt: 'Salon Ambience', title: 'Our Salon' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Our Masterpieces</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative group overflow-hidden aspect-[4/5] rounded-sm bg-muted"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white font-serif text-xl font-medium tracking-wide block">
                    {img.title}
                  </span>
                  <div className="w-8 h-[1px] bg-primary mx-auto mt-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
