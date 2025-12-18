import Hitung from "./Hitung";
import Detail from "./detail";
import wanita from "/src/mempelai/1.jpg";
import pria from "/src/mempelai/2.jpg";
import dekorImage from "/src/dekor/10010.webp";
import dekorImage2 from "/src/dekor/10012.webp";
import { motion } from "motion/react";

const Acara = () => {
  // Data Mempelai - sesuaikan dengan data yang benar
  const mempelaiPria = {
    nama: "Sopian Sauri",
    namaAyah: "Bapak Ahmad Sudrajat",
    namaIbu: "Ibu Siti Aminah",
    anakKe: "Putra pertama dari",
    foto: pria,
  };

  const mempelaiWanita = {
    nama: "Yuyun Yuningsih",
    namaAyah: "Bapak Dedi Kusnadi",
    namaIbu: "Ibu Rina Marlina",
    anakKe: "Putri kedua dari",
    foto: wanita,
  };

  // Animation variants for waving decoration
  const dekorAcaraVariants = {
    animate: {
      rotate: [0, 3, 0, -3, 0],
      scale: [1, 1.015, 1, 1.015, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Variants for scroll animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const MempelaiCard = ({ data, isWanita = false }) => (
    <motion.div
      variants={fadeInUp}
      className="group relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[420px]"
    >
      {/* Decorative background glow */}
      <div className="absolute -inset-2 sm:-inset-3 bg-linear-to-br from-rose/15 via-gold/10 to-sage/15 rounded-2xl sm:rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Main Card with Full Photo Background */}
      <div className="relative w-full aspect-3/4 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
        {/* Full Background Photo */}
        <img
          src={data.foto}
          alt={`Foto ${data.nama}`}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          style={{ willChange: "transform" }}
        />

        {/* Combined Gradient Overlay - Mengurangi repaint di Android */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3) 50%, transparent),
              linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 40%),
              linear-gradient(135deg, ${
                isWanita ? "rgba(201,169,166,0.1)" : "rgba(139,157,131,0.1)"
              }, transparent)
            `,
            willChange: "transform",
          }}
        />

        {/* Decorative corner frame elements */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 border-l-2 border-t-2 border-white/30 rounded-tl-lg"></div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 border-r-2 border-t-2 border-white/30 rounded-tr-lg"></div>

        {/* Content Overlay at Bottom */}
        <div className="absolute inset-x-0 -bottom-2 p-4 sm:p-5 md:p-6">
          {/* Glassmorphism container */}
          <div className="relative bg-white/15 backdrop-blur-xs border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent rounded-xl sm:rounded-2xl"></div>

            {/* Name */}
            <h3 className="relative font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center leading-tight mb-2 sm:mb-3 drop-shadow-lg">
              {data.nama}
            </h3>

            {/* Decorative line */}
            <div className="relative flex items-center justify-center gap-2 mb-2 sm:mb-3">
              <span className="block w-8 sm:w-10 md:w-12 h-px bg-linear-to-r from-transparent to-white/50"></span>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gold/70 animate-pulse-soft"></div>
              <span className="block w-8 sm:w-10 md:w-12 h-px bg-linear-to-l from-transparent to-white/50"></span>
            </div>

            {/* Anak ke */}
            <p className="relative font-sans text-[9px] sm:text-[10px] md:text-xs tracking-wider uppercase text-white/80 text-center mb-1.5 sm:mb-2">
              {data.anakKe}
            </p>

            {/* Parents names */}
            <div className="relative text-center space-y-0.5">
              <p className="font-serif text-xs sm:text-sm md:text-base text-white/90 italic drop-shadow">
                {data.namaAyah}
              </p>
              <p className="font-sans text-[9px] sm:text-[10px] text-white/60">
                &
              </p>
              <p className="font-serif text-xs sm:text-sm md:text-base text-white/90 italic drop-shadow">
                {data.namaIbu}
              </p>
            </div>
          </div>
        </div>

        {/* Top label badge */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 sm:top-4">
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 sm:px-4 sm:py-1.5">
            <p className="font-sans text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-white/90">
              {isWanita ? "Mempelai Wanita" : "Mempelai Pria"}
            </p>
          </div>
        </div>

        {/* Hover shine effect */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Bottom decorative element */}
      <div className="hidden sm:flex items-center justify-center gap-2 mt-3 sm:mt-4">
        <span className="block w-6 sm:w-8 h-px bg-linear-to-r from-transparent to-gold/40"></span>
        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gold/50 group-hover:bg-rose/60 transition-colors duration-300"></div>
        <span className="block w-6 sm:w-8 h-px bg-linear-to-l from-transparent to-gold/40"></span>
      </div>
    </motion.div>
  );

  return (
    <section
      id="acara"
      className="relative min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-cream via-cream to-cream-dark overflow-hidden py-12 sm:py-16 md:py-20"
    >
      {/* Left Decorative Element */}
      <motion.div
        className="absolute left-0 top-60 z-0"
        variants={dekorAcaraVariants}
        animate="animate"
      >
        <img
          src={dekorImage}
          alt="Decorative element"
          className="w-auto object-cover h-36 sm:h-48 md:h-64 lg:h-80 xl:h-96 opacity-80"
        />
      </motion.div>
      {/* Right Decorative Element */}
      <motion.div
        className="absolute right-0 top-60 z-0"
        variants={dekorAcaraVariants}
        animate="animate"
      >
        <img
          src={dekorImage}
          alt="Decorative element"
          className="w-auto object-cover scale-x-[-1] h-36 sm:h-48 md:h-64 lg:h-80 xl:h-96 opacity-80"
        />
      </motion.div>

      {/* dekor 2 */}
      <motion.div
        className="absolute rotate-20 -left-5 top-[52%] z-100"
        variants={dekorAcaraVariants}
        animate="animate"
      >
        <img
          src={dekorImage2}
          alt="Decorative element"
          className="w-auto object-cover h-36 sm:h-48 md:h-64 lg:h-80 xl:h-96 opacity-80"
        />
      </motion.div>
      <motion.div
        className="absolute -rotate-20 -right-5 top-[52%] z-100"
        variants={dekorAcaraVariants}
        animate="animate"
      >
        <img
          src={dekorImage2}
          alt="Decorative element"
          className="w-auto object-cover scale-x-[-1] h-36 sm:h-48 md:h-64 lg:h-80 xl:h-96 opacity-80"
        />
      </motion.div>

      {/* Hitung Mundur Section */}
      <motion.div
        className="relative z-10 w-full mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Hitung />
      </motion.div>
      {/* Section Title */}
      <motion.div
        className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="block w-10 sm:w-12 md:w-16 h-px bg-linear-to-r from-transparent to-rose/40"></span>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-rose/40 animate-pulse-soft"></div>
          <span className="block w-10 sm:w-12 md:w-16 h-px bg-linear-to-l from-transparent to-rose/40"></span>
        </div>
        {/* tes komentar */}
        <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-sage mb-1 sm:mb-2">
          Bismillahirrahmanirrahim
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brown mb-2 sm:mb-3">
          Mempelai
        </h2>

        <p className="font-sans text-xs sm:text-sm md:text-base text-sage-dark max-w-md mx-auto leading-relaxed">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
          menyelenggarakan pernikahan putra-putri kami
        </p>
      </motion.div>
      {/* Mempelai Cards */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20">
          {/* Mempelai Pria */}
          <MempelaiCard data={mempelaiPria} />

          {/* Separator / & symbol */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-row md:flex-col items-center justify-center gap-2 sm:gap-3 py-2 md:py-0"
          >
            <span className="block w-8 sm:w-10 md:w-px md:h-8 lg:h-10 bg-rose/30"></span>
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-3 bg-linear-to-br from-rose/10 to-gold/10 rounded-full blur-sm"></div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/70 backdrop-blur-sm border border-rose/30 flex items-center justify-center shadow-md">
                <span className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-rose-gold italic">
                  &
                </span>
              </div>
            </div>
            <span className="block w-8 sm:w-10 md:w-px md:h-8 lg:h-10 bg-rose/30"></span>
          </motion.div>

          {/* Mempelai Wanita */}
          <MempelaiCard data={mempelaiWanita} isWanita />
        </div>
      </motion.div>
      {/* Decorative bottom ornament */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-2 my-8 sm:my-10 md:my-12 lg:my-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <span className="block w-12 sm:w-16 md:w-20 h-px bg-linear-to-r from-transparent to-gold/30"></span>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-rose/40"></div>
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full border border-gold/40 flex items-center justify-center">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gold/50 animate-pulse-soft"></div>
          </div>
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-rose/40"></div>
        </div>
        <span className="block w-12 sm:w-16 md:w-20 h-px bg-linear-to-l from-transparent to-gold/30"></span>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Detail />
      </motion.div>
    </section>
  );
};

export default Acara;
