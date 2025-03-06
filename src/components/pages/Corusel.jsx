import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
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

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const Corusel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className="  relative1 mt-[5px] overflow-hidden md:h-[60vh] h-[240px] md:mx-[70px] "
    >
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab h-[100%] items-start active:cursor-grabbing object-fill "
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      {/* <GradientEdges /> */}
    </motion.div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-[100%] h-[100%] shrink-0 border-2 border-#1d1d1d rounded-xl bg-[#1d1d1d] "
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className=" flex w-full justify-center gap-2 m-0 p-0">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-[9px] w-[9px] rounded-full  transition-colors ${
              idx === imgIndex ? "bg-[#1d1d1d]" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};
