import Classmeates from "./Classmeates";
import { Corusel } from "./Corusel";
import { Corusel2 } from "./Corusel2";
import Navbar from "./Navbar";

const Enter = () => {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Corusel />
      <Corusel2 />
      <Classmeates />
    </div>
  );
};

export default Enter;
