import { useEffect } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Reviews } from '@/components/sections/Reviews';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { FloatingActions } from '@/components/ui/FloatingActions';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { Phone } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // Update meta tags for SEO
    document.title = "Divine Unisex Salon | Beauty & Hair Salon in Chandigarh";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Premium hair, skin & makeup services for men and women in Sector 37C, Chandigarh. Book your appointment at Divine Unisex Salon.');
  }, []);

  return (
    <div className="relative min-h-screen font-sans bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </main>
      
      <Footer />
      <FloatingActions />

      {/* Sticky Mobile "Book Appointment" Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex gap-3">
        <a 
          href="tel:+919478809160"
          className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3 rounded-sm text-sm font-semibold uppercase tracking-wider"
        >
          <Phone className="w-4 h-4" /> Call
        </a>
        <a 
          href="https://wa.me/919478809160"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center bg-primary text-primary-foreground py-3 rounded-sm text-sm font-semibold uppercase tracking-wider"
        >
          Book Appointment
        </a>
      </div>
      
      {/* Spacer for mobile fixed bar */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
}
