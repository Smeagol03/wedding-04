import Pembuka from "./undangan/Pembuka";
import Acara from "./undangan/Acara";
import { UndanganProvider, MusicControl } from "./undangan/Tombolbuka";

const Undangan = () => {
  return (
    <UndanganProvider>
      <Pembuka />
      <Acara />
      <MusicControl />
    </UndanganProvider>
  );
};

export default Undangan;
