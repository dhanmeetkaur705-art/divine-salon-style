import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import imgHairStyling from '@assets/e00c1ad3-7d20-4a07-a2fa-51cbe5518de8_1783936509999.jpeg';
import imgBridalHair from '@assets/3_IMG_7335_1783674227732.jpeg';
import imgWavyHair from '@assets/6e2d1354-9e78-4922-9562-b3e8bb67a1ad_1783936509999.jpeg';
import imgClientPortrait from '@assets/7281a472-b6ca-40df-9f3f-a7f7329519db_1783863997115.jpeg';
import imgBlowDry from '@assets/IMG_7410_1783935286239.jpeg';
import imgManicure from '@assets/IMG_7409_1783935286239.jpeg';
import imgLongStraightHair from '@assets/80166643-f2dd-4d4c-b91a-629208c60032_1783936600400.jpeg';
import imgSalonInterior from '@assets/0_IMG_7338_1783674227732.jpeg';
import vidHairColor from '@assets/89d01305-f083-4118-9f62-c7ab79dc7036_1783936834504.mov';
import vidBlowDry from '@assets/01e69d80-59a3-48d1-b222-b465f3ac8dcc_1783936896437.mov';

const images = [
  { type: 'image' as const, src: imgHairStyling, alt: 'Layered Hair Styling', title: 'Hair Styling' },
  { type: 'image' as const, src: imgBridalHair, alt: 'Bridal Hair Updo', title: 'Bridal Hair' },
  { type: 'image' as const, src: imgClientPortrait, alt: 'Happy Client Look', title: 'Client Look' },
  { type: 'image' as const, src: imgWavyHair, alt: 'Beachy Hair Waves', title: 'Hair Waves' },
  { type: 'video' as const, src: vidBlowDry, alt: 'Blow Dry Styling', title: 'Blow Dry' },
  { type: 'image' as const, src: imgManicure, alt: 'Manicure Finish', title: 'Manicure' },
  { type: 'image' as const, src: imgLongStraightHair, alt: 'Long Straight Hair Styling', title: 'Hair Straightening' },
  { type: 'video' as const, src: vidHairColor, alt: 'Hair Color Transformation', title: 'Hair Coloring' },
  { type: 'image' as const, src: imgSalonInterior, alt: 'Salon Ambience', title: 'Our Salon' },
];

function GalleryVideo({ src, alt }: { src: string; alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay was blocked; retry once metadata/data is ready.
      });
    };

    tryPlay();
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tryPlay();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(video);

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}

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
              {img.type === 'video' ? (
                <GalleryVideo src={img.src} alt={img.alt} />
              ) : (
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
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
