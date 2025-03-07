import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://classmeats-uz.netlify.app/mans-down/zuxra.webp",
  "https://classmeats-uz.netlify.app/mans-down/bobur.webp",
  "https://classmeats-uz.netlify.app/mans-down/shaydo.webp",
  "https://classmeats-uz.netlify.app/mans-down/hasan.webp",
  "https://classmeats-uz.netlify.app/mans-down/sevinchoy.webp",
  "https://classmeats-uz.netlify.app/mans-down/bobomurod.webp",
  "https://classmeats-uz.netlify.app/mans-down/sevinch.webp",
  "https://classmeats-uz.netlify.app/mans-down/anvar.webp",
  "https://classmeats-uz.netlify.app/mans-down/sarvinoz.webp",
  "https://classmeats-uz.netlify.app/mans-down/abdulloh.webp",
  "https://classmeats-uz.netlify.app/mans-down/nozima.webp",
  "https://classmeats-uz.netlify.app/mans-down/abdullaziz.webp",
  "https://classmeats-uz.netlify.app/mans-down/diyono.webp",
  "https://classmeats-uz.netlify.app/mans-down/malika.webp",
  "https://classmeats-uz.netlify.app/mans-down/dilnura.webp",
  "https://classmeats-uz.netlify.app/mans-down/asaloy.webp",
];

const FullscreenCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Har 3 sekundda almashadi
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-[95vh] overflow-hidden mt-[50px] relative">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="carousel"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <a
        href="#classmeates"
        className=" absolute bottom-[100px] z-[10000000000000000000] flex justify-center items-center w-[100%] "
      >
        <h1 className=" bg-[#000000ca] text-[25px] px-[25px] py-[10px] rounded-2xl  ">
          Scroll down
        </h1>
      </a>
    </div>
  );
};

export default FullscreenCarousel;
