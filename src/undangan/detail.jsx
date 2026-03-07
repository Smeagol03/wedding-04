import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: i * 0.2 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const Detail = () => {
  // Data Acara - sesuaikan dengan data yang benar
  const acaraAkad = {
    judul: "Akad Nikah",
    tanggal: "Minggu, 01 Februari 2026",
    waktu: "08:30 WITA - Selesai",
    lokasi: "Kediaman Mempelai Wanita",
    alamat: "Karang sari kel. suryawangi kec. labuhan haji",
    mapUrl: "https://maps.google.com/?q=Suryawangi+Labuhan+Haji",
    icon: "🕌",
  };

  const acaraResepsi = {
    judul: "Resepsi Pernikahan",
    tanggal: "Minggu, 01 Februari 2026",
    waktu: "11:00 WITA - Selesai",
    lokasi: "Kediaman Mempelai Wanita",
    alamat: "Karang sari kel. suryawangi kec. labuhan haji",
    mapUrl: "https://maps.google.com/?q=Suryawangi+Labuhan+Haji",
    icon: "💒",
  };

  const AcaraCard = ({ data, index = 0 }) => (
    <motion.div
      className="group relative flex flex-col items-center w-full max-w-[340px] sm:max-w-[370px] md:max-w-[400px] lg:max-w-[440px]"
      variants={fadeInUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Outer animated glow ring */}
      <div className="absolute -inset-3 sm:-inset-4 rounded-4xl opacity-0 group-hover:opacity-100 transition-all duration-700 bg-linear-to-br from-rose/20 via-gold/15 to-sage/20 blur-xl" />

      {/* Shimmer sweep on hover */}
      <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden pointer-events-none z-10">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
      </div>

      {/* Main Card */}
      <div className="relative w-full bg-white/65 backdrop-blur-lg border border-white/60 rounded-[1.75rem] p-6 sm:p-7 md:p-8 lg:p-10 shadow-[0_8px_32px_rgba(93,78,66,0.08)] transition-all duration-500 group-hover:shadow-[0_16px_48px_rgba(93,78,66,0.15)] group-hover:bg-white/80 group-hover:-translate-y-1">
        {/* Corner ornaments */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/30 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/30 rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/30 rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/30 rounded-br-lg pointer-events-none" />

        {/* Icon with animated ring */}
        <motion.div
          className="relative mx-auto mb-5 sm:mb-6"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Pulsing outer ring */}
          <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-gold/20 animate-pulse-soft" />
          {/* Subtle glow */}
          <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-linear-to-br from-rose/15 to-gold/15 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Icon container */}
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-linear-to-br from-white/90 to-cream-dark/60 border border-gold/30 flex items-center justify-center shadow-[0_4px_16px_rgba(201,184,150,0.25)] group-hover:shadow-[0_6px_24px_rgba(201,184,150,0.4)] transition-shadow duration-500">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-sm">
              {data.icon}
            </span>
          </div>
        </motion.div>

        {/* Judul Acara */}
        <h3 className="font-display text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl text-brown text-center leading-tight mb-1 sm:mb-2 tracking-wide">
          {data.judul}
        </h3>

        {/* Subtitle accent */}
        <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-gold-dark text-center mb-4 sm:mb-5">
          Undangan Pernikahan
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
          <span className="block w-10 sm:w-14 md:w-16 h-px bg-linear-to-r from-transparent to-gold/50" />
          <div className="relative flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-gold/40" />
            <div className="w-2 h-2 rounded-full border border-gold/50 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-rose/60" />
            </div>
            <div className="w-1 h-1 rounded-full bg-gold/40" />
          </div>
          <span className="block w-10 sm:w-14 md:w-16 h-px bg-linear-to-l from-transparent to-gold/50" />
        </div>

        {/* Detail Items */}
        <div className="space-y-4 sm:space-y-5">
          {/* Tanggal */}
          <div className="flex items-start gap-3 sm:gap-4 group/item">
            <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-linear-to-br from-cream-dark/70 to-cream-dark/40 border border-gold/15 flex items-center justify-center shadow-sm group-hover/item:shadow-md group-hover/item:border-gold/30 transition-all duration-300">
              <svg
                className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-brown/70 group-hover/item:text-brown transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-sage mb-0.5 sm:mb-1">
                Tanggal
              </p>
              <p className="font-serif text-sm sm:text-base md:text-lg text-brown leading-snug font-medium">
                {data.tanggal}
              </p>
            </div>
          </div>

          {/* Thin separator */}
          <div className="flex justify-center">
            <div className="w-2/3 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />
          </div>

          {/* Waktu */}
          <div className="flex items-start gap-3 sm:gap-4 group/item">
            <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-linear-to-br from-cream-dark/70 to-cream-dark/40 border border-gold/15 flex items-center justify-center shadow-sm group-hover/item:shadow-md group-hover/item:border-gold/30 transition-all duration-300">
              <svg
                className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-brown/70 group-hover/item:text-brown transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-sage mb-0.5 sm:mb-1">
                Waktu
              </p>
              <p className="font-serif text-sm sm:text-base md:text-lg text-brown leading-snug font-medium">
                {data.waktu}
              </p>
            </div>
          </div>

          {/* Thin separator */}
          <div className="flex justify-center">
            <div className="w-2/3 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />
          </div>

          {/* Lokasi */}
          <div className="flex items-start gap-3 sm:gap-4 group/item">
            <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-linear-to-br from-cream-dark/70 to-cream-dark/40 border border-gold/15 flex items-center justify-center shadow-sm group-hover/item:shadow-md group-hover/item:border-gold/30 transition-all duration-300">
              <svg
                className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-brown/70 group-hover/item:text-brown transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-sage mb-0.5 sm:mb-1">
                Lokasi
              </p>
              <p className="font-serif text-sm sm:text-base md:text-lg text-brown leading-snug font-semibold">
                {data.lokasi}
              </p>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-sage-dark/80 leading-relaxed mt-0.5 sm:mt-1">
                {data.alamat}
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Button */}
        <div className="mt-6 sm:mt-7 md:mt-8">
          <a
            href={data.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center gap-2.5 w-full bg-linear-to-r from-brown to-brown-dark text-cream font-sans text-[10px] sm:text-xs tracking-[0.2em] font-semibold uppercase px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl transition-all duration-500 shadow-[0_6px_20px_rgba(93,78,66,0.2)] hover:shadow-[0_10px_30px_rgba(93,78,66,0.35)] transform hover:-translate-y-0.5 overflow-hidden"
          >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

            <svg
              className="w-4 h-4 sm:w-[18px] sm:h-[18px] relative"
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
            <span className="relative">Buka Google Maps</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="flex items-center gap-1.5 mt-4 sm:mt-5 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-1 h-1 rounded-full bg-gold/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-rose/40 group-hover:animate-pulse-soft" />
        <div className="w-1 h-1 rounded-full bg-gold/50" />
      </div>
    </motion.div>
  );

  return (
    <div className="w-full">
      {/* Section Title */}
      <motion.div
        className="text-center mb-10 sm:mb-12 md:mb-16 px-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <span className="w-12 sm:w-16 md:w-24 h-px bg-linear-to-r from-transparent to-gold/50" />
          <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-sage font-medium">
            Waktu & Tempat
          </p>
          <span className="w-12 sm:w-16 md:w-24 h-px bg-linear-to-l from-transparent to-gold/50" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brown mb-3 sm:mb-4 tracking-wide">
          Detail Acara
        </h2>

        <p className="font-sans text-xs sm:text-sm md:text-base text-sage-dark max-w-lg mx-auto leading-relaxed italic opacity-90">
          Dengan memohon rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i
          untuk menghadiri acara pernikahan kami
        </p>
      </motion.div>

      {/* Acara Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Akad Nikah */}
          <AcaraCard data={acaraAkad} index={0} />

          {/* Resepsi - Sementara dinonaktifkan sesuai permintaan */}
          
          <div className="flex flex-row md:flex-col items-center justify-center gap-2 py-2 md:py-0">
            <span className="block w-8 sm:w-10 md:w-px md:h-16 lg:h-20 bg-gold/30"></span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gold/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose/50 animate-pulse-soft"></div>
            </div>
            <span className="block w-8 sm:w-10 md:w-px md:h-16 lg:h-20 bg-gold/30"></span>
          </div>

          <AcaraCard data={acaraResepsi} index={1} /> 
         
        </div>
      </div>

      {/* Bottom reminder note */}
      <motion.div
        className="text-center mt-10 sm:mt-12 md:mt-16 px-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-white/50 backdrop-blur-sm border border-rose/15 rounded-full px-5 sm:px-7 py-2.5 sm:py-3 shadow-[0_4px_16px_rgba(201,169,166,0.1)] hover:shadow-[0_6px_24px_rgba(201,169,166,0.18)] transition-shadow duration-500">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-linear-to-br from-rose/15 to-gold/15 flex items-center justify-center">
            <span className="text-xs sm:text-sm">💌</span>
          </div>
          <p className="font-sans text-[10px] sm:text-xs md:text-sm text-sage-dark italic">
            Merupakan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan
            hadir
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Detail;
