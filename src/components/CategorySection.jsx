import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTshirt, FaShoePrints, FaHatCowboy } from "react-icons/fa"; // Icons

gsap.registerPlugin(ScrollTrigger);

const CategorySection = () => {
  const categoryRef = useRef([]);

  useEffect(() => {
    categoryRef.current.forEach((category) => {
      gsap.from(category, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: category,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section
      id="category-section"
      className="py-16 px-6 bg-white" // You can use bg-[#f9f9f9] or bg-[#088178] here for full-section color
    >
      <section className="py-20 bg-gray-100" id="categories">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-[#088178]">
            Browse Our Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Clothes */}
            <div
              ref={(el) => (categoryRef.current[0] = el)}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300"
            >
              <div className="text-4xl text-[#088178] mb-6">
                <FaTshirt />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Clothes</h3>
              <p className="text-lg mb-4">
                Browse a variety of stylish clothes for all occasions.
              </p>
              <button
                style={{
                  background: "linear-gradient(to right, #088178, #065f58)",
                }}
                className="text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Explore
              </button>
            </div>

            {/* Shoes */}
            <div
              ref={(el) => (categoryRef.current[1] = el)}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300"
            >
              <div className="text-4xl text-[#088178] mb-6">
                <FaShoePrints />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Shoes</h3>
              <p className="text-lg mb-4">
                Find the perfect pair of shoes to match any outfit.
              </p>
              <button
                style={{
                  background: "linear-gradient(to right, #088178, #065f58)",
                }}
                className="text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Explore
              </button>
            </div>

            {/* Accessories */}
            <div
              ref={(el) => (categoryRef.current[2] = el)}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300"
            >
              <div className="text-4xl text-[#088178] mb-6">
                <FaHatCowboy />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Accessories</h3>
              <p className="text-lg mb-4">
                Complete your look with our premium accessories.
              </p>
              <button
                style={{
                  background: "linear-gradient(to right, #088178, #065f58)",
                }}
                className="text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CategorySection;
