import React, { useState } from "react";
import { motion } from "motion/react";
import dekorKiriAtas from "/src/dekor/kiri-atas.webp";
import dekorKananBawah from "/src/dekor/kanan-bawah.webp";

// Data rekening - Ganti dengan data Anda
const giftData = [
  {
    name: "Mempelai Pria",
    role: "Mempelai Pria",
    bank: "Bank BCA",
    accountNumber: "1234567890",
    accountName: "Mempelai Pria",
  },
  {
    name: "Mempelai Wanita",
    role: "Mempelai Wanita",
    bank: "Bank Mandiri",
    accountNumber: "9876543210",
    accountName: "Mempelai Wanita",
  },
];

// Komponen Card Rekening - Swiss Style
const AccountCard = ({ data, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="bg-white border-t-[6px] border-brown shadow-sm hover:shadow-lg transition-shadow duration-500 overflow-hidden flex flex-col h-full"
    >
      <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
        <div>
          {/* Functional Label */}
          <p className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-sage mb-2 border-l-2 border-sage pl-3">
            {data.role}
          </p>
          
          {/* Strong Hierarchy Name */}
          <h3 className="font-serif text-3xl md:text-4xl text-brown font-medium leading-none mb-10">
            {data.name}
          </h3>

          {/* Grid-based Info */}
          <div className="space-y-6 mb-10">
            <div className="flex justify-between items-end border-b border-cream-dark pb-2">
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-brown/50 font-bold">Bank</span>
              <span className="font-sans text-sm sm:text-base font-semibold text-brown">{data.bank}</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-cream-dark pb-2 gap-2 sm:gap-0">
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-brown/50 font-bold">No. Rekening</span>
              <span className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-brown bg-cream px-2 py-1 rounded-sm">
                {data.accountNumber}
              </span>
            </div>

            <div className="flex justify-between items-end border-b border-cream-dark pb-2">
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-brown/50 font-bold">Atas Nama</span>
              <span className="font-sans text-sm sm:text-base font-semibold text-brown">{data.accountName}</span>
            </div>
          </div>
        </div>

        {/* Brutalist/Swiss Geometry Button */}
        <button
          onClick={handleCopy}
          className={`w-full py-5 font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-300 focus:outline-none ${
            copied ? "bg-sage text-white" : "bg-brown text-cream hover:bg-brown-dark"
          }`}
          disabled={copied}
        >
          {copied ? "✓ Berhasil Disalin" : "Salin Rekening"}
        </button>
      </div>
    </motion.div>
  );
};

const Hadiah = () => {
  return (
    <section className="relative py-20 md:py-32 bg-cream overflow-hidden">
      {/* Decorative subtle image layer (Reduced opacity for cleaner Swiss look) */}
      <motion.img
        src={dekorKiriAtas}
        alt=""
        loading="lazy"
        className="absolute top-0 left-0 w-32 md:w-56 opacity-10 pointer-events-none grayscale"
        animate={{ rotate: [0, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={dekorKananBawah}
        alt=""
        loading="lazy"
        className="absolute bottom-0 right-0 w-32 md:w-56 opacity-10 pointer-events-none grayscale"
        animate={{ rotate: [0, -1, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Asymmetric Header - Swiss Philosophy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 md:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="font-sans text-xs sm:text-sm tracking-[0.4em] font-bold uppercase text-sage mb-4 sm:mb-6 border-l-[3px] border-sage pl-4">
              Tanda Kasih
            </p>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brown font-medium leading-[0.9] tracking-tight">
              Hadiah <br />
              <span className="text-rose-gold italic font-normal">Pernikahan</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:max-w-md md:pl-10 md:border-l border-gold/30"
          >
            <p className="font-sans text-sm sm:text-base text-brown/70 leading-relaxed font-medium">
              Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
              Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi 
              kado secara cashless melalui rekening di bawah ini.
            </p>
          </motion.div>

        </div>

        {/* Modular Grid Layout for Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {giftData.map((gift, index) => (
            <AccountCard key={index} data={gift} index={index} />
          ))}
        </div>
        
        {/* Minimal Footer Element */}
        <div className="mt-20 md:mt-32 flex justify-center">
           <div className="w-16 h-[2px] bg-brown/20"></div>
        </div>

      </div>
    </section>
  );
};

export default Hadiah;
