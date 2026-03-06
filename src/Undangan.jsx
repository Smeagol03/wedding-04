import React, { Suspense, lazy } from "react";
import Pembuka from "./undangan/Pembuka";
import { UndanganProvider, MusicControl } from "./undangan/Tombolbuka";

// Lazy load below-the-fold components
const Acara = lazy(() => import("./undangan/Acara"));
const GallerySection = lazy(() => import("./undangan/Gallery"));
const RsvpSection = lazy(() => import("./undangan/RsvpSection"));
const Hadiah = lazy(() => import("./undangan/Hadiah"));
const Komentar = lazy(() => import("./undangan/Komentar"));
const Penutup = lazy(() => import("./undangan/Penutup"));
const Footer = lazy(() => import("./undangan/Footer"));

// Fallback skeleton loader while components are downloading
const SectionLoader = () => (
  <div className="w-full flex justify-center py-20 bg-cream">
    <div className="w-8 h-8 rounded-full border-4 border-sage/30 border-t-sage animate-spin"></div>
  </div>
);

const Undangan = () => {
  return (
    <UndanganProvider>
      <Pembuka />

      <Suspense fallback={<SectionLoader />}>
        <Acara />
        <GallerySection />
        <RsvpSection />
        <Hadiah />
        <Komentar />
        <Penutup />
        <Footer />
      </Suspense>

      <MusicControl />
    </UndanganProvider>
  );
};

export default Undangan;
