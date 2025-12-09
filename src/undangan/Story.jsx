import React from "react";

// --- Ikon untuk setiap milestone ---
const storyIcons = {
  meeting: (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  date: (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
  proposal: (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  wedding: (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  ),
};

// --- Data Dummy Kisah Cinta (Silakan Ganti dengan Kisah Anda) ---
const storyData = [
  {
    year: "2019",
    title: "Awal Pertemuan",
    description:
      "Kami pertama kali bertemu di acara sukarelawan kampus. Tidak ada yang menyangka dari tatapan singkat itu akan berlanjut ke sini.",
    icon: "meeting",
    emoji: "✨",
  },
  {
    year: "2021",
    title: "Kencan Pertama",
    description:
      "Setelah dua tahun berteman, kami memberanikan diri untuk makan malam pertama kami di tempat favorit. Di sana, kami menyadari chemistry yang lebih dalam.",
    icon: "date",
    emoji: "💕",
  },
  {
    year: "2024",
    title: "Lamaran yang Indah",
    description:
      'Tepat di hari jadi kami, di tempat kami pertama kali bertemu, ia mengucapkan janji dan melamar. Tentu saja jawabannya adalah "Ya!".',
    icon: "proposal",
    emoji: "💍",
  },
  {
    year: "2025",
    title: "Hari Bahagia Kami",
    description:
      "Dan kini, dengan penuh rasa syukur, kami siap memulai babak baru dalam hidup kami. Kami sangat menantikan kehadiran Anda.",
    icon: "wedding",
    emoji: "💒",
  },
];

// --- Sub-Komponen Item Timeline ---
const TimelineItem = ({ data, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <li className="relative group">
      {/* Mobile Layout */}
      <div className="md:hidden flex gap-4 sm:gap-6">
        {/* Timeline Line & Dot */}
        <div className="relative flex flex-col items-center">
          {/* Animated Dot */}
          <div className="relative z-10 shrink-0">
            {/* Outer glow ring */}
            <div className="absolute -inset-2 bg-linear-to-br from-rose/20 via-gold/20 to-sage/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Main dot container */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-white via-cream to-cream-dark border-2 border-gold/40 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-rose/60 transition-all duration-300 group-hover:scale-110">
              {/* Icon */}
              <span className="text-rose-gold group-hover:text-rose transition-colors duration-300">
                {storyIcons[data.icon]}
              </span>
            </div>

            {/* Floating emoji */}
            <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full shadow-md flex items-center justify-center text-xs sm:text-sm animate-bounce-slow">
              {data.emoji}
            </div>
          </div>

          {/* Vertical Line */}
          {!isLast && (
            <div className="w-0.5 flex-1 mt-3 bg-linear-to-b from-gold/40 via-rose/30 to-gold/40"></div>
          )}
        </div>

        {/* Content Card */}
        <div className="flex-1 pb-10 sm:pb-12">
          {/* Year Badge */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-serif text-2xl sm:text-3xl text-brown font-medium">
              {data.year}
            </span>
            <div className="w-8 sm:w-10 h-px bg-linear-to-r from-gold/60 to-transparent"></div>
          </div>

          {/* Card */}
          <div className="relative overflow-hidden">
            {/* Card background glow */}
            <div className="absolute -inset-1 bg-linear-to-br from-rose/10 via-gold/5 to-sage/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <div className="relative bg-white/70 backdrop-blur-sm border border-rose/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md group-hover:shadow-xl group-hover:bg-white/90 transition-all duration-300">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-gold/10 to-transparent rounded-tr-xl sm:rounded-tr-2xl"></div>

              <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-brown mb-2 relative">
                {data.title}
              </h3>

              {/* Decorative line */}
              <div className="flex items-center gap-2 mb-3">
                <span className="block w-8 sm:w-10 h-px bg-linear-to-r from-rose/50 to-transparent"></span>
                <div className="w-1 h-1 rounded-full bg-rose/40"></div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-sage-dark leading-relaxed relative">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Alternating sides */}
      <div
        className={`hidden md:grid md:grid-cols-9 gap-4 lg:gap-6 items-center ${
          !isLast ? "pb-16 lg:pb-20" : ""
        }`}
      >
        {/* Left Content / Spacer */}
        <div className="col-span-4">
          {isEven ? (
            <div
              className={`flex flex-col ${
                isEven ? "items-end text-right" : "items-start text-left"
              }`}
            >
              {/* Year with decorative line */}
              <div className="flex items-center gap-3 mb-3">
                {isEven && (
                  <div className="w-12 lg:w-16 h-px bg-linear-to-l from-gold/60 to-transparent"></div>
                )}
                <span className="font-serif text-4xl lg:text-5xl text-brown/80 font-light tracking-wide">
                  {data.year}
                </span>
                {!isEven && (
                  <div className="w-12 lg:w-16 h-px bg-linear-to-r from-gold/60 to-transparent"></div>
                )}
              </div>

              {/* Card */}
              <div className="relative max-w-sm lg:max-w-md overflow-hidden group/card">
                <div className="absolute -inset-2 bg-linear-to-br from-rose/10 via-gold/5 to-sage/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative bg-white/70 backdrop-blur-sm border border-rose/20 rounded-2xl p-5 lg:p-6 shadow-lg group-hover:shadow-2xl group-hover:bg-white/90 transition-all duration-300 transform group-hover:-translate-y-1">
                  {/* Corner accent */}
                  <div
                    className={`absolute top-0 ${
                      isEven
                        ? "right-0 rounded-tr-2xl bg-linear-to-bl"
                        : "left-0 rounded-tl-2xl bg-linear-to-br"
                    } w-20 h-20 from-gold/10 to-transparent`}
                  ></div>

                  <h3 className="font-serif text-xl lg:text-2xl text-brown mb-2 relative">
                    {data.title}
                  </h3>

                  <div
                    className={`flex items-center gap-2 mb-3 ${
                      isEven ? "justify-end" : "justify-start"
                    }`}
                  >
                    {isEven && (
                      <div className="w-1 h-1 rounded-full bg-rose/40"></div>
                    )}
                    <span className="block w-10 lg:w-12 h-px bg-linear-to-r from-rose/50 to-transparent"></span>
                    {!isEven && (
                      <div className="w-1 h-1 rounded-full bg-rose/40"></div>
                    )}
                  </div>

                  <p className="font-sans text-sm text-sage-dark leading-relaxed relative">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        {/* Center Timeline */}
        <div className="col-span-1 flex flex-col items-center relative">
          {/* Connecting line to previous */}
          {index > 0 && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 lg:h-20 bg-linear-to-t from-gold/40 via-rose/30 to-gold/40"></div>
          )}

          {/* Main Timeline Dot */}
          <div className="relative z-10">
            {/* Outer glow */}
            <div className="absolute -inset-3 bg-linear-to-br from-rose/20 via-gold/20 to-sage/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Pulsing ring */}
            <div className="absolute -inset-2 rounded-full border border-gold/30 animate-ping-slow opacity-50"></div>

            {/* Main dot */}
            <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-linear-to-br from-white via-cream to-cream-dark border-2 border-gold/50 flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:border-rose/70 transition-all duration-300 group-hover:scale-110">
              <span className="text-rose-gold group-hover:text-rose transition-colors duration-300">
                {storyIcons[data.icon]}
              </span>
            </div>

            {/* Floating emoji */}
            <div className="absolute -top-1 -right-1 w-7 h-7 lg:w-8 lg:h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-sm lg:text-base animate-float border border-gold/20">
              {data.emoji}
            </div>
          </div>

          {/* Connecting line to next */}
          {!isLast && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 lg:h-20 bg-linear-to-b from-gold/40 via-rose/30 to-gold/40"></div>
          )}
        </div>

        {/* Right Content / Spacer */}
        <div className="col-span-4">
          {!isEven ? (
            <div className="flex flex-col items-start text-left">
              {/* Year with decorative line */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-serif text-4xl lg:text-5xl text-brown/80 font-light tracking-wide">
                  {data.year}
                </span>
                <div className="w-12 lg:w-16 h-px bg-linear-to-r from-gold/60 to-transparent"></div>
              </div>

              {/* Card */}
              <div className="relative max-w-sm lg:max-w-md overflow-hidden group/card">
                <div className="absolute -inset-2 bg-linear-to-br from-rose/10 via-gold/5 to-sage/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative bg-white/70 backdrop-blur-sm border border-rose/20 rounded-2xl p-5 lg:p-6 shadow-lg group-hover:shadow-2xl group-hover:bg-white/90 transition-all duration-300 transform group-hover:-translate-y-1">
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 rounded-tl-2xl bg-linear-to-br w-20 h-20 from-gold/10 to-transparent"></div>

                  <h3 className="font-serif text-xl lg:text-2xl text-brown mb-2 relative">
                    {data.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3 justify-start">
                    <span className="block w-10 lg:w-12 h-px bg-linear-to-r from-rose/50 to-transparent"></span>
                    <div className="w-1 h-1 rounded-full bg-rose/40"></div>
                  </div>

                  <p className="font-sans text-sm text-sage-dark leading-relaxed relative">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </li>
  );
};

// --- Komponen Utama Kisah Cinta ---
const OurStorySection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background with subtle linear */}
      <div className="absolute inset-0 bg-linear-to-b from-cream via-sage-light/30 to-cream"></div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-linear(#8B9D83 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="relative w-full">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
          {/* Pre-title with decorative elements */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="block w-8 sm:w-12 md:w-16 h-px bg-linear-to-r from-transparent via-gold/50 to-gold/50"></span>
            <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-sage">
              Perjalanan Kami
            </p>
            <span className="block w-8 sm:w-12 md:w-16 h-px bg-linear-to-l from-transparent via-gold/50 to-gold/50"></span>
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown mb-4 sm:mb-5">
            Kisah Cinta Kami
          </h2>

          {/* Decorative element under title */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="block w-10 sm:w-14 md:w-20 h-px bg-linear-to-r from-transparent to-rose/40"></span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gold/40"></div>
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose/50"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gold/40"></div>
            </div>
            <span className="block w-10 sm:w-14 md:w-20 h-px bg-linear-to-l from-transparent to-rose/40"></span>
          </div>

          <p className="font-sans text-xs sm:text-sm md:text-base text-sage-dark max-w-xl mx-auto leading-relaxed">
            Dari pertemuan yang tak terduga, hingga janji sehidup semati. Inilah
            babak-babak penting dalam kisah kami.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <ul className="list-none p-0 relative">
            {storyData.map((story, index) => (
              <TimelineItem
                key={index}
                data={story}
                index={index}
                isLast={index === storyData.length - 1}
              />
            ))}
          </ul>
        </div>

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center gap-3 mt-12 sm:mt-16 md:mt-20">
          <span className="block w-8 sm:w-12 h-px bg-linear-to-r from-transparent to-gold/40"></span>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 border border-gold/30 flex items-center justify-center shadow-md">
            <span className="text-sm sm:text-base">💕</span>
          </div>
          <span className="block w-8 sm:w-12 h-px bg-linear-to-l from-transparent to-gold/40"></span>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
