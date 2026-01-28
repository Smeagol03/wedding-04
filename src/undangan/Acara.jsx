import Hitung from "./Hitung";
import Detail from "./detail";
import Couple from "/src/mempelai/3.jpg";
import dekorImage from "/src/dekor/10010.webp";
import dekorImage2 from "/src/dekor/10012.webp";
import { motion } from "motion/react";

const Acara = () => {
  // Data Mempelai - sesuaikan dengan data yang benar
  const mempelaiPria = {
    nama: "Edikurniawan",
    namaAyah: "Bapak Daeng Abdul Mu'in",
    namaIbu: "Ibu Hayaki",
    anakKe: "Putra pertama dari",
    alamat: "Geres baret kel geres kec labuhan haji",
  };

  const mempelaiWanita = {
    nama: "Noviana",
    namaAyah: "Bapak Napiah",
    namaIbu: "Ibu Aspiah",
    anakKe: "Putri kedua dari",
    alamat: "karang sari kel suryawangi kec labuhan haji",
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

  const MempelaiInfo = ({ data, isWanita = false }) => (
    <motion.div
      variants={fadeInUp}
      className={`flex flex-col ${
        isWanita ? "items-center md:items-end" : "items-center md:items-start"
      } text-center ${isWanita ? "md:text-right" : "md:text-left"} space-y-4`}
    >
      <div className="relative">
        <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-brown drop-shadow-sm">
          {data.nama}
        </h3>
        <div
          className={`h-1 w-20 bg-linear-to-r ${
            isWanita
              ? "from-gold/60 to-transparent"
              : "from-transparent to-gold/60"
          } mt-2 hidden md:block ${isWanita ? "ml-auto" : "mr-auto"}`}
        ></div>
      </div>

      <div className="space-y-1">
        <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-sage-dark font-semibold">
          {data.anakKe}
        </p>
        <div className="space-y-0.5">
          <p className="font-serif text-base sm:text-lg md:text-xl text-brown-dark italic font-medium">
            {data.namaAyah}
          </p>
          <p className="font-sans text-[10px] text-sage">dan</p>
          <p className="font-serif text-base sm:text-lg md:text-xl text-brown-dark italic font-medium">
            {data.namaIbu}
          </p>
        </div>
      </div>

      <div
        className={`flex items-start gap-2 ${
          isWanita
            ? "justify-center md:justify-end"
            : "justify-center md:justify-start"
        }`}
      >
        <svg
          className="w-4 h-4 text-gold mt-1 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p className="font-sans text-[10px] sm:text-xs text-sage-dark/80 italic max-w-[180px]">
          {data.alamat}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section
      id="acara"
      className="relative min-h-screen flex flex-col items-center justify-center bg-luxury-gradient overflow-hidden py-16 md:py-24"
    >
      {/* Decorative Ornaments */}
      <motion.div
        className="absolute -left-10 top-20 z-0"
        variants={dekorAcaraVariants}
        animate="animate"
      >
        <img
          src={dekorImage}
          alt=""
          className="h-64 md:h-96 w-auto object-contain"
        />
      </motion.div>
      <motion.div
        className="absolute -right-10 top-20 z-0 scale-x-[-1]"
        variants={dekorAcaraVariants}
        animate="animate"
      >
        <img
          src={dekorImage}
          alt=""
          className="h-64 md:h-96 w-auto object-contain"
        />
      </motion.div>
      <motion.div
        className="absolute -right-22 bottom-20 z-0 scale-x-[-1]"
        variants={dekorAcaraVariants}
        animate="animate"
      >
        <img
          src={dekorImage2}
          alt=""
          className="h-64 md:h-96 w-auto object-contain"
        />
      </motion.div>
      <motion.div
        className="absolute -left-22 bottom-20 z-0"
        variants={dekorAcaraVariants}
        animate="animate"
      >
        <img
          src={dekorImage2}
          alt=""
          className="h-64 md:h-96 w-auto object-contain"
        />
      </motion.div>

      {/* Countdown Section */}
      <motion.div
        className="relative z-10 w-full mb-16 md:mb-24"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Hitung />
      </motion.div>

      {/* Section Header */}
      <motion.div
        className="relative z-10 text-center mb-16 px-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-12 h-px bg-linear-to-r from-transparent to-gold"></span>
          <span className="font-serif text-gold italic text-lg sm:text-xl">
            Ar-Rum: 21
          </span>
          <span className="w-12 h-px bg-linear-to-l from-transparent to-gold"></span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl text-brown mb-6">
          Mempelai Berbahagia
        </h2>

        <p className="font-sans text-xs sm:text-sm md:text-base text-sage-dark max-w-2xl mx-auto leading-relaxed italic opacity-90">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang."
        </p>
      </motion.div>

      {/* Main Layout: Couple Photo & Info */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-16">
          {/* Mempelai Wanita (Left on Desktop) */}
          <div className="order-2 md:order-1 flex-1">
            <MempelaiInfo data={mempelaiWanita} isWanita />
          </div>

          {/* Center Couple Photo */}
          <motion.div
            variants={fadeInUp}
            className="order-1 md:order-2 relative group"
          >
            {/* Background Frames */}
            <div className="absolute inset-0 bg-gold/10 rotate-3 rounded-full scale-105 transition-transform group-hover:rotate-6"></div>
            <div className="absolute inset-0 bg-rose/10 -rotate-3 rounded-full scale-105 transition-transform group-hover:-rotate-6"></div>

            {/* Photo Container */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[450px] lg:w-96 lg:h-[550px] rounded-full overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              <img
                src={Couple}
                alt="Couple"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Decorative Frame Line */}
              <div className="absolute inset-4 rounded-full border border-white/30"></div>
            </div>

            {/* Floating Ornaments around photo */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full border border-gold/20 flex items-center justify-center"
            >
              <span className="font-serif text-black text-2xl md:text-3xl">
                &
              </span>
            </motion.div>
          </motion.div>

          {/* Mempelai Pria (Right on Desktop) */}
          <div className="order-3 flex-1">
            <MempelaiInfo data={mempelaiPria} />
          </div>
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
