import React, { useState, useEffect, useRef } from "react";

// --- Data Dummy Galeri (Menggunakan placeholder images) ---
const galleryItems = [
  {
    id: 1,
    type: "photo",
    src: "https://picsum.photos/200/300",
    alt: "Pre-wedding romantic moment",
    caption: "Moment Romantis",
    size: "normal", // tall, wide, normal
  },
  {
    id: 2,
    type: "photo",
    src: "https://picsum.photos/200/300",
    alt: "Pre-wedding romantic moment",
    caption: "Moment Romantis",
    size: "tall", // tall, wide, normal
  },
  {
    id: 3,
    type: "photo",
    src: "https://picsum.photos/200/300",
    alt: "Pre-wedding romantic moment",
    caption: "Moment Romantis",
    size: "tall", // tall, wide, normal
  },
  {
    id: 4,
    type: "photo",
    src: "https://picsum.photos/200/300",
    alt: "Pre-wedding romantic moment",
    caption: "Moment Romantis",
    size: "normal", // tall, wide, normal
  },
  {
    id: 5,
    type: "photo",
    src: "https://picsum.photos/200/300",
    alt: "Pre-wedding romantic moment",
    caption: "Moment Romantis",
    size: "normal", // tall, wide, normal
  },
  {
    id: 6,
    type: "photo",
    src: "https://picsum.photos/200/300",
    alt: "Pre-wedding romantic moment",
    caption: "Moment Romantis",
    size: "normal", // tall, wide, normal
  },

  //   {
  //     id: 7,
  //     type: "video",
  //     src: "https://www.youtube.com/embed/G_G8SFpD79w",
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
  //     title: "Our Love Story",
  //     caption: "Kisah Kami",
  //     size: "normal",
  //   },
];

// --- Lightbox Modal Component ---
const LightboxModal = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-5xl max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "photo" ? (
          <div className="relative">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg sm:rounded-2xl shadow-2xl"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-linear-to-t from-black/70 to-transparent rounded-b-lg sm:rounded-b-2xl">
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-white text-center">
                {item.caption}
              </p>
            </div>
          </div>
        ) : (
          <div className="relative aspect-video rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`${item.src}?autoplay=1`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
};

// --- Gallery Item Component with Optimized Lazy Loading ---
const GalleryItem = ({ item, index, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer for true lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      {
        rootMargin: "100px", // Start loading 100px before entering viewport
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Dynamic grid sizing based on item size
  const sizeClasses = {
    normal: "col-span-1 row-span-1",
    tall: "col-span-1 row-span-2",
    wide: "col-span-1 sm:col-span-2 row-span-1",
  };

  const gridClass = sizeClasses[item.size] || sizeClasses.normal;

  // Staggered animation delay
  const animationDelay = `${index * 100}ms`;

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer ${gridClass}`}
      style={{ animationDelay }}
      onClick={() => onClick(item)}
    >
      {/* Image/Thumbnail Container */}
      <div className="relative w-full h-full min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
        {/* Skeleton Loading Placeholder with Shimmer */}
        <div
          className={`absolute inset-0 bg-cream-dark transition-opacity duration-500 ${
            isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Shimmer animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style={{
                transform: "translateX(-100%)",
                animation: "shimmer 1.5s infinite",
              }}
            />
          </div>

          {/* Placeholder icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/50 flex items-center justify-center">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-sage/50 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 bg-cream-dark flex items-center justify-center">
            <div className="text-center p-4">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-sage/50 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="text-xs text-sage-dark">Gagal memuat</p>
            </div>
          </div>
        )}

        {/* Actual Image - Only load when in view */}
        {isInView && !hasError && (
          <img
            src={item.type === "video" ? item.thumbnail : item.src}
            alt={item.alt || item.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              isLoaded
                ? "opacity-100 blur-0 scale-100"
                : "opacity-0 blur-sm scale-105"
            }`}
          />
        )}

        {/* Gradient Overlay - Always visible, intensifies on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

        {/* Color tint overlay on hover */}
        <div className="absolute inset-0 bg-rose-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>

        {/* Decorative corner frames */}
        <div className="absolute inset-3 sm:inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-white/50 rounded-tl"></div>
          <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-white/50 rounded-tr"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-white/50 rounded-bl"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-white/50 rounded-br"></div>
        </div>

        {/* Video Play Button */}
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulsing ring */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-white/20 animate-ping-slow"></div>

              {/* Play button */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:bg-white/40 group-hover:scale-110 transition-all duration-300 shadow-xl">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Caption & Badge */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
          {/* Type badge */}
          <div className="flex items-center gap-2 mb-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <span
              className={`inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-medium uppercase tracking-wider backdrop-blur-sm border ${
                item.type === "video"
                  ? "bg-rose/20 border-rose/30 text-white"
                  : "bg-white/20 border-white/30 text-white"
              }`}
            >
              {item.type === "video" ? (
                <>
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Video
                </>
              ) : (
                <>
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Foto
                </>
              )}
            </span>
          </div>

          {/* Caption */}
          <h3 className="font-serif text-base sm:text-lg md:text-xl text-white drop-shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
            {item.caption}
          </h3>
        </div>

        {/* Zoom icon indicator */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      </div>

      {/* Outer glow on hover */}
      <div className="absolute -inset-0.5 bg-linear-to-br from-rose/30 via-gold/20 to-sage/30 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

// --- Main Gallery Section Component ---
const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        {/* Combined Background - Single layer untuk mengurangi repaint di Android */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, #fdf8f3, #ffffff 50%, #fdf8f3),
              radial-gradient(ellipse at 90% 20%, rgba(201,169,166,0.08) 0%, transparent 40%),
              radial-gradient(ellipse at 10% 80%, rgba(201,185,150,0.08) 0%, transparent 40%),
              radial-gradient(ellipse at 33% 50%, rgba(139,157,131,0.05) 0%, transparent 40%)
            `,
            willChange: "transform",
          }}
        />

        <div className="relative w-full">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
            {/* Pre-title with decorative elements */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <span className="block w-8 sm:w-12 md:w-16 h-px bg-linear-to-r from-transparent via-gold/50 to-gold/50"></span>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-sage">
                Kenangan Indah
              </p>
              <span className="block w-8 sm:w-12 md:w-16 h-px bg-linear-to-l from-transparent via-gold/50 to-gold/50"></span>
            </div>

            {/* Main Title */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown mb-4 sm:mb-5">
              Galeri Kami
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
          </div>

          {/* Masonry Grid Gallery */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-[200px] sm:auto-rows-[240px] md:auto-rows-[280px]">
              {galleryItems.map((item, index) => (
                <GalleryItem
                  loading="lazy"
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={handleItemClick}
                />
              ))}
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className="flex items-center justify-center gap-3 mt-12 sm:mt-16 md:mt-20">
            <span className="block w-8 sm:w-12 h-px bg-linear-to-r from-transparent to-gold/40"></span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-gold/30 flex items-center justify-center shadow-md">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-rose-gold"
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
            </div>
            <span className="block w-8 sm:w-12 h-px bg-linear-to-l from-transparent to-gold/40"></span>
          </div>

          {/* Gallery count indicator */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm border border-rose/20 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-sm">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sage"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-sans text-[10px] sm:text-xs text-sage-dark">
                  {galleryItems.filter((i) => i.type === "photo").length} Foto
                </span>
              </div>
              <div className="w-px h-3 sm:h-4 bg-rose/30"></div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sage"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="font-sans text-[10px] sm:text-xs text-sage-dark">
                  {galleryItems.filter((i) => i.type === "video").length} Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </>
  );
};

export default GallerySection;
