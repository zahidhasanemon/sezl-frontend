'use client'
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import one from "@/public/assets/casousel/one.webp";
import three from "@/public/assets/casousel/three.webp";

const initialImages = [
  { src: one, caption: "Continuous GDP Growth", description: 'Sirajganj Economic Zone Limited (SEZL) is at the forefront of industrial development, offering a strategic gateway for businesses to thrive.' },
  { src: three, caption: "Second Image Caption", description: 'We provide a comprehensive ecosystem designed to foster innovation, attract investment, and support sustainable growth for our partners.' },
  { src: one, caption: "Third Image Caption", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make' },
  { src: three, caption: "Fourth Image Caption", description: 'when an unknown printer took a galley of type and scrambled it to make' },
];

export default function CustomCarousel() {
  const [images, setImages] = useState(initialImages);
  const [direction, setDirection] = useState(0);
  const sliderRef = useRef(null);
  const sliderInView = useInView(sliderRef, { once: true });

  const prevSlide = () => {
    setDirection(-1);
    const newImages = [...images];
    const last = newImages.pop();
    newImages.unshift(last);
    setImages(newImages);
  };

  const nextSlide = () => {
    setDirection(1);
    const newImages = [...images];
    const first = newImages.shift();
    newImages.push(first);
    setImages(newImages);
  };

  // Sliding animation variants for main slide
  const mainSlideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1,
      zIndex: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1,
      zIndex: 0,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.2 }
      }
    })
  };

  // Sliding animation for side previews
  const sideSlideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 1
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.2 }
      }
    })
  };

  // Caption sliding animation
  const captionVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };

  return (
    <motion.div
      ref={sliderRef}
      className="w-full px-10 mx-auto mt-10 mb-10"
      initial={{ opacity: 0, y: 50 }}
      animate={sliderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Carousel Container */}
      <motion.div
        className="flex h-96 lg:h-165  gap-2 justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={sliderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Main image */}
        <div className="shrink-0 w-full lg:w-3/4 relative rounded-lg overflow-hidden shadow-lg">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`main-${images[0].caption}`}
              custom={direction}
              variants={mainSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[0].src}
                alt="Main Slide"
                fill
                className="object-cover"
                priority
              />
              <motion.div
                className="absolute bottom-2 mx-2 lg:mx-8 text-white px-4 py-1 rounded bg-black/50"
                custom={direction}
                variants={captionVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <p className="text-lg font-semibold">{images[0].caption}</p>
                <p className="text-sm">{images[0].description}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side previews (2 images) */}
        <div className="hidden lg:flex shrink-0 w-1/4 gap-2">
          {images[1] && (
            <div className="rounded-lg overflow-hidden shadow-md relative flex-1">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={`side1-${images[1].caption}`}
                  custom={direction}
                  variants={sideSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={images[1].src}
                    alt="Side preview 1"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )}
          {images[2] && (
            <div className="rounded-lg overflow-hidden shadow-md relative flex-1">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={`side2-${images[2].caption}`}
                  custom={direction}
                  variants={sideSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={images[2].src}
                    alt="Side preview 2"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.div>

      {/* Arrows at bottom */}
      <motion.div
        className="flex justify-center gap-4 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={sliderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
        >
          <ArrowLeft size={20} />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
        >
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}