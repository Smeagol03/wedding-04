import React, { useState, useEffect } from "react";

// Data rekening - Ganti dengan data Anda
const giftData = [
  {
    name: "Sopian Sauri",
    role: "Mempelai Pria",
    bank: "Bank BCA",
    accountNumber: "1234567890",
    accountName: "Sopian Sauri",
  },
  {
    name: "Yuyun Yuningsih",
    role: "Mempelai Wanita",
    bank: "Bank Mandiri",
    accountNumber: "9876543210",
    accountName: "Yuyun Yuningsih",
  },
];

// Komponen Card Rekening
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
    <div className="relative group">
      {/* Outer glow */}
      <div className="absolute -inset-2 sm:-inset-3 bg-linear-to-br from-rose/10 via-gold/5 to-sage/10 rounded-2xl sm:rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      <div className="relative bg-white/80 backdrop-blur-sm border border-rose/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
        {/* Decorative corner accents */}
        <div
          className={`absolute top-0 ${
            index === 0
              ? "left-0 rounded-tl-2xl sm:rounded-tl-3xl bg-linear-to-br"
              : "right-0 rounded-tr-2xl sm:rounded-tr-3xl bg-linear-to-bl"
          } w-20 h-20 from-gold/10 to-transparent`}
        ></div>

        {/* Role Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-linear-to-r from-rose/10 to-gold/10 border border-rose/20 rounded-full text-xs sm:text-sm font-sans text-brown uppercase tracking-wider">
            {data.role}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-brown text-center mb-3 sm:mb-4">
          {data.name}
        </h3>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
          <span className="block w-8 sm:w-10 h-px bg-linear-to-r from-transparent to-gold/40"></span>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-rose/40"></div>
          <span className="block w-8 sm:w-10 h-px bg-linear-to-l from-transparent to-gold/40"></span>
        </div>

        {/* Bank Info */}
        <div className="space-y-3 mb-5 sm:mb-6">
          {/* Bank Name */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-sage/70 mb-1">Bank</p>
            <p className="font-sans text-sm sm:text-base font-medium text-brown">
              {data.bank}
            </p>
          </div>

          {/* Account Number */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-sage/70 mb-1">
              Nomor Rekening
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-cream/50 border border-sage/20 rounded-lg">
              <p className="font-mono text-base sm:text-lg font-semibold text-brown tracking-wider">
                {data.accountNumber}
              </p>
            </div>
          </div>

          {/* Account Name */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-sage/70 mb-1">Atas Nama</p>
            <p className="font-sans text-sm sm:text-base font-medium text-brown">
              {data.accountName}
            </p>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="relative w-full py-3 px-4 rounded-xl font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300 overflow-hidden bg-linear-to-r from-brown via-brown to-brown/90 text-white hover:shadow-lg hover:shadow-brown/20 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-gold/30 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={copied}
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

          <span className="relative flex items-center justify-center gap-2">
            {copied ? (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Berhasil Disalin!
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Salin Nomor Rekening
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

const Hadiah = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-cream via-sage-light/30 to-cream"></div>

      {/* Decorative background blurs with parallax */}
      <div
        className="absolute top-20 left-10 w-64 h-64 bg-rose/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sage/5 rounded-full blur-3xl"
        style={{
          transform: `translate(-50%, -50%) translateY(${scrollY * 0.05}px)`,
        }}
      ></div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-linear(#8B9D83 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      {/* ========================================== */}
      {/* PLACEHOLDER DEKORASI - KIRI ATAS */}
      {/* Ganti dengan gambar/ikon dekoratif Anda */}
      {/* Contoh dengan parallax: */}
      {/* <img 
        src="/path/ke/bunga-kiri.png" 
        className="absolute top-10 left-10 w-32 h-32 opacity-30" 
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      /> */}
      {/* ========================================== */}

      {/* ========================================== */}
      {/* PLACEHOLDER DEKORASI - KANAN ATAS */}
      {/* Ganti dengan gambar/ikon dekoratif Anda */}
      {/* Contoh dengan parallax: */}
      {/* <img 
        src="/path/ke/bunga-kanan.png" 
        className="absolute top-10 right-10 w-32 h-32 opacity-30" 
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      /> */}
      {/* ========================================== */}

      <div className="relative w-full">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 px-4">
          {/* Pre-title with decorative elements */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="block w-8 sm:w-12 md:w-16 h-px bg-linear-to-r from-transparent via-gold/50 to-gold/50"></span>
            <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-sage">
              Hadiah Pernikahan
            </p>
            <span className="block w-8 sm:w-12 md:w-16 h-px bg-linear-to-l from-transparent via-gold/50 to-gold/50"></span>
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown mb-4 sm:mb-5">
            Kirim Hadiah
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

          <p className="font-sans text-xs sm:text-sm md:text-base text-sage-dark max-w-2xl mx-auto leading-relaxed">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi
            kado secara cashless melalui:
          </p>
        </div>

        {/* Account Cards */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {giftData.map((gift, index) => (
              <AccountCard key={index} data={gift} index={index} />
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* PLACEHOLDER DEKORASI - KIRI BAWAH */}
        {/* Ganti dengan gambar/ikon dekoratif Anda */}
        {/* Contoh dengan parallax: */}
        {/* <img 
          src="/path/ke/daun-kiri.png" 
          className="absolute bottom-10 left-10 w-24 h-24 opacity-20" 
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        /> */}
        {/* ========================================== */}

        {/* ========================================== */}
        {/* PLACEHOLDER DEKORASI - KANAN BAWAH */}
        {/* Ganti dengan gambar/ikon dekoratif Anda */}
        {/* Contoh dengan parallax: */}
        {/* <img 
          src="/path/ke/daun-kanan.png" 
          className="absolute bottom-10 right-10 w-24 h-24 opacity-20" 
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        /> */}
        {/* ========================================== */}

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center gap-3 mt-12 sm:mt-16 md:mt-20">
          <span className="block w-8 sm:w-12 h-px bg-linear-to-r from-transparent to-gold/40"></span>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 border border-gold/30 flex items-center justify-center shadow-md">
            <span className="text-sm sm:text-base">🎁</span>
          </div>
          <span className="block w-8 sm:w-12 h-px bg-linear-to-l from-transparent to-gold/40"></span>
        </div>
      </div>
    </section>
  );
};

export default Hadiah;
