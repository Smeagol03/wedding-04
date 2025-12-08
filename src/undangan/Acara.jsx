import Hitung from "./Hitung";
import Detail from "./detail";
import wanita from "/public/mempelai/003-2.webp";
import pria from "/public/mempelai/003-1.webp";

const Acara = () => {
  // Data Mempelai - sesuaikan dengan data yang benar
  const mempelaiPria = {
    nama: "Sopian Sauri",
    namaAyah: "Bapak Ahmad Sudrajat",
    namaIbu: "Ibu Siti Aminah",
    anakKe: "Putra pertama dari",
    foto: pria,
  };

  const mempelaiWanita = {
    nama: "Yuyun Yuningsih",
    namaAyah: "Bapak Dedi Kusnadi",
    namaIbu: "Ibu Rina Marlina",
    anakKe: "Putri kedua dari",
    foto: wanita,
  };

  const MempelaiCard = ({ data, isWanita = false }) => (
    <div className="group relative flex flex-col items-center w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[450px]">
      {/* Decorative background glow */}
      <div className="absolute -inset-2 sm:-inset-3 bg-linear-to-br from-rose/10 via-gold/10 to-sage/10 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Main Card */}
      <div className="relative w-full bg-white/50 backdrop-blur-sm border border-rose/20 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:bg-white/70">
        {/* Photo Frame */}
        <div className="relative mx-auto mb-4 sm:mb-5 md:mb-6">
          {/* Decorative rings */}
          <div className="absolute -inset-3 sm:-inset-4 md:-inset-5 rounded-full border border-gold/30 animate-pulse-soft"></div>
          <div className="absolute -inset-1.5 sm:-inset-2 md:-inset-3 rounded-full border border-rose/20"></div>

          {/* Photo container */}
          <div className="relative w-40 h-52 xs:w-44 xs:h-56 sm:w-52 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-88 mx-auto overflow-hidden rounded-full border-3 sm:border-4 border-white shadow-xl">
            <img
              src={data.foto}
              alt={`Foto ${data.nama}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Small ornament at bottom */}
          <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-10 sm:w-12 md:w-14 h-4 sm:h-5 bg-linear-to-r from-transparent via-gold/40 to-transparent rounded-full"></div>
        </div>

        {/* Name */}
        <h3 className="font-serif text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-brown text-center leading-tight mb-2 sm:mb-3">
          {data.nama}
        </h3>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <span className="block w-8 sm:w-10 md:w-12 h-px bg-linear-to-r from-transparent to-rose/40"></span>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-rose/40"></div>
          <span className="block w-8 sm:w-10 md:w-12 h-px bg-linear-to-l from-transparent to-rose/40"></span>
        </div>

        {/* Anak ke */}
        <p className="font-sans text-[10px] xs:text-xs sm:text-xs md:text-sm tracking-wider uppercase text-sage text-center mb-1 sm:mb-2">
          {data.anakKe}
        </p>

        {/* Parents names */}
        <div className="text-center space-y-0.5 sm:space-y-1">
          <p className="font-serif text-sm xs:text-base sm:text-base md:text-lg text-brown/90 italic">
            {data.namaAyah}
          </p>
          <p className="font-sans text-[10px] xs:text-xs sm:text-xs text-sage-dark">
            &
          </p>
          <p className="font-serif text-sm xs:text-base sm:text-base md:text-lg text-brown/90 italic">
            {data.namaIbu}
          </p>
        </div>
      </div>

      {/* Bottom decorative dot */}
      <div className="hidden sm:block w-2 h-2 rounded-full bg-gold/40 mt-3 sm:mt-4 group-hover:bg-gold/70 transition-colors duration-300"></div>
    </div>
  );

  return (
    <section
      id="acara"
      className="relative min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-cream via-cream to-cream-dark overflow-hidden py-12 sm:py-16 md:py-20"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(#8B9D83 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      {/* Hitung Mundur Section */}
      <div className="relative z-10 w-full mb-10 sm:mb-12 md:mb-16 lg:mb-20">
        <Hitung />
      </div>
      {/* Section Title */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="block w-10 sm:w-12 md:w-16 h-px bg-linear-to-r from-transparent to-rose/40"></span>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-rose/40 animate-pulse-soft"></div>
          <span className="block w-10 sm:w-12 md:w-16 h-px bg-linear-to-l from-transparent to-rose/40"></span>
        </div>

        <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-sage mb-1 sm:mb-2">
          Bismillahirrahmanirrahim
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brown mb-2 sm:mb-3">
          Mempelai
        </h2>

        <p className="font-sans text-xs sm:text-sm md:text-base text-sage-dark max-w-md mx-auto leading-relaxed">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
          menyelenggarakan pernikahan putra-putri kami
        </p>
      </div>

      {/* Mempelai Cards */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20">
          {/* Mempelai Pria */}
          <MempelaiCard data={mempelaiPria} />

          {/* Separator / & symbol */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-2 sm:gap-3 py-2 md:py-0">
            <span className="block w-8 sm:w-10 md:w-px md:h-8 lg:h-10 bg-rose/30"></span>
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-3 bg-linear-to-br from-rose/10 to-gold/10 rounded-full blur-sm"></div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/70 backdrop-blur-sm border border-rose/30 flex items-center justify-center shadow-md">
                <span className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-rose-gold italic">
                  &
                </span>
              </div>
            </div>
            <span className="block w-8 sm:w-10 md:w-px md:h-8 lg:h-10 bg-rose/30"></span>
          </div>

          {/* Mempelai Wanita */}
          <MempelaiCard data={mempelaiWanita} isWanita />
        </div>
      </div>

      {/* Decorative bottom ornament */}
      <div className="relative z-10 flex items-center justify-center gap-2 my-8 sm:my-10 md:my-12 lg:my-16">
        <span className="block w-12 sm:w-16 md:w-20 h-px bg-linear-to-r from-transparent to-gold/30"></span>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-rose/40"></div>
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full border border-gold/40 flex items-center justify-center">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gold/50 animate-pulse-soft"></div>
          </div>
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-rose/40"></div>
        </div>
        <span className="block w-12 sm:w-16 md:w-20 h-px bg-linear-to-l from-transparent to-gold/30"></span>
      </div>

      <div>
        <Detail />
      </div>
    </section>
  );
};

export default Acara;
