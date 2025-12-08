import Pembuka from "./undangan/Pembuka";
import Acara from "./undangan/Acara";
import OurStorySection from "./undangan/Story";
import GallerySection from "./undangan/Gallery";
import { UndanganProvider, MusicControl } from "./undangan/Tombolbuka";

const Undangan = () => {
  return (
    <UndanganProvider>
      <Pembuka />
      <Acara />
      <OurStorySection />
      <GallerySection />
      <MusicControl />
    </UndanganProvider>
  );
};

export default Undangan;
