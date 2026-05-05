/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  MapPin, 
  Tag, 
  Menu as MenuIcon, 
  Star, 
  ArrowRight,
  Plus
} from "lucide-react";

export default function StyleGuide() {
  return (
    <div className="min-h-screen p-8 bg-kfc-cream">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <section className="border-b border-kfc-red/20 pb-8">
          <h1 className="text-display text-kfc-red mb-4">KFC Design System</h1>
          <p className="text-xl text-kfc-text-muted font-sans">
            Bold, loud, craveable. Built for high conversion.
          </p>
        </section>

        {/* Colors */}
        <section className="space-y-6">
          <h2 className="text-section text-kfc-black">1. Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <ColorSwatch hex="#E4002B" name="KFC Red" variable="--kfc-red" lightText />
            <ColorSwatch hex="#FFF5E1" name="KFC Cream" variable="--kfc-cream" />
            <ColorSwatch hex="#1A0000" name="KFC Black" variable="--kfc-black" lightText />
            <ColorSwatch hex="#F6C540" name="KFC Gold" variable="--kfc-gold" />
            <ColorSwatch hex="#B0001F" name="Dark Red" variable="--kfc-dark-red" lightText />
            <ColorSwatch hex="#F2F2F2" name="Light Gray" variable="--kfc-light-gray" />
            <ColorSwatch hex="#6B5B5B" name="Text Muted" variable="--kfc-text-muted" lightText />
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-section text-kfc-black">2. Typography</h2>
          <div className="space-y-4 bg-white p-8 rounded-xl shadow-sm">
            <div>
              <p className="text-xs text-kfc-text-muted mb-2 font-mono uppercase tracking-widest">Display .text-display</p>
              <h1 className="text-display">Real. Crispy. Legendary.</h1>
            </div>
            <div>
              <p className="text-xs text-kfc-text-muted mb-2 font-mono uppercase tracking-widest">Hero .text-hero</p>
              <h1 className="text-hero">Kentucky Fried Chicken</h1>
            </div>
            <div>
              <p className="text-xs text-kfc-text-muted mb-2 font-mono uppercase tracking-widest">Section Heading .text-section</p>
              <h2 className="text-section">Todays Hot Deals</h2>
            </div>
            <div>
              <p className="text-xs text-kfc-text-muted mb-2 font-mono uppercase tracking-widest">Body Text font-sans</p>
              <p className="max-w-prose">
                It's finger lickin' good. Since 1952, we've been serving up the world's finest 
                original recipe chicken using the Colonel's secret blend of 11 herbs and spices.
              </p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-section text-kfc-black">3. Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center bg-white p-8 rounded-xl shadow-sm">
            <button className="btn-primary">Order Now <ArrowRight className="ml-2 w-5 h-5" /></button>
            <button className="btn-secondary">View Menu</button>
            <button className="btn-ghost">Find a Store</button>
            <button className="btn-gold">Join Rewards</button>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <h2 className="text-section text-kfc-black">4. Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item Card */}
            <div className="card-menu-item group">
              <div className="aspect-square bg-gray-200 overflow-hidden relative">
                <img 
                  src="https://picsum.photos/400/400?random=1" 
                  alt="Zinger Burger"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-kfc-red text-white font-display px-3 py-1 text-lg rounded-full animate-float">
                  NEW
                </span>
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-kfc-red text-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-2xl">Zinger Stacker</h3>
                <p className="text-kfc-text-muted text-sm font-sans line-clamp-2">
                  Two fiery Zinger fillets, cheese, spicy sauce, and lettuce on a sesame bun.
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-display text-kfc-red">$9.99</span>
                  <span className="text-xs font-sans text-kfc-text-muted">640 kcal</span>
                </div>
              </div>
            </div>

            {/* Deal Card */}
            <div className="bg-kfc-black text-white rounded-2xl overflow-hidden relative shadow-xl h-[400px]">
              <div className="absolute inset-0 opacity-40">
                <img 
                  src="https://picsum.photos/600/800?random=2" 
                  alt="Deal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-kfc-black via-kfc-black/60 to-transparent"></div>
              <div className="absolute bottom-0 p-8 space-y-4">
                <div className="inline-block bg-kfc-gold text-kfc-black font-display px-3 py-1 text-sm rounded-md mb-2">
                  LIMITED TIME
                </div>
                <h3 className="text-4xl">The Big Bucket Deal</h3>
                <p className="text-sm text-kfc-cream/80 line-clamp-2 font-sans">
                  8 pieces of original recipe chicken, 2 large fries, and 4 sides for a legend price.
                </p>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-display text-kfc-gold">$19.99</span>
                  <span className="text-xl font-display text-white/50 line-through mb-1">$28.99</span>
                </div>
                <button className="btn-gold w-full">Claim Offer</button>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-8 rounded-2xl border border-kfc-red/10 shadow-sm space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl">Piccadilly Store</h3>
                  <p className="text-sm text-kfc-text-muted font-sans mt-2">
                    123 High Street, Manchester, M1 1AF
                  </p>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold font-sans">
                  OPEN NOW
                </div>
              </div>
              <div className="space-y-2 text-sm font-sans flex items-center justify-between text-kfc-text-muted">
                <span className="flex items-center gap-2"><MapPin size={16} /> 0.8 miles away</span>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 btn-ghost py-2 h-auto text-sm">Directions</button>
                <button className="flex-1 btn-primary py-2 h-auto text-sm">Order Here</button>
              </div>
            </div>
          </div>
        </section>

        {/* Animations Demo */}
        <section className="space-y-6">
          <h2 className="text-section text-kfc-black">5. Animations</h2>
          <div className="flex flex-wrap gap-8">
            <div className="p-8 bg-kfc-red text-white rounded-xl animate-fade-up">
              Fade In Up (.animate-fade-up)
            </div>
            <div className="p-8 bg-kfc-gold text-kfc-black rounded-xl animate-float">
              Floating Badge (.animate-float)
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ColorSwatch({ hex, name, variable, lightText = false }: { hex: string, name: string, variable: string, lightText?: boolean }) {
  return (
    <div className="space-y-2">
      <div 
        className={`h-24 rounded-lg shadow-inner flex items-end p-2 ${lightText ? 'text-white' : 'text-kfc-black'}`}
        style={{ backgroundColor: hex }}
      >
        <span className="text-[10px] font-mono opacity-50 uppercase">{hex}</span>
      </div>
      <div>
        <p className="text-xs font-bold font-sans">{name}</p>
        <p className="text-[10px] text-kfc-text-muted font-mono">{variable}</p>
      </div>
    </div>
  );
}
