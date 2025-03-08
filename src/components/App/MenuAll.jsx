import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const MenuAll = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeOut", // Easing funksiyasi
        duration: 0.4, // Animatsiya davomiyligi
        delay: 0.1,
      }}
      className=" font-bold bg-[#000000] border-[white] border-t-[3px] rounded-t-[17px] p-[12px] pb-[17px] fixed bottom-0 w-[100%] dark:text-white gap-[25px] z-[10000000000] flex items-center text-center"
    >
      {/* top watchs */}
      <a
        href="#alboms"
        className="w-[100%] border-[1px] border-white rounded-[7px] py-[7px] "
      >
        <h1>Alboms</h1>
      </a>
      {/* All watches */}
      <div
        to="/AllWatches"
        className="w-[100%] border-[1px] border-white rounded-[7px] py-[7px]"
      >
        <h1>Vidoes</h1>
      </div>
      {/* basket */}
      <a href="https://www.instagram.com/khusko1">
        <h1>
          <FaInstagram className="text-[35px]" />
        </h1>
      </a>
    </motion.div>
  );
};

export default MenuAll;
