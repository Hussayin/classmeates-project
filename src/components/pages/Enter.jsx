import Classmeates from "./Classmeates";
import { Corusel } from "./Corusel";
import FullscreenCarousel from "./Corusel2";
import { Example } from "./HoverAnime";
import Navbar from "./Navbar";

const Enter = () => {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <FullscreenCarousel />
      <Example />
      {/* <Corusel /> */}
      <Classmeates />
    </div>
  );
};

export default Enter;
