import Pembuka from "./undangan/Pembuka";
import Acara from "./undangan/Acara";
import OurStorySection from "./undangan/Story";
import { UndanganProvider, MusicControl } from "./undangan/Tombolbuka";

const Undangan = () => {
  return (
    <UndanganProvider>
      <Pembuka />
      <Acara />
      <OurStorySection />
      <MusicControl />
    </UndanganProvider>
  );
};

export default Undangan;
