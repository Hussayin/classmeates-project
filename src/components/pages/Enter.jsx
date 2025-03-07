import Classmeates from "./Classmeates";
import { Corusel } from "./Corusel";
import FullscreenCarousel from "./Corusel2";
import Navbar from "./Navbar";

const Enter = () => {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <FullscreenCarousel />
      {/* <Corusel /> */}
      <Classmeates />
    </div>
  );
};

export default Enter;
