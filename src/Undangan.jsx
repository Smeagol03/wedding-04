import Pembuka from "./undangan/Pembuka";
import Acara from "./undangan/Acara";
import OurStorySection from "./undangan/Story";
import GallerySection from "./undangan/Gallery";
import RsvpSection from "./undangan/RsvpSection";
import Hadiah from "./undangan/Hadiah";
import { UndanganProvider, MusicControl } from "./undangan/Tombolbuka";

const Undangan = () => {
  return (
    <UndanganProvider>
      <Pembuka />
      <Acara />
      <OurStorySection />
      <GallerySection />
      <RsvpSection />
      <Hadiah />
      <MusicControl />
    </UndanganProvider>
  );
};

export default Undangan;
