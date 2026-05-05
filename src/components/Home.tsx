/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Star, ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1 — HERO */}
      <section className="relative h-[calc(100vh-112px)] min-h-[600px] overflow-hidden">
        <div className="flex h-full flex-col lg:flex-row">
          {/* Left: Content Image Side */}
          <div className="relative w-full lg:w-[60%] h-[70vh] lg:h-full bg-kfc-red flex items-center p-8 lg:p-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img 
                src="https://picsum.photos/1200/800?random=hero" 
                alt="Bucket of Chicken" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-kfc-red/55 mix-blend-multiply" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-2xl space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block bg-kfc-gold text-kfc-black font-display px-4 py-2 text-xl rounded-full animate-float origin-left shadow-lg"
              >
                🔥 NEW & HOT
              </motion.div>

              <div className="space-y-2">
                <motion.h1 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-display text-white leading-[0.85]"
                >
                  REAL.
                </motion.h1>
                <motion.h1 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-display text-white leading-[0.85]"
                >
                  CRISPY.
                </motion.h1>
                <motion.h1 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-display text-white leading-[0.85]"
                >
                  LEGENDARY.
                </motion.h1>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl lg:text-2xl text-kfc-cream font-sans max-w-md leading-relaxed"
              >
                11 herbs & spices. One irresistible crunch. Freshly breaded in-store all day, every day.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button className="btn-gold py-5 text-xl">
                  Order Now <ArrowRight className="ml-2 w-6 h-6" />
                </button>
                <button className="btn-ghost !border-white !text-white hover:!bg-white hover:!text-kfc-red py-5 text-xl">
                  Find a Store
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right: Black Visual Side (for split effect on desktop) */}
          <div className="hidden lg:flex w-[40%] bg-kfc-black items-center justify-center relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 opacity-10">
              <span className="text-[300px] font-display text-white whitespace-nowrap select-none">
                GOOD
              </span>
            </div>
            
            <div className="text-center p-12 space-y-6">
              <h2 className="text-6xl text-kfc-gold font-display leading-tight uppercase">
                Finger Lickin' <br /> Good
              </h2>
              <div className="w-24 h-1 bg-kfc-red mx-auto rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — SOCIAL PROOF BAR */}
      <section className="bg-kfc-red text-white py-6 overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee-slow flex items-center gap-12 font-display text-2xl uppercase tracking-wider">
            <span>🍗 Over 25,000 Restaurants</span>
            <span className="opacity-30">/</span>
            <span>⭐ 4.8/5 App Rating</span>
            <span className="opacity-30">/</span>
            <span>🌍 145+ Countries</span>
            <span className="opacity-30">/</span>
            <span>🔥 Founded 1952</span>
            <span className="opacity-30">/</span>
            <span>👨‍🍳 Colonel's Secret Recipe</span>
            <span className="opacity-30">/</span>
            <span>🍗 Over 25,000 Restaurants</span>
            <span className="opacity-30">/</span>
            <span>⭐ 4.8/5 App Rating</span>
            <span className="opacity-30">/</span>
            <span>🌍 145+ Countries</span>
            <span className="opacity-30">/</span>
            <span>🔥 Founded 1952</span>
            <span className="opacity-30">/</span>
            <span>👨‍🍳 Colonel's Secret Recipe</span>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-slow {
            animation: marquee-slow 40s linear infinite;
          }
        `}} />
      </section>

      {/* SECTION 3 — FEATURED DEALS */}
      <section className="py-24 bg-kfc-cream px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-section">Today's Hot Deals</h2>
            <p className="text-kfc-text-muted font-sans text-lg">Freshly served offers. Grab them before they're gone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <DealCard 
              image="https://picsum.photos/600/400?random=deal1"
              title="The Tuesday Special"
              desc="9 pieces of Original Recipe chicken for a price that'll make you smile."
              price="12.99"
              expires="22:30:14"
            />
            <DealCard 
              image="https://picsum.photos/600/400?random=deal2"
              title="Bucket for Two"
              desc="2 Burgers, 2 Fries, and 2 Large Drinks. Perfect for a date night."
              price="19.99"
              expires="18:15:00"
            />
            <DealCard 
              image="https://picsum.photos/600/400?random=deal3"
              title="Zinger Stacker Meal"
              desc="New Zinger Stacker burger with regular fries and a drink."
              price="8.49"
              expires="04:55:02"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — MENU CATEGORIES */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-section">What are you craving?</h2>
            <a href="#menu" className="text-kfc-red font-bold font-sans flex items-center group">
              Full Menu <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex overflow-x-auto lg:grid grid-cols-5 gap-8 pb-4 scrollbar-hide">
            <CategoryItem label="Original Recipe" image="https://picsum.photos/200/200?random=c1" />
            <CategoryItem label="Zinger Burgers" image="https://picsum.photos/200/200?random=c2" />
            <CategoryItem label="Family Buckets" image="https://picsum.photos/200/200?random=c3" />
            <CategoryItem label="Golden Sides" image="https://picsum.photos/200/200?random=c4" />
            <CategoryItem label="Sweet Desserts" image="https://picsum.photos/200/200?random=c5" />
          </div>
        </div>
      </section>

      {/* SECTION 5 — APP DOWNLOAD BANNER */}
      <section className="relative bg-kfc-black overflow-hidden py-24">
        {/* Background Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <span className="text-[200px] md:text-[400px] font-display text-white whitespace-nowrap">FINGER LICKIN'</span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <h2 className="text-5xl lg:text-7xl font-display text-white leading-tight uppercase">
                Order on the App.<br />
                <span className="text-kfc-red">Get 10% Off</span> every time.
              </h2>
              <p className="text-xl text-kfc-cream/70 font-sans max-w-lg">
                Exclusive app deals. Track your order in real-time. Earn rewards on every bite.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <button className="bg-white text-kfc-black px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 bg-black rounded-full" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase opacity-60">Download on</p>
                    <p className="text-lg font-bold leading-none">App Store</p>
                  </div>
                </button>
                <button className="bg-white text-kfc-black px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 bg-black rounded-full" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase opacity-60">Get it on</p>
                    <p className="text-lg font-bold leading-none">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative max-w-sm mx-auto">
                {/* Mock Phone */}
                <div className="w-full aspect-[9/19] bg-white/5 border-[8px] border-white/10 rounded-[60px] relative overflow-hidden shadow-2xl">
                  {/* Phone Content Placeholder */}
                  <div className="absolute inset-0 p-6 flex flex-col space-y-4">
                    <div className="w-full h-8 bg-white/10 rounded-full" />
                    <div className="w-full aspect-[16/9] bg-kfc-red rounded-2xl" />
                    <div className="flex-grow space-y-4 pt-4">
                      <div className="w-3/4 h-4 bg-white/20 rounded-full" />
                      <div className="w-full h-4 bg-white/10 rounded-full" />
                      <div className="w-1/2 h-24 bg-white/5 rounded-2xl" />
                    </div>
                  </div>
                  {/* Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-kfc-red/20 blur-[100px] rounded-full" />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-kfc-gold rounded-full flex items-center justify-center font-display text-4xl text-kfc-black -rotate-12 animate-float">
                  ★
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DealCard({ image, title, desc, price, expires }: any) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-kfc-red/5 group transition-all duration-300 hover:shadow-2xl">
      <div className="h-60 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-4 left-4 bg-kfc-red text-white py-1 px-4 font-display rounded-full text-lg">
          HOT DEAL
        </div>
      </div>
      <div className="p-8 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-3xl font-display group-hover:text-kfc-red transition-colors">{title}</h3>
        </div>
        <p className="text-kfc-text-muted font-sans text-sm line-clamp-2">{desc}</p>
        <div className="flex items-center gap-2 text-kfc-red font-bold font-sans text-xs uppercase tracking-widest">
           Expires in: {expires}
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-kfc-text-muted uppercase">From</span>
            <span className="text-3xl font-display text-kfc-black">${price}</span>
          </div>
          <button className="btn-primary py-3 px-6 h-auto">Add to Order</button>
        </div>
      </div>
    </div>
  );
}

function CategoryItem({ label, image }: any) {
  return (
    <div className="flex flex-col items-center gap-4 min-w-[120px] group cursor-pointer">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-kfc-cream p-1 border-2 border-transparent transition-all duration-300 group-hover:border-kfc-red group-hover:scale-105 overflow-hidden">
        <img src={image} alt={label} className="w-full h-full object-cover rounded-full" />
      </div>
      <span className="text-lg font-display text-center uppercase group-hover:text-kfc-red transition-colors">{label}</span>
    </div>
  );
}

function ChevronRight(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
