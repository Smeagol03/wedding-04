import React from "react";

// --- KONFIGURASI FOOTER ---
// Ganti dengan data Anda
const creatorName = "Alpian Tabrani";
const portfolioUrl = "https://alpian-portfolio.netlify.app/"; // Ganti dengan URL portfolio Anda
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative py-6 sm:py-8 bg-linear-to-b from-cream-dark to-cream">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-px bg-linear-to-r from-transparent via-sage/30 to-transparent"></div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Made by credit */}
        <p className="font-sans text-[10px] sm:text-xs text-black">
          Crafted with <span className="text-black">♥</span> by{" "}
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-brown/70 transition-colors duration-200 underline-offset-2 hover:underline"
          >
            {creatorName}
          </a>
        </p>

        {/* Copyright */}
        <p className="mt-1 font-sans text-[9px] sm:text-[10px] text-black">
          © {currentYear} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
