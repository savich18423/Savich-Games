/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Youtube, 
  Gamepad2, 
  ExternalLink, 
  Mail, 
  Menu, 
  X,
  Play,
  Languages
} from "lucide-react";
import React, { useState, useEffect } from "react";

type Lang = "EN";

const CONTENT = {
  hero: {
    subtitle: "INDIE GAME STUDIO",
    description: "3D HORROR STUDIO SPECIALIZING IN UNCONVENTIONAL CONCEPTS.",
    cta: "EXPLORE THE VOID",
    scroll: "SCROLL TO DISCOVER"
  },
  nav: {
    about: "ABOUT",
    games: "ROADMAP",
    contact: "SIGNAL",
  },
  about: {
    title: "THE CREATOR'S PATH",
    subtitle: "BEYOND THE CODE",
    p1: "My name is Zakhar. I'm an indie developer from Russia, currently based in Vietnam. My journey into the digital abyss started at 12 with Python; today, I build complex systems in TypeScript, C++, and C#.",
    p2: "With less than two years in game development, I've dedicated myself to the craft of pure code. I develop solo on Unity, rejecting visual scripting and blueprints in favor of direct C# architecture.",
  },
  games: {
    title: "RELEASES",
    status_released: "ACTIVE_PROTOCOL",
    status_future: "IN_DEVELOPMENT",
    status_classified: "CLASSIFIED",
    play_steam: "PLAY ON STEAM",
    demo: "ACCESS DEMO",
    sector_gamma_desc: "1968. Height of the Cold War. A faceless man with a load of childhood trauma signs a 7-day contract. He must not just dispose of waste, but fight back. Survive the fear. SURVIVE.",
    yapoam_desc: "The city is no longer the same.",
  },
  giveaway: {
    title: "STAY IN THE SHADOWS",
    desc: "ENTER YOUR EMAIL TO RECEIVE UPDATES ON NEW PROTOCOLS AND EXCLUSIVE ACCESS CODES.",
    placeholder: "IDENTIFICATION@VOID.COM",
    button: "SUBMIT"
  },
  recruitment: {
    title: "JOIN THE TEAM",
    desc: "We are looking for talent. Select your role and apply.",
    roles: ["Programmer", "3D Modeler", "Animator", "Artist", "Sound Designer"],
    submit: "SEND APPLICATION",
  },
  contact: {
    title: "SEND SIGNAL",
    subtitle: "SEND A MESSAGE",
    name: "NAME",
    email: "EMAIL",
    message: "MESSAGE",
    send: "TRANSMIT",
    success: "SIGNAL RECEIVED."
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const t = CONTENT;

  return (
    <div className="min-h-screen bg-black selection:bg-red-600/30 overflow-x-hidden cursor-none">
      <div className="noise-grain" />
      {/* Ordinary Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-[2000] hidden md:block w-4 h-4 border border-white/50 rounded-full"
        style={{ 
          left: mousePos.x, 
          top: mousePos.y, 
          transform: "translate(-50%, -50%)" 
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
      </div>

      {/* Cinematic Overlays */}
      <div className="horror-overlay" />
      <div className="scanlines" />
      
      <div className="grit-bg" />

      {/* Stable UI Elements */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <img src="https://i.ibb.co/ZznmVWZ4/Chat-GPT-Image-8-2026-18-01-44.png" alt="Logo" className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform" />
            <span className="font-display text-2xl tracking-tighter text-white group-hover:text-red-600 transition-colors">SAVICH18-GAMES</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <a href="#about" onMouseDown={(e) => e.stopPropagation()} className="text-xs font-bold tracking-[0.2em] hover:text-red-600 transition-colors uppercase">{t.nav.about}</a>
              <a href="#games" onMouseDown={(e) => e.stopPropagation()} className="text-xs font-bold tracking-[0.2em] hover:text-red-600 transition-colors uppercase">{t.nav.games}</a>
              <a href="#contact" onMouseDown={(e) => e.stopPropagation()} className="text-xs font-bold tracking-[0.2em] hover:text-red-600 transition-colors uppercase">{t.nav.contact}</a>
            </div>
          </div>

          <button className="md:hidden text-white" onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-black border-t border-red-900/10 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-red-600 transition-colors">{t.nav.about}</a>
                <a href="#games" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-red-600 transition-colors">{t.nav.games}</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest hover:text-red-600 transition-colors">{t.nav.contact}</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 px-6 overflow-hidden torn-edge">
        <motion.div 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.imgur.com/0GPlE.gif" 
            alt="Cinematic Background" 
            className="w-full h-full object-cover opacity-80 contrast-125 brightness-[0.6] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          <div className="absolute inset-0 crimson-gradient" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, rotateX: 45, y: 100 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 text-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-6 text-red-600 font-display text-3xl tracking-[0.6em] uppercase red-glow crimson-glow-text"
          >
            {t.hero.subtitle}
          </motion.div>
          
          <h1 className="text-8xl md:text-[13rem] font-display leading-[0.75] tracking-tighter text-white italic mb-10 text-3d hover:scale-[1.02] transition-transform duration-500 cursor-default select-none glitch-hover">
            SAVICH<span className="text-red-700">18</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-gray-200 text-sm font-bold tracking-[0.4em] uppercase mb-14 border-y-2 border-red-900/40 py-8 backdrop-blur-md bg-black/40 text-3d-white relative overflow-hidden group">
            <span className="relative z-10">{t.hero.description}</span>
            <div className="absolute inset-0 bg-red-600/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </p>
          
          <motion.a 
             href="#games" 
             onMouseDown={(e) => e.stopPropagation()}
             whileHover={{ 
               scale: 1.1, 
               skewX: -12, 
               boxShadow: "0 20px 50px rgba(220, 38, 38, 0.6)"
             }}
             whileTap={{ scale: 0.9 }}
             className="inline-block px-20 py-8 bg-red-700 text-white font-bold tracking-[0.5em] transition-all border-b-8 border-red-900 uppercase text-xl relative group overflow-hidden"
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Vertical Socials */}
        <div className="absolute left-10 bottom-24 hidden lg:flex flex-col gap-6 text-white/50">
           <a href="https://www.youtube.com/@Savich18Company" target="_blank" className="hover:text-red-600 transition-colors"><Youtube /></a>
           <a href="https://store.steampowered.com/curator/45912717-Savich18-Games/" target="_blank" className="hover:text-red-600 transition-colors"><Gamepad2 /></a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 code-backdrop whitespace-pre opacity-20">
          {Array(40).fill(0).map((_, i) => (
            <div key={i}>
              {`void Update() { if (fearLevel > maxFear) { Instantiate(Nightmare, playerPos, Quaternion.identity); } } // SYSTEM_CRITICAL_ERROR_0x${(i * 1234).toString(16).toUpperCase()}`}
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-20 items-center relative z-10">
           <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -50 }}
             className="space-y-8"
           >
              <div className="flex items-center gap-3">
                <div className="bullet-accent" />
                <span className="font-mono text-red-600 text-sm tracking-widest">{t.about.subtitle}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display text-white uppercase italic glitch-hover">{t.about.title}</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed border-l-2 border-red-900 pl-8 bg-black/40 backdrop-blur-sm p-6">
                 <p>{t.about.p1}</p>
                 <p>{t.about.p2}</p>
              </div>
           </motion.div>

          <div className="relative">
            <div className="absolute -inset-10 bg-red-900/10 blur-3xl rounded-full" />
            <img 
              src="https://i.ibb.co/ZznmVWZ4/Chat-GPT-Image-8-2026-18-01-44.png" 
              alt="Zakhar" 
              className="relative z-10 w-full aspect-square object-cover grayscale border-2 border-white/5 filter contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Games (Roadmap) Section */}
      <section id="games" className="py-40 px-6 bg-black relative overflow-hidden">
        {/* Tactical Map Grid Backdrop */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
          style={{ 
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", 
            backgroundSize: "60px 60px" 
          }} 
        />
        
        {/* Radar Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radar-vortex rounded-full pointer-events-none opacity-20" />
        
        {/* Tactical Coordinates */}
        <div className="map-coordinate top-10 left-10">LAT: 55.7558° N</div>
        <div className="map-coordinate top-10 right-10">LNG: 37.6173° E</div>
        <div className="map-coordinate bottom-10 left-10">ALT: 128m</div>
        <div className="map-coordinate bottom-10 right-10">STATUS: ACTIVE</div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-40">
            <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 30 }}
               className="inline-block px-6 py-2 border border-red-900 bg-red-950/20 text-red-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-8"
            >
              TACTICAL DEPLOYMENT PLAN
            </motion.div>
            <h2 className="text-7xl md:text-9xl font-display text-white italic tracking-tighter uppercase leading-[0.8] glitch-hover">
              {t.games.title}
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Timeline Line with Pulse */}
            <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-red-900/30 md:-translate-x-1/2 overflow-hidden">
               <motion.div 
                 animate={{ y: ["0%", "100%"] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="w-full h-40 bg-gradient-to-b from-transparent via-red-600 to-transparent"
               />
            </div>

            {/* Project 01: Protocol Zero */}
            <div className="relative mb-40 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-20 mb-10 md:mb-0 text-left md:text-right">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center md:justify-end gap-4 mb-4">
                    <span className="text-red-600 font-mono text-xs font-bold tracking-widest">{t.games.status_released}</span>
                    <div className="w-12 h-[1px] bg-red-900" />
                  </div>
                  <h3 className="text-4xl md:text-6xl font-display text-white uppercase italic mb-6 leading-none">
                    THE SUBJECT: PROTOCOL ZERO
                  </h3>
                  <p className="text-gray-400 font-serif italic text-lg leading-relaxed mb-8">
                    Institute Zero pays for your pain. The game uses your webcam and microphone, turning the room into a lab.
                  </p>
                  <div className="flex flex-wrap gap-4 md:justify-end">
                    <motion.a 
                      onMouseDown={(e) => e.stopPropagation()}
                      href="https://store.steampowered.com/app/4287530/The_subject_Protocol_zero/" 
                      target="_blank"
                      whileHover={{ scale: 1.05, skewX: -5 }}
                      className="px-6 py-3 bg-red-700 text-white font-bold uppercase text-[9px] tracking-[0.3em] flex items-center gap-3"
                    >
                       <Play size={12} fill="white" /> {t.games.play_steam}
                    </motion.a>
                    <motion.a 
                      onMouseDown={(e) => e.stopPropagation()}
                      href="https://store.steampowered.com/app/4332220/The_subject_Protocol_zero_Demo/" 
                      target="_blank"
                      whileHover={{ scale: 1.05, skewX: -5 }}
                      className="px-6 py-3 border border-white/10 hover:border-white transition-all text-white font-bold uppercase text-[9px] tracking-[0.3em]"
                    >
                       {t.games.demo}
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <div className="absolute left-[30px] md:left-1/2 w-12 h-12 bg-black border-2 border-red-600 rounded-full z-20 md:-translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                <span className="text-red-600 font-display text-xl italic select-none">01</span>
              </div>

              <div className="md:w-1/2 md:pl-20 pl-16 md:pl-20">
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute -inset-2 bg-red-600/20 blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <img 
                    src="https://i.ibb.co/j9nC2MST/header.jpg" 
                    className="relative w-full aspect-video object-cover grayscale brightness-75 border border-red-900 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 crt-flicker" 
                    alt="Protocol Zero"
                  />
                  {/* Tactical readout overlay */}
                  <div className="absolute top-2 right-2 font-mono text-[8px] text-red-500/50 uppercase tracking-tighter">
                    Status: Deployed // Alpha_Sector
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Project 02: Sector Gamma */}
            <div className="relative mb-20 flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-20 mb-10 md:mb-0 text-left">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-[1px] bg-orange-900" />
                    <span className="text-orange-600 font-mono text-xs font-bold tracking-widest">{t.games.status_future}</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-display text-white uppercase italic mb-6 leading-none glitch-hover">
                    SECTOR GAMMA
                  </h3>
                  <p className="text-gray-400 font-serif italic text-lg leading-relaxed mb-8">
                    {t.games.sector_gamma_desc}
                  </p>
                  <div className="inline-block p-4 border-l-8 border-red-700 bg-red-950/20 text-xs text-red-500 font-mono font-bold uppercase tracking-widest">
                    TARGET: OCTOBER 2026
                  </div>
                </motion.div>
              </div>

              <div className="absolute left-[30px] md:left-1/2 w-12 h-12 bg-black border-2 border-orange-600 rounded-full z-20 md:-translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                <span className="text-orange-600 font-display text-xl italic select-none">02</span>
              </div>

              <div className="md:w-1/2 md:pr-20 pl-16 md:pl-0 md:pr-20">
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute -inset-2 bg-orange-600/10 blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <img 
                    src="https://i.ibb.co/23dv1zhW/image.png" 
                    className="relative w-full aspect-video object-cover grayscale brightness-50 border border-orange-900/50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 crt-flicker" 
                    alt="Sector Gamma"
                  />
                  {/* Tactical readout overlay */}
                  <div className="absolute bottom-2 left-2 font-mono text-[8px] text-orange-500/50 uppercase tracking-tighter">
                    Stage: Development // Gamma_Core
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Path indicator into the future */}
            <div className="w-full h-40 flex justify-center py-20">
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-4 h-4 bg-red-600 rotate-45"
              />
            </div>

            {/* Project 03: YAPOAM (Classified) */}
            <div className="relative mb-20 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-20 mb-10 md:mb-0 text-left md:text-right">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center md:justify-end gap-4 mb-4">
                    <span className="text-gray-600 font-mono text-xs font-bold tracking-widest italic">{t.games.status_classified}</span>
                    <div className="w-12 h-[1px] bg-gray-600" />
                  </div>
                  <h3 className="text-4xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-gray-400 to-red-900 uppercase italic mb-4 leading-none blur-[0.3px] group-hover:blur-0 transition-all duration-500">
                    YAPOAM
                  </h3>
                  <p className="text-red-950 font-serif italic text-sm tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                    The city is no longer the same.
                  </p>
                  <div className="inline-block p-4 border-l-8 border-gray-900 bg-gray-900/20 text-xs text-gray-500 font-mono font-bold uppercase tracking-[0.5em] mt-6">
                    TARGET: 2027
                  </div>
                </motion.div>
              </div>

              <div className="absolute left-[30px] md:left-1/2 w-12 h-12 bg-black border-2 border-gray-800 rounded-full z-20 md:-translate-x-1/2 flex items-center justify-center border-dashed">
                <X size={18} className="text-gray-800" />
              </div>

              <div className="md:w-1/2 md:pl-20 pl-16 md:pl-20 opacity-20">
                <div className="w-full aspect-[21/9] bg-gradient-to-r from-transparent via-red-950/20 to-transparent flex items-center justify-center border border-white/5 relative overflow-hidden classified-glitch group">
                   <div className="absolute inset-0 scanlines" />
                   <span className="text-[10px] font-mono text-red-900 uppercase tracking-[1em] animate-pulse">2027_SIGNAL_LOST</span>
                   <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giveaway Section */}
      <section className="py-32 px-6 bg-[#0c0c0c] border-y-4 border-red-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/23dv1zhW/image.png')] bg-cover bg-fixed opacity-5 grayscale sepia" />
        <div className="absolute inset-0 crimson-gradient opacity-50" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-display text-white mb-8 tracking-tighter text-3d uppercase italic"
          >
            {t.giveaway.title}
          </motion.h2>
          <p className="text-red-600 font-bold text-lg uppercase tracking-[0.3em] mb-16">{t.giveaway.desc}</p>
          
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute -inset-1 bg-red-600 blur opacity-20 group-hover:opacity-40 transition" />
            <form action="https://formspree.io/f/mnjkrrjg" method="POST" className="relative flex flex-col md:flex-row gap-0 border-2 border-white/10 overflow-hidden">
              <input type="hidden" name="_subject" value="GIVEAWAY ENTRY: SECTOR GAMMA" />
              <input 
                type="email" 
                name="email" 
                placeholder={t.giveaway.placeholder} 
                required 
                className="flex-grow bg-black/80 p-6 outline-none font-mono text-xl text-white placeholder:text-gray-700 focus:bg-black transition-colors"
                onMouseDown={(e) => e.stopPropagation()}
              />
              <button 
                type="submit" 
                onMouseDown={(e) => e.stopPropagation()}
                className="px-12 py-6 bg-red-700 hover:bg-black hover:text-red-600 border-t-2 md:border-t-0 md:border-l-2 border-red-600 text-white font-bold tracking-widest transition-all uppercase text-sm active:scale-95"
              >
                {t.giveaway.button}
              </button>
            </form>
          </div>
        </div>
      </section>

                    {/* Support / Donation Section */}
      <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden border-y-4 border-red-900/30">
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
          style={{ 
            backgroundImage: "radial-gradient(circle, #ff0000 1px, transparent 1px)", 
            backgroundSize: "40px 40px" 
          }} 
        />
        
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 border border-red-900 bg-red-950/20 text-red-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-6">
              OFFICIAL DONATION SYSTEM
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-white uppercase italic tracking-tighter text-3d">
              SUPPORT <span className="text-red-700">SAVICH18</span>
            </h2>
            <div className="w-24 h-[2px] bg-red-600 mx-auto mt-6 shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
            <p className="text-gray-500 text-sm font-mono tracking-[0.3em] uppercase mt-6">
              YOUR SUPPORT HELPS US CREATE BETTER GAMES
            </p>
          </motion.div>

          {/* Donation Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-16"
          >
            <motion.a
              href="https://www.donationalerts.com/r/official_savich18"
              target="_blank"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 60px rgba(220, 38, 38, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-16 py-8 bg-gradient-to-r from-red-700 to-red-900 hover:from-black hover:to-red-900 border-2 border-red-600 text-white font-bold tracking-[0.3em] uppercase text-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">DONATE NOW</span>
              <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </motion.a>
            
            <p className="text-gray-600 text-[10px] font-mono tracking-[0.2em] uppercase mt-4">
              donationalerts.com/r/official_savich18
            </p>
          </motion.div>

          {/* Bonus Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-white/5 bg-black/60 backdrop-blur-sm overflow-hidden rounded-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-red-900/30 bg-red-950/20">
                    <th className="p-4 text-left text-[10px] font-bold tracking-[0.3em] text-red-500 uppercase">AMOUNT</th>
                    <th className="p-4 text-left text-[10px] font-bold tracking-[0.3em] text-red-500 uppercase">REWARD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-display text-xl">
                      2$+
                      <span className="block text-[8px] text-gray-600 font-mono tracking-widest">MINIMUM</span>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-400 text-sm font-mono">Support the project</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors border-l-2 border-red-600">
                    <td className="p-4 text-white font-display text-xl">
                      5$+
                      <span className="block text-[8px] text-red-500 font-mono tracking-widest">SPECIAL</span>
                    </td>
                    <td className="p-4">
                      <span className="text-red-500 font-bold text-lg tracking-wider">YOUR NAME IN GAME CREDITS</span>
                      <span className="block text-gray-400 text-xs font-mono mt-1">Highlighted in red color</span>
                      <span className="block text-gray-500 text-[10px] font-mono mt-2 italic">Write your nickname in donation comment</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-display text-xl">10$+</td>
                    <td className="p-4 text-gray-400 text-sm font-mono">
                      Name in credits + exclusive concept art with developer signature
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-display text-xl">50$+</td>
                    <td className="p-4 text-gray-400 text-sm font-mono">
                      All above + early access 2 months before release
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-display text-xl">100$+</td>
                    <td className="p-4 text-gray-400 text-sm font-mono">
                      All above + custom character or enemy with your name in the game
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors border-t-2 border-red-900/30">
                    <td className="p-4 text-white font-display text-2xl text-red-600">500$+</td>
                    <td className="p-4">
                      <span className="text-red-500 font-bold text-lg tracking-wider">"SHADOW PRODUCER"</span>
                      <span className="block text-gray-400 text-xs font-mono mt-1">Name on main screen, closed builds access, direct chat with developer</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Important Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-6 border border-red-900/20 bg-red-950/10 text-center"
          >
            <p className="text-gray-400 text-[10px] font-mono tracking-[0.2em] uppercase leading-relaxed">
              IMPORTANT: WRITE YOUR NICKNAME IN THE DONATION COMMENT<br />
              IF WE DID NOT ADD YOU TO THE CREDITS, PLEASE CONTACT US AND WE WILL ADD YOU
            </p>
            <p className="text-gray-600 text-[8px] font-mono tracking-[0.3em] uppercase mt-3">
              savich18.company@gmail.com
            </p>
          </motion.div>

          <div className="mt-12 text-center">
            <div className="inline-block border border-white/5 px-8 py-4 bg-black/40">
              <p className="text-gray-600 text-[9px] font-mono tracking-[0.3em] uppercase leading-relaxed">
                EVERY DONATION HELPS US IMPROVE OUR GAMES<br />
                THANK YOU FOR YOUR SUPPORT
              </p>
            </div>
          </div>

          {/* Quick Links - ONLY DonationAlerts */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.donationalerts.com/r/official_savich18"
              target="_blank"
              className="text-[8px] font-mono text-gray-600 hover:text-red-600 transition-colors uppercase tracking-[0.3em] border border-white/5 px-4 py-2 hover:border-red-600"
            >
              DonationAlerts
            </a>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-32 px-6 bg-black torn-edge-top">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <h2 className="text-6xl md:text-8xl font-display text-white italic text-3d tracking-tighter uppercase leading-none">{t.recruitment.title}</h2>
              <p className="text-gray-400 italic text-2xl border-l-4 border-red-700 pl-8 leading-relaxed">{t.recruitment.desc}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.recruitment.roles.map((role: string, i: number) => (
                  <motion.div 
                    key={role}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 border border-white/10 bg-white/5 font-mono text-xs text-gray-400 uppercase tracking-widest flex items-center gap-4 hover:border-red-600 transition-colors group"
                  >
                    <div className="w-2 h-2 bg-red-700 group-hover:scale-150 transition-transform" /> 
                    {role}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full relative"
            >
               <div className="absolute -inset-4 bg-red-900/5 blur-2xl" />
               <form action="https://formspree.io/f/mnjkrrjg" method="POST" className="relative w-full space-y-6 p-10 border-2 border-white/5 bg-black/60 backdrop-blur-xl">
                  <input type="hidden" name="_subject" value="JOB APPLICATION: SAVICH18" />
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-red-600 ml-1 uppercase">{t.contact.name}</div>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      onMouseDown={(e) => e.stopPropagation()}
                      className="w-full bg-white/5 border border-white/10 p-5 outline-none focus:border-red-700 font-mono text-lg text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-red-600 ml-1 uppercase">{t.contact.email}</div>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      onMouseDown={(e) => e.stopPropagation()}
                      className="w-full bg-white/5 border border-white/10 p-5 outline-none focus:border-red-700 font-mono text-lg text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-red-600 ml-1 uppercase tracking-widest">YOUR ROLE</div>
                    <select 
                      name="role" 
                      required 
                      onMouseDown={(e) => e.stopPropagation()}
                      className="w-full bg-white/5 border border-white/10 p-5 outline-none focus:border-red-700 font-mono text-lg text-gray-400 appearance-none"
                    >
                      <option value="" disabled selected className="bg-black">SELECT ROLE</option>
                      {t.recruitment.roles.map((role: string) => (
                        <option key={role} value={role} className="bg-black">{role}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-red-600 ml-1 uppercase tracking-widest">PORTFOLIO / BIO</div>
                    <textarea 
                      name="message" 
                      rows={4} 
                      required 
                      onMouseDown={(e) => e.stopPropagation()}
                      className="w-full bg-white/5 border border-white/10 p-5 outline-none focus:border-red-700 font-mono text-lg text-white resize-none"
                    />
                  </div>
                  <button 
                    type="submit" 
                    onMouseDown={(e) => e.stopPropagation()}
                    className="w-full py-6 bg-red-700 hover:bg-black text-white hover:text-red-600 border-2 border-red-700 font-bold tracking-[0.4em] uppercase transition-all text-sm active:translate-y-1"
                  >
                    {t.recruitment.submit}
                  </button>
               </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#0a0a0a] relative">
        <div className="max-w-3xl mx-auto">
           <div className="text-center mb-16">
              <h2 className="text-6xl font-display text-white uppercase italic text-3d">{t.contact.title}</h2>
              <div className="w-32 h-1 bg-red-700 mx-auto mt-4" />
           </div>

           <form action="https://formspree.io/f/mnjkrrjg" method="POST" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-red-600 uppercase ml-2">{t.contact.name}</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      onMouseDown={(e) => e.stopPropagation()}
                      className="w-full bg-white/5 border-b-2 border-white/10 focus:border-red-600 focus:bg-white/10 outline-none p-4 font-mono text-sm transition-all"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-red-600 uppercase ml-2">{t.contact.email}</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      onMouseDown={(e) => e.stopPropagation()}
                      className="w-full bg-white/5 border-b-2 border-white/10 focus:border-red-600 focus:bg-white/10 outline-none p-4 font-mono text-sm transition-all"
                    />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold tracking-widest text-red-600 uppercase ml-2">{t.contact.message}</label>
                 <textarea 
                    name="message" 
                    rows={6} 
                    required 
                    onMouseDown={(e) => e.stopPropagation()}
                    className="w-full bg-white/5 border-b-2 border-white/10 focus:border-red-600 focus:bg-white/10 outline-none p-4 font-mono text-sm transition-all resize-none"
                 ></textarea>
              </div>
              <button 
                type="submit" 
                onMouseDown={(e) => e.stopPropagation()}
                className="w-full py-5 bg-red-700 hover:bg-black hover:text-red-600 border border-red-700 font-bold uppercase tracking-[0.3em] transition-all text-sm"
              >
                {t.contact.send}
              </button>
           </form>

           <div className="mt-24 text-center">
              <div className="font-display text-4xl text-white/5 italic select-none">SAVICH18 // 2026</div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-red-900/20 px-6 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-20" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="text-gray-600 text-[10px] font-bold tracking-widest uppercase">
             © 2026 SAVICH18-GAMES. <span className="text-red-900">CODED IN BLOOD.</span>
           </div>
           <div className="flex gap-12 text-gray-500 font-display">
              <a href="https://www.youtube.com/@Savich18Company" target="_blank" className="hover:text-red-600 transition-all hover:skew-x-[-10deg] italic">YOUTUBE</a>
              <a href="https://store.steampowered.com/curator/45912717-Savich18-Games/" target="_blank" className="hover:text-red-600 transition-all hover:skew-x-[-10deg] italic">STEAM</a>
           </div>
        </div>
      </footer>
    </main>
  </div>
);
}
