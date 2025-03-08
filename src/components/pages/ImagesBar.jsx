import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiDelete } from "react-icons/ti";

const images = [
  "https://classmeats-uz.netlify.app/all/LIFE0592.webp",
  "https://classmeats-uz.netlify.app/all/LIFE0673.webp",
  "https://classmeats-uz.netlify.app/all/LIFE0689.webp",
  "https://classmeats-uz.netlify.app/all/LIFE0898.webp",
  "https://classmeats-uz.netlify.app/all/LIFE9967.webp",
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div id="alboms" className=" mt-[20px] mb-[100px] ">
      <h1 className=" text-[30px] font-nunito text-center ">Good days</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Image ${index}`}
            className="w-full cursor-pointer rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative bg-white p-2 rounded-lg shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <TiDelete size={24} />
                </button>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-w-[90vw] max-h-[80vh] rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
