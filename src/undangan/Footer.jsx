import React from "react";
import { motion } from "motion/react";

// --- KONFIGURASI FOOTER ---
const creatorName = "Alpian Tabrani";
const portfolioUrl = "https://alpian-portfolio.netlify.app/";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-linear-to-b from-cream-dark to-stone-200">
      {/* Decorative Top Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-rose/30 to-transparent"></div>
      
      {/* Background Ornament - Subtle Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 1px 1px, #8b9d83 1px, transparent 0)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Main Creator Badge / Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group mb-8"
        >
          {/* Glowing Background Effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-rose/20 via-gold/20 to-sage/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Card Container */}
          <a 
            href={portfolioUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative block bg-white/40 backdrop-blur-sm border border-white/50 px-8 py-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1"
          >
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown/70 mb-2">
              Designed & Developed by
            </p>
            
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-brown/20 group-hover:w-12 transition-all duration-300"></span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brown font-medium italic relative">
                {creatorName}
                {/* Underline Animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose/60 transition-all duration-500 group-hover:w-full"></span>
              </h3>
              <span className="h-px w-8 bg-brown/20 group-hover:w-12 transition-all duration-300"></span>
            </div>

            {/* Visit Portfolio Label */}
            <div className="mt-3 overflow-hidden h-0 group-hover:h-6 transition-all duration-300">
              <span className="text-[10px] sm:text-xs font-sans text-rose font-medium tracking-wide">
                Visit Portfolio &rarr;
              </span>
            </div>
          </a>
        </motion.div>

        {/* Separator */}
        <div className="flex items-center gap-4 mb-6 opacity-40">
           <div className="w-1.5 h-1.5 rounded-full bg-sage"></div>
           <div className="w-12 h-px bg-brown"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-sage"></div>
        </div>

        {/* Copyright & Thanks */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="space-y-2"
        >
          <p className="font-serif text-lg text-brown/80 italic">
            Terima kasih atas doa & restu Anda
          </p>
          <p className="font-sans text-[10px] text-brown/50 tracking-wider">
            © {currentYear} {creatorName}. All Rights Reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
