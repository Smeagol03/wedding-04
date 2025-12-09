const Detail = () => {
  // Data Acara - sesuaikan dengan data yang benar
  const acaraAkad = {
    judul: "Akad Nikah",
    tanggal: "Minggu, 28 Desember 2025",
    waktu: "08:00 - 10:00 WIB",
    lokasi: "Masjid Al-Ikhlas",
    alamat: "Jl. Raya Sukabumi No. 123, Kec. Cisaat, Kab. Sukabumi, Jawa Barat",
    mapUrl: "https://maps.google.com/?q=Masjid+Al-Ikhlas+Sukabumi",
    icon: "🕌",
  };

  const acaraResepsi = {
    judul: "Resepsi Pernikahan",
    tanggal: "Minggu, 28 Desember 2025",
    waktu: "11:00 - 14:00 WIB",
    lokasi: "Gedung Serbaguna Cisaat",
    alamat: "Jl. Raya Sukabumi No. 456, Kec. Cisaat, Kab. Sukabumi, Jawa Barat",
    mapUrl: "https://maps.google.com/?q=Gedung+Serbaguna+Cisaat",
    icon: "💒",
  };

  const AcaraCard = ({ data }) => (
    <div className="group relative flex flex-col items-center w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[400px]">
      {/* Decorative background glow */}
      <div className="absolute -inset-2 sm:-inset-3 bg-linear-to-br from-rose/10 via-gold/10 to-sage/10 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Main Card */}
      <div className="relative w-full bg-white/60 backdrop-blur-sm border border-rose/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:bg-white/80">
        {/* Icon */}
        <div className="relative mx-auto mb-4 sm:mb-5">
          <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-linear-to-br from-rose/10 to-gold/10 blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-white/80 border border-gold/30 flex items-center justify-center shadow-md">
            <span className="text-2xl sm:text-3xl md:text-4xl">
              {data.icon}
            </span>
          </div>
        </div>

        {/* Judul Acara */}
        <h3 className="font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl text-brown text-center leading-tight mb-3 sm:mb-4">
          {data.judul}
        </h3>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
          <span className="block w-10 sm:w-12 md:w-14 h-px bg-linear-to-r from-transparent to-rose/40"></span>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-rose/40"></div>
          <span className="block w-10 sm:w-12 md:w-14 h-px bg-linear-to-l from-transparent to-rose/40"></span>
        </div>

        {/* Detail Items */}
        <div className="space-y-3 sm:space-y-4">
          {/* Tanggal */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-cream-dark/50 flex items-center justify-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-sage-dark"
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
              <p className="font-sans text-[10px] sm:text-xs tracking-wider uppercase text-sage mb-0.5">
                Tanggal
              </p>
              <p className="font-serif text-sm sm:text-base md:text-lg text-brown leading-snug">
                {data.tanggal}
              </p>
            </div>
          </div>

          {/* Waktu */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-cream-dark/50 flex items-center justify-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-sage-dark"
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
              <p className="font-sans text-[10px] sm:text-xs tracking-wider uppercase text-sage mb-0.5">
                Waktu
              </p>
              <p className="font-serif text-sm sm:text-base md:text-lg text-brown leading-snug">
                {data.waktu}
              </p>
            </div>
          </div>

          {/* Lokasi */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-cream-dark/50 flex items-center justify-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-sage-dark"
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
              <p className="font-sans text-[10px] sm:text-xs tracking-wider uppercase text-sage mb-0.5">
                Lokasi
              </p>
              <p className="font-serif text-sm sm:text-base md:text-lg text-brown leading-snug font-medium">
                {data.lokasi}
              </p>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-sage-dark leading-relaxed mt-0.5 sm:mt-1">
                {data.alamat}
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Button */}
        <div className="mt-5 sm:mt-6 md:mt-7">
          <a
            href={data.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center gap-2 w-full bg-linear-to-r from-sage to-sage-dark text-white font-sans text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 overflow-hidden"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>

            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
          </a>
        </div>
      </div>

      {/* Bottom decorative dot */}
      <div className="hidden sm:block w-2 h-2 rounded-full bg-gold/40 mt-3 sm:mt-4 group-hover:bg-gold/70 transition-colors duration-300"></div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-sage mb-1 sm:mb-2">
          Waktu & Tempat
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brown mb-2 sm:mb-3">
          Detail Acara
        </h2>

        <p className="font-sans text-xs sm:text-sm md:text-base text-sage-dark max-w-lg mx-auto leading-relaxed">
          Dengan memohon rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i
          untuk menghadiri acara pernikahan kami
        </p>
      </div>

      {/* Acara Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Akad Nikah */}
          <AcaraCard data={acaraAkad} />

          {/* Separator */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-2 py-2 md:py-0">
            <span className="block w-8 sm:w-10 md:w-px md:h-16 lg:h-20 bg-gold/30"></span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gold/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose/50 animate-pulse-soft"></div>
            </div>
            <span className="block w-8 sm:w-10 md:w-px md:h-16 lg:h-20 bg-gold/30"></span>
          </div>

          {/* Resepsi */}
          <AcaraCard data={acaraResepsi} />
        </div>
      </div>

      {/* Bottom reminder note */}
      <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/50 backdrop-blur-sm border border-rose/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-rose/10 flex items-center justify-center">
            <span className="text-xs sm:text-sm">💌</span>
          </div>
          <p className="font-sans text-[10px] sm:text-xs md:text-sm text-sage-dark">
            Merupakan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan
            hadir
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
