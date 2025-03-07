import React from "react";
import { useState } from "react";

//! icons
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { motion } from "framer-motion";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdSell } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* navbar */}
      <div className=" z-[1000000000000000] fixed top-0 border-b-[2px] border-solid dark:border-black rounded-b-[15px] bg-[black] dark:bg-white  md:text-white dark:text-black flex justify-between py-[20px] items-center w-[100%] border-white px-[25px] md:px-[40px]  m-auto ">
        <div>
          <h1 className=" font-kanit text-[22px] ">11-A classmeats</h1>
        </div>
        {/* laptop */}
        <div className=" md:flex hidden justify-center items-center gap-[65px] ">
          <div className="text-[20px] font-kanit flex justify-center items-center gap-[35px] ">
            <a className=" hover:text-red-500 duration-300 " href="#">
              Home
            </a>
            <a className=" hover:text-red-500 duration-300 " href="#">
              About
            </a>
            <a className=" hover:text-red-500 duration-300 " href="#">
              Servis
            </a>
            <a className=" hover:text-red-500 duration-300 " href="#">
              Contact
            </a>
          </div>
          <div className=" flex justify-center items-center gap-[15px] text-[15px]">
            <div className=" bg-red-600 dark:text-white py-[7px] px-[15px] rounded-lg md:hover:bg-red-800 cursor-pointer duration-300 flex justify-center items-center gap-[5px] ">
              <TbPhoneCall />
              <h1>Cantact</h1>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden z-[100] flex justify-center items-center gap-[20px]">
          <div className="md:hidden z-[100] text-[30px] block">
            {!open && <HiMenuAlt3 onClick={() => setOpen(true)} />}
          </div>
        </div>
        {/*  */}
        {open && (
          <div className=" fixed z-[1000000000000] top-[0px] p-[25px]  bg-[#1d1d1d] dark:bg-white  left-0 w-[100%] h-[100%] overflow-scroll m-auto right-0  md:hidden ">
            <div className=" w-[100%] flex justify-center items-center ">
              {open && (
                <IoClose
                  className=" text-center text-[40px] "
                  onClick={() => setOpen(false)}
                />
              )}
            </div>
            {/* Social medi and servise */}
            <div className=" flex justify-center mt-[30px] items-center flex-col gap-[20px]">
              <Link to="/game">Go to game</Link>
              {/* <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.2,
                }}
                target="_blank"
                href="https://t.me/the_watch_outlet_bot"
                className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-nunito text-[20px] border-white w-[100%] "
              >
                Telegram Mini app
                <BsTelegram className=" absolute left-[15px] text-[30px]  " />
              </motion.a> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
