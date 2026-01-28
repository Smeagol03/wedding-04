import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useMemo } from "react";
import Bg from "/src/mempelai/bg.jpg";
import corner from "/src/dekor/10003.webp";
import { TombolBuka } from "./Tombolbuka";
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

// Countdown Preview
const CountdownPreview = ({ weddingDate }) => {
  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="mt-6 text-center"
    >
      <p className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">
        Save The Date
      </p>
      <p className="font-serif text-sm md:text-base text-gold-light italic">
        {formatDate(weddingDate)}
      </p>
    </motion.div>
  );
};

const Pembuka = () => {
  const namaPria = "Edikurniawan";
  const namaWanita = "Noviana";
  const weddingDate = "2026-02-01"; // Tanggal pernikahan
  const sectionRef = useRef(null);

  // Parallax for ornaments
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const ornamentY1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const ornamentY2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

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
      <section
        ref={sectionRef}
        id="cover"
        className="vh-fill relative z-50 flex flex-col items-center justify-center bg-cream overflow-hidden"
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
            className="w-full h-full object-cover object-top md:object-[center_38%]"
          />
        </motion.div>

        {/* Combined Overlay - Luxury approach */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%),
              radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.5) 100%)
            `,
          }}
        />

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Decorative Ornaments with Parallax */}
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          {/* Top Left Corner */}
          <motion.img
            src={corner}
            initial={{ opacity: 0, x: -50, y: -50 }}
            animate={{ opacity: 0.9, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ y: ornamentY1 }}
            className="absolute top-0 left-0 w-28 h-28 md:w-44 md:h-44 object-contain"
          />
          {/* Top Right Corner */}
          <motion.img
            src={corner}
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={{ opacity: 0.9, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ y: ornamentY1 }}
            className="absolute top-0 right-0 w-28 h-28 md:w-44 md:h-44 object-contain -scale-x-100"
          />
          {/* Bottom Left Corner */}
          <motion.img
            src={corner}
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 0.9, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ y: ornamentY2 }}
            className="absolute bottom-0 left-0 w-28 h-28 md:w-44 md:h-44 object-contain -scale-y-100"
          />
          {/* Bottom Right Corner */}
          <motion.img
            src={corner}
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 0.9, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            style={{ y: ornamentY2 }}
            className="absolute bottom-0 right-0 w-28 h-28 md:w-44 md:h-44 object-contain -scale-x-100 -scale-y-100"
          />
        </div>

        {/* Main Content */}
        <motion.div
          variants={staggerContainer(0.15, 0.3)}
          initial="hidden"
          animate="show"
          className="relative z-30 flex flex-col items-center justify-center text-center px-6 w-full max-w-2xl mx-auto"
        >
          {/* Pre-title */}
          <motion.p
            variants={fadeIn("up", 0)}
            className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.5em] uppercase text-gold-light/90 mb-4 drop-shadow-lg"
          >
            The Wedding Of
          </motion.p>

          {/* Decorative Line Top */}
          <DecorativeDivider className="mb-6" />

          {/* Names Container with Staggered Letters */}
          <div className="mb-4 md:mb-6 relative">
            {/* Glow backdrop */}
            <div className="absolute inset-0 bg-black/30 blur-3xl -z-10 rounded-full scale-150"></div>

            <h1 className="flex flex-col items-center">
              <AnimatedName
                name={namaPria}
                className="font-display text-4xl sm:text-5xl md:text-7xl text-white tracking-tight drop-shadow-xl"
                delay={0.5}
              />
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                className="relative my-3"
              >
                <motion.span
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold italic inline-block"
                >
                  &
                </motion.span>
                {/* Glow around & */}
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full -z-10 scale-150"></div>
              </motion.span>
              <AnimatedName
                name={namaWanita}
                className="font-display text-4xl sm:text-5xl md:text-7xl text-white tracking-tight drop-shadow-xl"
                delay={1.4}
              />
            </h1>
          </div>

          {/* Decorative Line Bottom */}
          <DecorativeDivider className="mb-6" />

          {/* Guest Label & Button Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.8, type: "spring" }}
            className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 w-full max-w-sm mx-auto border border-gold/20 shadow-2xl relative overflow-hidden"
          >
            {/* Animated border glow */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(201,184,150,0.1)",
                  "0 0 40px rgba(201,184,150,0.2)",
                  "0 0 20px rgba(201,184,150,0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl md:rounded-3xl"
            />

            {/* Shimmer Effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
            />

            <p className="font-sans font-semibold text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/60 mb-2">
              Kepada Yth.
            </p>
            <p className="font-serif text-base md:text-lg text-white/90 mb-3">
              Bapak/Ibu/Saudara/i
            </p>

            {/* Guest Name - Elegant Display */}
            <div className="relative inline-block px-6 py-3 mb-6 w-full">
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent"></div>
              <h2 className="font-display font-bold text-xl md:text-2xl text-white italic">
                Nama Tamu
              </h2>
            </div>

            {/* Enhanced Button with Glow */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(93,78,66,0.3)",
                  "0 0 35px rgba(93,78,66,0.5)",
                  "0 0 20px rgba(93,78,66,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-full"
            >
              <TombolBuka className="w-full justify-center" />
            </motion.div>

            {/* Countdown Preview */}
            <CountdownPreview weddingDate={weddingDate} />
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
      </section>
    </>
  );
};

export default Pembuka;
