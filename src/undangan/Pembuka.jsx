import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useRef, useMemo, useState } from "react";
import Bg from "/src/mempelai/3.webp";
import { TombolBuka, useUndangan } from "./Tombolbuka";
import { fadeIn, staggerContainer } from "./utils/variants";

// Floating Particles Component
const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 4,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      type: Math.random() > 0.5 ? "sparkle" : "petal",
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-15 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{
            top: "-10%",
            left: `${particle.left}%`,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            top: "110%",
            opacity: [0, 1, 1, 0],
            rotate: particle.type === "petal" ? [0, 180, 360] : 0,
            x: particle.type === "petal" ? [0, 30, -30, 0] : 0,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${particle.left}%` }}
        >
          {particle.type === "sparkle" ? (
            <div
              className="rounded-full bg-gold/60"
              style={{
                width: particle.size,
                height: particle.size,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.size / 2}px rgba(201, 184, 150, 0.5)`,
              }}
            />
          ) : (
            <div
              className="text-rose-gold-light/50"
              style={{ fontSize: particle.size * 2 }}
            >
              ❀
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Animated Name Component (Letter by Letter)
const AnimatedName = ({ name, className, delay = 0 }) => {
  const letters = name.split("");

  return (
    <motion.span className={`inline-flex ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.05,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "center bottom" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Decorative Divider
const DecorativeDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="h-px w-12 md:w-20 bg-linear-to-r from-transparent to-gold/60"
    />
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 1.8, type: "spring" }}
      className="text-gold text-xs md:text-sm"
    >
      ✦
    </motion.div>
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="h-px w-12 md:w-20 bg-linear-to-l from-transparent to-gold/60"
    />
  </div>
);

const Pembuka = () => {
  const namaPria = "Mempelai Pria";
  const namaWanita = "Mempelai Wanita";
  const sectionRef = useRef(null);
  const { isOpened } = useUndangan();

  // Dynamic guest name from URL
  const [guestName, setGuestName] = useState("Tamu Undangan");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameFromUrl = params.get("to");
    if (nameFromUrl) {
      setGuestName(decodeURIComponent(nameFromUrl));
    }
  }, []);

  // Set --vh sekali saat mount untuk menghindari layout shift
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
  }, []);

  return (
    <>
      {/* ===== COVER / HERO SECTION ===== */}
      <AnimatePresence>
        {!isOpened && (
          <motion.section
            ref={sectionRef}
            id="cover"
            className="vh-fill fixed top-0 left-0 w-full z-100 flex flex-col items-center justify-end bg-cream overflow-hidden"
            exit={{ opacity: 0, y: -60, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
        {/* Background with subtle zoom animation */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={Bg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Combined Overlay - Enhanced bottom vignette for text legibility */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.8) 100%),
              radial-gradient(circle at 50% 30%, transparent 20%, rgba(0,0,0,0.4) 100%)
            `,
          }}
        />

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Main Content - Shifted to bottom */}
        <motion.div
          variants={staggerContainer(0.15, 0.3)}
          initial="hidden"
          animate="show"
          className="relative z-30 flex flex-col items-center justify-end text-center px-6 w-full max-w-2xl mx-auto pb-10 md:pb-16"
        >
          {/* Pre-title */}
          <motion.div variants={fadeIn("up", 0)} className="mb-2">
            <p className="font-sans text-[9px] md:text-xs tracking-[0.5em] uppercase text-gold-light/90 drop-shadow-lg">
              The Wedding Of
            </p>
          </motion.div>

          {/* Names Container with Staggered Letters */}
          <div className="mb-6 md:mb-8 relative">
            <h1 className="flex flex-col items-center">
              <AnimatedName
                name={namaPria}
                className="font-display text-2xl md:text-4xl text-white tracking-tight drop-shadow-2xl"
                delay={0.5}
              />
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                className="relative my-1 md:my-1.5"
              >
                <span className="font-serif text-xl md:text-2xl text-gold italic inline-block">
                  &
                </span>
              </motion.span>
              <AnimatedName
                name={namaWanita}
                className="font-display text-2xl md:text-4xl text-white tracking-tight drop-shadow-2xl"
                delay={1.4}
              />
            </h1>
          </div>

          {/* Guest Label & Button Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="glass rounded-2xl p-5 md:p-8 w-full max-w-sm mx-auto border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center">
              <p className="font-sans font-medium text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-white/40 mb-2">
                Kepada Yth. Bapak/Ibu/Saudara/i
              </p>

              {/* Guest Name - Elegant Display */}
              <div className="mb-6 w-full">
                <h2 className="font-display font-medium text-xl md:text-2xl text-white italic">
                  {guestName}
                </h2>
                <div className="h-px w-16 bg-linear-to-r from-transparent via-gold/30 to-transparent mx-auto mt-1"></div>
              </div>

              {/* Enhanced Button */}
              <div className="w-full">
                <TombolBuka className="w-full justify-center scale-90 md:scale-100" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Ambient Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-16 w-32 h-32 bg-gold/10 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 -right-16 w-40 h-40 bg-rose-gold/10 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gold/5 blur-2xl rounded-full"
        />
        </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Pembuka;
