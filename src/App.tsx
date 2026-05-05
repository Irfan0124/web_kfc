/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ShoppingBag, MapPin, User, Menu as MenuIcon, X, ChevronRight, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import StyleGuide from './components/StyleGuide';
import Home from './components/Home';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      setShowBackToTop(window.scrollY > 400);
    };

    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);
      window.scrollTo(0, 0); // Reset scroll on navigation
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const menuItems = [
    { label: 'Menu', href: '#menu' },
    { label: 'Deals', href: '#deals' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Rewards', href: '#rewards' },
    { label: 'Style Guide', href: '#style-guide' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-kfc-red text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block font-sans text-xs uppercase tracking-widest font-bold px-4">
          Free delivery on orders over $25 · New Zinger Stacker is here · Download the app and get 10% off ·&nbsp;
          Free delivery on orders over $25 · New Zinger Stacker is here · Download the app and get 10% off ·&nbsp;
        </div>
      </div>

      {/* Navigation */}
      <nav 
        className={`sticky top-0 z-50 w-full transition-all duration-300 h-[72px] flex items-center px-6 lg:px-12 border-b ${
          scrolled 
            ? 'bg-kfc-black text-white border-transparent' 
            : 'bg-white text-kfc-text border-kfc-red/10'
        }`}
      >
        {/* Logo */}
        <a href="#home" className="mr-8 flex-shrink-0">
          <span className="text-4xl font-display text-kfc-red tracking-tight">KFC</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 flex-grow">
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className={`font-display text-lg tracking-wide uppercase transition-colors hover:text-kfc-red ${
                currentHash === item.href ? 'text-kfc-red' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="btn-primary py-2 px-6 text-sm">Find a KFC</button>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-black/5 rounded-full transition-colors">
              <ShoppingBag size={24} />
              <span className="absolute -top-1 -right-1 bg-kfc-red text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                0
              </span>
            </button>
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <User size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center space-x-4 ml-auto">
          <button className="p-2">
            <ShoppingBag size={24} />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-2"
          >
            <MenuIcon size={24} />
          </button>
        </div>

        {/* Moving Marquee CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}} />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-kfc-black flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-4xl font-display text-kfc-red">KFC</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-4xl font-display uppercase tracking-widest hover:text-kfc-red transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/10 space-y-4">
              <button className="btn-primary w-full text-xl py-5">Order Now</button>
              <div className="flex justify-center space-x-8 text-white/60">
                <MapPin size={24} />
                <User size={24} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHash}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentHash === '#home' && <Home />}
            {currentHash === '#style-guide' && <StyleGuide />}
            
            {/* Placeholder for other routes */}
            {!['#home', '#style-guide'].includes(currentHash) && (
              <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-6 bg-kfc-cream">
                <h1 className="text-display text-kfc-red animate-pulse">Coming Fast From The Fryer</h1>
                <p className="text-xl font-sans max-w-md text-kfc-text-muted">
                  We're currently breading the "{currentHash.substring(1)}" page. It'll be ready and crispy in the next prompt!
                </p>
                <div className="flex gap-4">
                  <a href="#home" className="btn-primary">Back Home</a>
                  <a href="#style-guide" className="btn-ghost">View Style Guide</a>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-40 bg-kfc-red text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer (Simplified from Prompt 3) */}
      <footer className="bg-kfc-black text-white pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <span className="text-5xl font-display text-kfc-red">KFC</span>
              <p className="text-kfc-cream/60 font-sans leading-relaxed">
                "Finger Lickin' Good" for over 70 years. <br />
                The world's most legendary chicken.
              </p>
              <div className="flex space-x-4">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kfc-red transition-colors cursor-pointer">FB</div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kfc-red transition-colors cursor-pointer">IG</div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kfc-red transition-colors cursor-pointer">TT</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-display text-kfc-gold">The Food</h4>
              <nav className="flex flex-col space-y-2 font-sans opacity-70">
                <a href="#menu" className="hover:text-kfc-gold transition-colors">Our Menu</a>
                <a href="#deals" className="hover:text-kfc-gold transition-colors">Deals & Offers</a>
                <a href="#" className="hover:text-kfc-gold transition-colors">Nutrition Info</a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-display text-kfc-gold">The Colonel</h4>
              <nav className="flex flex-col space-y-2 font-sans opacity-70 text-sm">
                <a href="#" className="hover:text-kfc-gold transition-colors">About KFC</a>
                <a href="#" className="hover:text-kfc-gold transition-colors">Careers</a>
                <a href="#" className="hover:text-kfc-gold transition-colors">Franchising</a>
                <a href="#" className="hover:text-kfc-gold transition-colors">Sustainability</a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-display text-kfc-gold">Hot Deals Inbox</h4>
              <div className="flex flex-col space-y-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/10 border border-white/20 px-4 py-3 rounded-md font-sans text-white focus:outline-none focus:border-kfc-red transition-colors"
                />
                <button className="btn-primary w-full py-3 h-auto">Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-white/40">
            <p>© 2025 KFC. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
            <p>Made with 🍗 by KFC Digital</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
