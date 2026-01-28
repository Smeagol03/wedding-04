import React, { useState, useEffect } from "react";

const Hitung = () => {
  // Tanggal acara - sesuaikan dengan tanggal pernikahan
  const tanggalAcara = new Date("2026-02-01T08:30:00").getTime();

  const [waktuTersisa, setWaktuTersisa] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const hitungMundur = () => {
      const sekarang = new Date().getTime();
      const selisih = tanggalAcara - sekarang;

      if (selisih <= 0) {
        setIsExpired(true);
        setWaktuTersisa({ hari: 0, jam: 0, menit: 0, detik: 0 });
        return;
      }

      const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
      const jam = Math.floor(
        (selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
      const detik = Math.floor((selisih % (1000 * 60)) / 1000);

      setWaktuTersisa({ hari, jam, menit, detik });
    };

    // Hitung pertama kali
    hitungMundur();

    // Update setiap detik
    const interval = setInterval(hitungMundur, 1000);

    return () => clearInterval(interval);
  }, [tanggalAcara]);

  const CountdownItem = ({ value, label }) => (
    <div className="group relative flex flex-col items-center w-full max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]">
      {/* Decorative ring background */}
      <div className="absolute -inset-0.5 sm:-inset-1 bg-linear-to-br from-rose/20 via-gold/20 to-sage/20 rounded-xl sm:rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Main card */}
      <div className="relative w-full bg-white/70 backdrop-blur-md border border-rose/30 rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl text-center">
        {/* Number */}
        <div className="relative inline-block">
          <span className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold bg-linear-to-br from-rose-gold via-brown to-sage-dark bg-clip-text text-transparent leading-none">
            {String(value).padStart(2, "0")}
          </span>

          {/* Animated sparkle - hidden on very small screens */}
          <div className="hidden xs:block absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gold rounded-full animate-pulse-soft opacity-70"></div>
        </div>

        {/* Decorative line */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-rose/50 to-transparent my-1.5 sm:my-2 md:my-3"></div>

        {/* Label */}
        <span className="font-sans text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-sage-dark">
          {label}
        </span>
      </div>

      {/* Bottom decorative dot - hidden on mobile for cleaner look */}
      <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 sm:mt-3 group-hover:bg-gold transition-colors duration-300"></div>
    </div>
  );

  const Separator = () => (
    <div className="flex flex-col items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-0.5 sm:px-1 md:px-2 lg:px-3">
      <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-rose-gold animate-pulse-soft"></div>
      <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-rose/50"></div>
      <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-rose-gold animate-pulse-soft"></div>
    </div>
  );

  if (isExpired) {
    return (
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-3 sm:px-4">
        <div className="relative bg-white/60 backdrop-blur-md border border-gold/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl text-center">
          <div className="absolute inset-0 bg-linear-to-br from-gold/5 via-transparent to-rose/5 rounded-2xl sm:rounded-3xl"></div>

          <div className="relative">
            {/* Celebration icon */}
            <div className="inline-flex items-center justify-center w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mb-4 sm:mb-5 md:mb-6 rounded-full bg-linear-to-br from-rose/20 to-gold/20 border border-rose/30">
              <span className="text-2xl sm:text-3xl md:text-4xl">💒</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-brown mb-2 sm:mb-3">
              Hari Bahagia Telah Tiba!
            </h3>

            <p className="font-sans text-xs sm:text-sm md:text-base text-sage-dark leading-relaxed">
              Terima kasih telah menjadi bagian dari kebahagiaan kami
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-2 sm:px-4">
      {/* Title Section */}
      <div className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="block w-8 sm:w-10 md:w-12 lg:w-16 h-px bg-linear-to-r from-transparent to-rose/40"></span>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-rose/40 animate-pulse-soft"></div>
          <span className="block w-8 sm:w-10 md:w-12 lg:w-16 h-px bg-linear-to-l from-transparent to-rose/40"></span>
        </div>

        <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-sage mb-1 sm:mb-2">
          Menghitung Hari
        </p>

        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-brown leading-snug">
          Menuju Hari Bahagia
        </h3>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
          <span className="block w-6 sm:w-8 h-px bg-rose/30"></span>
          <span className="block w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gold/50"></span>
          <span className="block w-6 sm:w-8 h-px bg-rose/30"></span>
        </div>
      </div>

      {/* Countdown Grid - Flexible layout for all screen sizes */}
      <div className="flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
        <CountdownItem value={waktuTersisa.hari} label="Hari" />
        <Separator />
        <CountdownItem value={waktuTersisa.jam} label="Jam" />
        <Separator />
        <CountdownItem value={waktuTersisa.menit} label="Menit" />
        <Separator />
        <CountdownItem value={waktuTersisa.detik} label="Detik" />
      </div>

      {/* Bottom decorative element */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-6 md:mt-8 lg:mt-10">
        <span className="block w-10 sm:w-12 md:w-16 h-px bg-linear-to-r from-transparent to-gold/30"></span>
        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full border border-gold/40 flex items-center justify-center">
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-rose/50 animate-pulse-soft"></div>
        </div>
        <span className="block w-10 sm:w-12 md:w-16 h-px bg-linear-to-l from-transparent to-gold/30"></span>
      </div>

      {/* Subtle message */}
      <p className="text-center font-sans text-[10px] sm:text-xs md:text-sm text-sage/80 mt-3 sm:mt-4 tracking-wide leading-relaxed">
        Kami menantikan kehadiran Anda
      </p>
    </div>
  );
};

export default Hitung;
