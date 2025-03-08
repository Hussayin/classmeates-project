import MenuAll from "../App/MenuAll";
import Classmeates from "./Classmeates";
import FullscreenCarousel from "./Corusel2";
import { Example } from "./HoverAnime";
import ImageGallery from "./ImagesBar";
import Navbar from "./Navbar";

const Enter = () => {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <FullscreenCarousel />
      <Example />
      <Classmeates />
      <ImageGallery />
      <MenuAll />
    </div>
  );
};

export default Enter;
