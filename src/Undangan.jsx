import React from "react";
import Pembuka from "./undangan/Pembuka";
import { UndanganProvider, MusicControl } from "./undangan/Tombolbuka";

// Static imports avoid unpredictable Suspense waterfalls on scroll
import Acara from "./undangan/Acara";
import GallerySection from "./undangan/Gallery";
import StorySection from "./undangan/Story";
import RsvpSection from "./undangan/RsvpSection";
import Hadiah from "./undangan/Hadiah";
import Komentar from "./undangan/Komentar";
import Penutup from "./undangan/Penutup";
import Footer from "./undangan/Footer";

const Undangan = () => {
  return (
    <UndanganProvider>
      <Pembuka />

      <Acara />
      <GallerySection />
      <StorySection />
      <RsvpSection />
      <Hadiah />
      <Komentar />
      <Penutup />
      <Footer />

      <MusicControl />
    </UndanganProvider>
  );
};

export default Undangan;
