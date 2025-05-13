import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/hero.jpg"; // Add an Unsplash image as hero.jpg in assets

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-2xl px-8 py-10 rounded-3xl text-center max-w-3xl transition-all duration-500">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-md text-white">
          Rent the Look. <br /> Return the Hassle. <br /> By Smart Shopping Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 tracking-wide">
          Clothes, Shoes & More Delivered to Your Door.
        </p>
        <button
          style={{
            background: "linear-gradient(to right, #088178, #065f58)",
          }}
          className="text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Explore Now <FaArrowRight className="inline ml-2" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
