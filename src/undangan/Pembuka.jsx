import Bg from "/mempelai/bg.webp";
import kananAtas from "/dekor/kanan-atas.png";
import kiriAtas from "/dekor/kiri-atas.png";
import kananBawah from "/dekor/kanan-bawah.png";
import kiriBawah from "/dekor/kiri-bawah.png";
import { TombolBuka } from "./Tombolbuka";

const Pembuka = () => {
  const namaPria = "Sopian";
  const namaWanita = "Yuyun";
  const tanggalAcara = "28 Desember 2025";

  return (
    <>
      {/* ===== COVER / HERO SECTION ===== */}
      <section
        id="cover"
        className="relative z-50 h-dvh flex flex-col items-center justify-center bg-linear-to-b from-cream via-cream to-cream-dark overflow-hidden"
      >
        <img
          src={Bg}
          alt=""
          className="absolute inset-0 w-full h-full z-0 object-top object-cover"
        />

        {/* Aesthetic Overlay - Multiple layers */}
        {/* Layer 1: Gradient vertikal - gelap di atas dan bawah */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 via-transparent to-black/70"></div>

        {/* Layer 2: Radial vignette - gelap di pinggir */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)",
          }}
        ></div>

        {/* Layer 3: Tint warna cream/rose untuk nuansa romantis */}
        <div className="absolute inset-0 z-10 bg-linear-to-br from-rose-gold/10 via-transparent to-cream/20 mix-blend-overlay"></div>

        {/* Layer 4: Subtle noise/grain texture effect */}
        <div
          className="absolute inset-0 z-10 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        ></div>
        {/* Decorative Ornaments */}
        {/* Top Left Corner */}
        <div className="absolute z-50 opacity-50 -top-14 -left-14 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56">
          <img
            src={kiriAtas}
            alt="Ornamen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Right Corner */}
        <div className="absolute z-50 opacity-50 -top-14 -right-14 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56">
          <img
            src={kananAtas}
            alt="Ornamen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Left Corner */}
        <div className="absolute z-50 opacity-50 -bottom-14 -left-14 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <img
            src={kiriBawah}
            alt="Ornamen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Right Corner */}
        <div className="absolute z-50 opacity-50 -bottom-14 -right-14 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <img
            src={kananBawah}
            alt="Ornamen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-linear(#8B9D83 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        {/* Pre-title */}
        <p className="absolute top-10 z-30 font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-white/90 animate-fade-in drop-shadow-md">
          The Wedding Of
        </p>
        {/* Main Content - Using flex-1 to fill available space */}
        <div className="absolute bottom-7 z-30 flex flex-col items-center justify-center text-center px-4 py-6 sm:py-8 w-full max-w-lg mx-auto animate-fade-in-up flex-1">
          {/* Names */}
          <div className="mb-2 sm:mb-4 mt-4 sm:mt-2">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-wide drop-shadow-lg">
              {namaPria}
              <span className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gold italic mx-1 sm:mx-2 drop-shadow-md">
                &
              </span>
              {namaWanita}
            </h1>
          </div>

          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 border-t border-b border-white/30 py-1.5 sm:py-2 px-4 sm:px-6 mb-3 sm:mb-6">
            <span className="w-5 sm:w-8 h-px bg-white/40"></span>
            <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-widest text-white/90 drop-shadow-sm">
              {tanggalAcara}
            </p>
            <span className="w-5 sm:w-8 h-px bg-white/40"></span>
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
