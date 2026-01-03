'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import one from "@/public/assets/casousel/one.webp";
import three from "@/public/assets/casousel/three.webp";

const initialImages = [
  { src: one, caption: "First Image Caption", description: 'lorem1 ipsum' },
  { src: three, caption: "Second Image Caption",description: 'lorem1 ipsum' },
  { src: one, caption: "Third Image Caption",description: 'lorem1 ipsum' },
  { src: three, caption: "Fourth Image Caption",description: 'lorem1 ipsum' },
];

export default function CustomCarousel() {
  const [images, setImages] = useState(initialImages);
  const [direction, setDirection] = useState(0);

  const prevSlide = () => {
    setDirection(-1);
    // Move last image to front
    const newImages = [...images];
    const last = newImages.pop();
    newImages.unshift(last);
    setImages(newImages);
  };

  const nextSlide = () => {
    setDirection(1);
    // Move first image to end
    const newImages = [...images];
    const first = newImages.shift();
    newImages.push(first);
    setImages(newImages);
  };

  // Animation variants for main slide
  const mainSlideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
        scale: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.3, ease: [0.4, 0, 1, 1] },
        scale: { duration: 0.3, ease: [0.4, 0, 1, 1] }
      }
    })
  };

  // Animation variants for side preview slides
  const sideSlideVariants = {
    enter: {
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  // Caption animation variants
  const captionVariants = {
    enter: {
      opacity: 0,
      y: 30
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 mb-10">
      {/* Carousel Container */}
      <div className="flex h-96 gap-2 justify-center">
        {/* Main image */}
        <motion.div
          className="flex-shrink-0 w-4/5 relative rounded-lg overflow-hidden shadow-lg"
          variants={mainSlideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
          key={`main-${images[0].caption}`}
        >
          <motion.img
            src={images[0].src.src}
            alt="Main Slide"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.div
            className="absolute bottom-2 left-2 text-white px-2 py-1 rounded"
            variants={captionVariants}
            initial="enter"
            animate="center"
            key={`caption-${images[0].caption}`}
          >
            <p className="text-lg">{images[0].caption}</p>
            <p className="text-sm">{images[0].description}</p>
          </motion.div>
        </motion.div>

        {/* Side previews (2 images) */}
        <div className="flex flex-shrink-0 w-2/5 gap-2">
          {images[1] && (
            <motion.div
              className="rounded-lg overflow-hidden shadow-md relative"
              variants={sideSlideVariants}
              initial="enter"
              animate="center"
              key={`side1-${images[1].caption}`}
              transition={{ delay: 0.1 }}
            >
              <img
                src={images[1].src.src}
                alt="Side preview 1"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute bottom-1 left-1 text-white text-xs px-1 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {images[1].caption}
              </motion.div>
            </motion.div>
          )}
          {images[2] && (
            <motion.div
              className="rounded-lg overflow-hidden shadow-md relative"
              variants={sideSlideVariants}
              initial="enter"
              animate="center"
              key={`side2-${images[2].caption}`}
              transition={{ delay: 0.2 }}
            >
              <img
                src={images[2].src.src}
                alt="Side preview 2"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute bottom-1 left-1 text-white text-xs px-1 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {images[2].caption}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Arrows at bottom */}
      <div className="flex justify-center gap-4 mt-4">
        <motion.button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <ArrowLeft size={20} />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </div>
  );
}
