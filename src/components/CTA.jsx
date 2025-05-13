import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.from(ctaRef.current, {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      className="bg-gradient-to-r from-pink-500 via-[#088178] to-purple-600 text-white py-16 px-6 text-center rounded-t-3xl"
      ref={ctaRef}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Rent Your Next Look?
      </h2>
      <p className="text-lg mb-8">
        Sign up now and get exclusive offers on premium rentals.
      </p>

      <Link to="/signup">
        <button
          className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#088178] hover:border-[#088178] hover:text-white transition-all duration-300 border-2 border-transparent"
        >
          Get Started <FaArrowRight className="inline ml-2" />
        </button>
      </Link>
    </section>
  );
};

export default CTA;
