'use client'
import { useState } from "react";
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

  const prevSlide = () => {
    // Move last image to front
    const newImages = [...images];
    const last = newImages.pop();
    newImages.unshift(last);
    setImages(newImages);
  };

  const nextSlide = () => {
    // Move first image to end
    const newImages = [...images];
    const first = newImages.shift();
    newImages.push(first);
    setImages(newImages);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 mb-10">
      {/* Carousel Container */}
      <div className="flex h-96 gap-2">
        {/* Main image */}
        <div className="flex-shrink-0 w-4/5 relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={images[0].src.src} // main image is always first in array
            alt="Main Slide"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 text-white px-2 py-1 rounded">
            <p className="text-lg">{images[0].caption}</p>
            <p className="text-sm">{images[1].description}</p>
          </div>
        </div>

        {/* Side previews (2 images) */}
        <div className="flex flex-shrink-0 w-2/5 gap-2">
          {images[1] && (
            <div className="rounded-lg overflow-hidden shadow-md relative">
              <img
                src={images[1].src.src}
                alt="Side preview 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-1 left-1 text-white text-xs px-1 rounded">
                {images[1].caption}
              </div>
            </div>
          )}
          {images[2] && (
            <div className="rounded-lg overflow-hidden shadow-md relative">
              <img
                src={images[2].src.src}
                alt="Side preview 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-1 left-1 text-white text-xs px-1 rounded">
                {images[2].caption}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Arrows at bottom */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
