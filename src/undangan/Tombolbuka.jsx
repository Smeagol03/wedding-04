import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

// Context untuk state undangan
const UndanganContext = createContext();

// Hook untuk menggunakan context
export const useUndangan = () => {
  const context = useContext(UndanganContext);
  if (!context) {
    throw new Error("useUndangan must be used within UndanganProvider");
  }
  return context;
};

// Provider component
export const UndanganProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Reset scroll ke atas saat halaman dimuat/refresh
  useEffect(() => {
    // Nonaktifkan scroll restoration bawaan browser
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Scroll ke paling atas
    window.scrollTo(0, 0);

    // Pastikan scroll ke section cover
    const coverSection = document.getElementById("cover");
    if (coverSection) {
      coverSection.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  // Lock scroll saat belum dibuka
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  // Fungsi untuk membuka undangan
  const bukaUndangan = () => {
    setIsOpened(true);

    // Scroll ke section acara
    setTimeout(() => {
      const acaraSection = document.getElementById("acara");
      if (acaraSection) {
        acaraSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    // Play musik
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
      setIsPlaying(true);
    }
  };

  // Fungsi toggle musik
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <UndanganContext.Provider
      value={{
        isOpened,
        isPlaying,
        bukaUndangan,
        toggleMusic,
        audioRef,
      }}
    >
      {children}
      {/* Audio element - hidden */}
      <audio ref={audioRef} src="/musik.mp3" loop preload="auto" />
    </UndanganContext.Provider>
  );
};

// Komponen tombol buka undangan
export const TombolBuka = ({ className = "" }) => {
  const { bukaUndangan } = useUndangan();

  return (
    <button
      onClick={bukaUndangan}
      className={`group relative inline-flex items-center gap-2 bg-linear-to-r from-rose-gold to-rose text-white font-sans text-sm md:text-base font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden ${className}`}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

      {/* Icon */}
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <span className="relative">Buka Undangan</span>
    </button>
  );
};

// Komponen tombol kontrol musik (floating)
export const MusicControl = () => {
  const { isPlaying, toggleMusic, isOpened } = useUndangan();

  // Hanya tampilkan jika undangan sudah dibuka
  if (!isOpened) return null;

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 backdrop-blur-md border border-rose/30 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      aria-label={isPlaying ? "Pause musik" : "Play musik"}
    >
      {/* Animated rings when playing */}
      {isPlaying && (
        <>
          <div className="absolute inset-0 rounded-full border-2 border-rose/30 animate-ping opacity-30"></div>
          <div
            className="absolute inset-0 rounded-full border border-rose/20 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </>
      )}

      {/* Icon */}
      {isPlaying ? (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-rose-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 4h2v16H9V4zm4 0h2v16h-2V4z" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-rose-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      )}

      {/* Music note indicator */}
      <div
        className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
          isPlaying ? "bg-rose-gold text-white" : "bg-gray-300 text-gray-600"
        }`}
      >
        ♪
      </div>
    </button>
  );
};

export default TombolBuka;
