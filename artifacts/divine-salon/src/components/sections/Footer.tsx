import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          
          <div className="space-y-6">
            <a href="#home" className="text-3xl font-serif font-bold tracking-tight inline-block">
              <span>Divine</span>
              <span className="text-primary ml-1">.</span>
            </a>
            <p className="text-white/60 font-light max-w-sm leading-relaxed">
              Premium hair, skin & makeup services crafted to make you look and feel your best in a luxurious environment.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.instagram.com/divinesalon.37/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919478809160" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a 
                href="https://maps.app.goo.gl/qT1TbhKbdhgKcYKc8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <FaMapMarkerAlt className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/60 font-light">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li>SCO 176, 1st Floor, Main Market, Sector 37C, Chandigarh – 160036</li>
              <li><a href="tel:+919478809160" className="hover:text-primary transition-colors">+91 94788 09160</a></li>
              <li>Mon - Sun: 10:00 AM – 9:00 PM</li>
            </ul>
          </div>
          
        </div>

        <div className="text-center text-white/40 text-sm font-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Divine Unisex Salon. All rights reserved.</p>
          <p>Sector 37C, Chandigarh</p>
        </div>
      </div>
    </footer>
  );
}
