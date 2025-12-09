import { motion } from "motion/react";
import { useEffect } from "react";
import Bg from "/src/mempelai/bg.jpg";
import corner from "/src/dekor/10003.webp";
import { TombolBuka } from "./Tombolbuka";

const Pembuka = () => {
  const namaPria = "Sopian";
  const namaWanita = "Yuyun";

  // Animation variants untuk dekorasi sudut
  const dekorVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variants untuk setiap sudut dengan arah berbeda
  const topLeftVariants = {
    hidden: { opacity: 0, x: 50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const topRightVariants = {
    hidden: { opacity: 0, x: 50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
    },
  };

  const bottomLeftVariants = {
    hidden: { opacity: 0, x: 50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
    },
  };

  const bottomRightVariants = {
    hidden: { opacity: 0, x: 50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
    },
  };

  // Set --vh sekali saat mount untuk menghindari layout shift
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    // Tidak perlu listen resize - ini intentional untuk stability
  }, []);

  return (
    <>
      {/* ===== COVER / HERO SECTION ===== */}
      <section
        id="cover"
        className="vh-fill relative z-50 flex flex-col items-center justify-center bg-cream overflow-hidden"
      >
        {/* Background dengan img untuk menghindari repaint di Android */}
        <img
          src={Bg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
          style={{ willChange: "transform" }}
        />

        {/* Combined Overlay - Semua layer digabung jadi 1 div untuk mengurangi repaint */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1)),
              radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%),
              linear-gradient(to bottom right, rgba(180,131,141,0.1), transparent, rgba(253,248,243,0.2))
            `,
            willChange: "transform",
          }}
        />
        {/* Decorative Ornaments with Framer Motion */}
        {/* Top Left Corner */}
        <motion.div
          className="absolute z-50 top-0 left-0 w-18 h-18 md:w-32 md:h-32"
          variants={topLeftVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={corner}
            alt="Ornamen"
            className="w-full h-full object-contain"
            animate={{
              rotate: [0, 2, -2, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Top Right Corner */}
        <motion.div
          className="absolute -scale-x-100 z-50 top-0 right-0 w-18 h-18 md:w-32 md:h-32"
          variants={topRightVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={corner}
            alt="Ornamen"
            className="w-full h-full object-contain"
            animate={{
              rotate: [0, -2, 2, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>

        {/* Bottom Left Corner */}
        <motion.div
          className="absolute -scale-y-100 z-50 bottom-0 left-0 w-18 h-18 md:w-32 md:h-32"
          variants={bottomLeftVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={corner}
            alt="Ornamen"
            className="w-full h-full object-contain"
            animate={{
              rotate: [0, -2, 2, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        {/* Bottom Right Corner */}
        <motion.div
          className="absolute -scale-x-100 -scale-y-100 z-50 bottom-0 right-0 w-18 h-18 md:w-32 md:h-32"
          variants={bottomRightVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={corner}
            alt="Ornamen"
            className="w-full h-full object-contain"
            animate={{
              rotate: [0, 2, -2, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </motion.div>

        {/* Pre-title */}
        <p className="absolute top-10 z-30 font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-white/90 animate-fade-in drop-shadow-md">
          The Wedding Of
        </p>
        {/* Main Content - Using flex-1 to fill available space */}
        <div
          className="absolute bottom-0 z-30 flex flex-col items-center justify-center text-center px-4 py-6 sm:py-8 w-full max-w-lg mx-auto animate-fade-in-up"
          style={{
            paddingBottom: "max(20px, env(safe-area-inset-bottom))",
          }}
        >
          {/* Names */}
          <div className="mb-2 sm:mb-4 mt-4 sm:mt-2 bg-black/50 backdrop-blur-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full">
            <h1
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight tracking-wide"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)",
              }}
            >
              {namaPria}
              <span
                className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gold italic mx-1 sm:mx-2"
                style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}
              >
                &
              </span>
              {namaWanita}
            </h1>
          </div>

          {/* Kepada Tamu */}
          <div className="bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl border border-white/50 p-3 sm:p-4 md:p-6 w-full max-w-[260px] sm:max-w-xs mx-auto">
            <p className="font-sans font-bold text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase text-sage-dark mb-0.5 sm:mb-1">
              Kepada Yth.
            </p>
            <p className="font-serif font-bold text-sm sm:text-base md:text-lg text-brown mb-1 sm:mb-2">
              Bapak/Ibu/Saudara/i
            </p>

            {/* Nama Tamu - akan diisi dinamis */}
            <p className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-rose-gold italic mb-2 sm:mb-4">
              Nama Tamu
            </p>

            <TombolBuka />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pembuka;
