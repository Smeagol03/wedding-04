import React from "react";

// --- KONFIGURASI PENUTUP ---
// Ganti dengan data Anda
const couplePhoto = "/src/mempelai/bg.webp";
const namaPria = "Sopian";
const namaWanita = "Yuyun";
const tanggalAcara = "25 Januari 2025";

const closingQuote = {
  text: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
  source: "QS. Ar-Rum: 21",
};

const thankYouMessage =
  "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.";

const closingMessage =
  "Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.";

const hashtag = "#SopianYuyun2025";

const Penutup = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Combined Background - Single layer untuk mengurangi repaint di Android */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, #fdf8f3, rgba(139,157,131,0.2) 50%, #f5ede4),
            radial-gradient(ellipse at 10% 20%, rgba(201,169,166,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(201,185,150,0.08) 0%, transparent 50%)
          `,
          willChange: "transform",
        }}
      />

      {/* ========================================== */}
      {/* PLACEHOLDER DEKORASI - KIRI ATAS */}
      {/* Contoh: <img src="/path/ke/bunga.png" className="absolute top-10 left-10 w-32 h-32 opacity-30" /> */}
      {/* ========================================== */}

      {/* ========================================== */}
      {/* PLACEHOLDER DEKORASI - KANAN ATAS */}
      {/* Contoh: <img src="/path/ke/bunga.png" className="absolute top-10 right-10 w-32 h-32 opacity-30 scale-x-[-1]" /> */}
      {/* ========================================== */}

      {/* Floating decorative hearts */}
      <div className="absolute top-[15%] left-[10%] text-rose/20 text-3xl sm:text-4xl animate-float">
        ❤
      </div>
      <div className="absolute top-[25%] right-[15%] text-gold/30 text-2xl sm:text-3xl animate-float-delayed">
        ✨
      </div>
      <div className="absolute bottom-[30%] left-[8%] text-rose/15 text-2xl sm:text-3xl animate-float">
        💕
      </div>
      <div className="absolute bottom-[20%] right-[10%] text-gold/25 text-3xl sm:text-4xl animate-float-delayed">
        ❤
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Container */}
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute -inset-4 sm:-inset-6 bg-linear-to-br from-rose/10 via-gold/5 to-sage/10 rounded-3xl sm:rounded-4xl blur-xl opacity-60"></div>

          {/* Main Card */}
          <div className="relative bg-white/70 backdrop-blur-sm border border-rose/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-br from-gold/10 to-transparent rounded-tl-2xl sm:rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-bl from-rose/10 to-transparent rounded-tr-2xl sm:rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-tr from-rose/10 to-transparent rounded-bl-2xl sm:rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-tl from-gold/10 to-transparent rounded-br-2xl sm:rounded-br-3xl"></div>

            {/* Corner frames */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-14 sm:h-14 border-l-2 border-t-2 border-gold/30 rounded-tl-xl"></div>
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-14 sm:h-14 border-r-2 border-t-2 border-gold/30 rounded-tr-xl"></div>
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-10 h-10 sm:w-14 sm:h-14 border-l-2 border-b-2 border-gold/30 rounded-bl-xl"></div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-14 sm:h-14 border-r-2 border-b-2 border-gold/30 rounded-br-xl"></div>

            {/* Content */}
            <div className="relative text-center">
              {/* Quote */}
              <div className="mb-8 sm:mb-10">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-rose/40 text-4xl sm:text-5xl font-serif">
                    "
                  </span>
                </div>
                <p className="font-serif text-sm sm:text-base md:text-lg text-brown/80 italic leading-relaxed max-w-2xl mx-auto">
                  {closingQuote.text}
                </p>
                <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm text-sage font-medium">
                  — {closingQuote.source}
                </p>
              </div>

              {/* Decorative separator */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <span className="block w-12 sm:w-16 md:w-24 h-px bg-linear-to-r from-transparent to-gold/40"></span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose/40"></div>
                  <span className="text-rose text-lg sm:text-xl">❤</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose/40"></div>
                </div>
                <span className="block w-12 sm:w-16 md:w-24 h-px bg-linear-to-l from-transparent to-gold/40"></span>
              </div>

              {/* Photo Frame */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-8 sm:mb-10">
                {/* Photo glow */}
                <div className="absolute -inset-3 bg-linear-to-br from-rose/20 via-gold/15 to-sage/20 rounded-full blur-lg"></div>

                {/* Photo container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={couplePhoto}
                    alt="Foto Pasangan"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative ring */}
                <div className="absolute -inset-2 border-2 border-gold/20 rounded-full"></div>
                <div className="absolute -inset-4 border border-rose/10 rounded-full"></div>

                {/* Floating hearts around photo */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 rounded-full shadow-md flex items-center justify-center border border-rose/20">
                  <span className="text-sm sm:text-base">💕</span>
                </div>
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 bg-white/90 rounded-full shadow-md flex items-center justify-center border border-gold/20">
                  <span className="text-xs sm:text-sm">✨</span>
                </div>
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 bg-white/90 rounded-full shadow-md flex items-center justify-center border border-gold/20">
                  <span className="text-xs sm:text-sm">✨</span>
                </div>
              </div>

              {/* Names */}
              <div className="mb-6 sm:mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brown">
                  {namaPria} <span className="text-rose">&</span> {namaWanita}
                </h2>
                <p className="mt-2 sm:mt-3 font-sans text-xs sm:text-sm text-sage">
                  {tanggalAcara}
                </p>
              </div>

              {/* Thank you message */}
              <div className="mb-6 sm:mb-8">
                <p className="font-sans text-xs sm:text-sm md:text-base text-sage-dark leading-relaxed max-w-xl mx-auto">
                  {thankYouMessage}
                </p>
              </div>

              {/* Closing message */}
              <div className="mb-6 sm:mb-8">
                <p className="font-serif text-sm sm:text-base md:text-lg text-brown italic">
                  {closingMessage}
                </p>
              </div>

              {/* Hashtag */}
              <div className="inline-block">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-rose/20 via-gold/20 to-rose/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative px-6 py-2.5 sm:px-8 sm:py-3 bg-linear-to-r from-cream to-cream-dark border border-gold/30 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                    <p className="font-sans text-sm sm:text-base font-medium text-brown tracking-wide">
                      {hashtag}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom decorative element */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
                <span className="block w-10 sm:w-14 h-px bg-linear-to-r from-transparent to-gold/30"></span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-rose/30"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold/40"></div>
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-rose/30"></div>
                </div>
                <span className="block w-10 sm:w-14 h-px bg-linear-to-l from-transparent to-gold/30"></span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* PLACEHOLDER DEKORASI - KIRI BAWAH */}
        {/* Contoh: <img src="/path/ke/bunga.png" className="absolute bottom-10 left-10 w-24 h-24 opacity-20" /> */}
        {/* ========================================== */}

        {/* ========================================== */}
        {/* PLACEHOLDER DEKORASI - KANAN BAWAH */}
        {/* Contoh: <img src="/path/ke/bunga.png" className="absolute bottom-10 right-10 w-24 h-24 opacity-20 scale-x-[-1]" /> */}
        {/* ========================================== */}
      </div>

      {/* Footer credits */}
      <div className="relative mt-12 sm:mt-16 text-center">
        <p className="font-sans text-[10px] sm:text-xs text-sage/60">
          Made with ❤ for a special day
        </p>
      </div>
    </section>
  );
};

export default Penutup;
