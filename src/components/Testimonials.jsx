import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Aisha Khan",
    review:
      "Absolutely loved the experience! The clothes were premium and delivery was quick.",
    rating: 5,
    img: "https://source.unsplash.com/100x100/?woman,face",
  },
  {
    name: "Rahul Mehta",
    review:
      "Rented shoes for a wedding and they looked brand new. Hassle-free return too!",
    rating: 4,
    img: "https://source.unsplash.com/100x100/?man,portrait",
  },
  {
    name: "Sneha Verma",
    review:
      "Great service and amazing collection! Will definitely rent again.",
    rating: 5,
    img: "https://source.unsplash.com/100x100/?girl,profile",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="bg-white py-16 px-4" ref={containerRef}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        What Our Customers Say
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold mb-2">{t.name}</h4>
            <p className="text-gray-600 mb-4 italic">"{t.review}"</p>
            <div className="flex justify-center text-pink-500">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
