import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaSearch, FaShoppingBag, FaTshirt, FaUndo } from "react-icons/fa";

const HowItWorks = () => {
  const stepsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(stepsRef.current, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const steps = [
    {
      icon: <FaSearch />,
      title: "Browse",
      description: "Explore a wide range of clothes, shoes, and accessories.",
    },
    {
      icon: <FaShoppingBag />,
      title: "Rent",
      description: "Choose what you love and rent it for a desired duration.",
    },
    {
      icon: <FaTshirt />,
      title: "Wear",
      description: "Rock the outfit at your event, party, or daily outing.",
    },
    {
      icon: <FaUndo />,
      title: "Return",
      description: "Pack and return it hassle-free — we handle the rest!",
    },
  ];

  const handleScrollToCategories = () => {
    const categorySection = document.getElementById("category-section");
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">How It Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepsRef.current[index] = el)}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 opacity-0 translate-y-10"
          >
            <div
              style={{ backgroundColor: "#088178", color: "white" }}
              className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold"
            >
              {index + 1}
            </div>

            <div className="text-4xl mb-4" style={{ color: "#088178" }}>
              {step.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={handleScrollToCategories}
        style={{ backgroundColor: "#088178" }}
        className="mt-12 text-white px-8 py-3 rounded-full font-semibold text-lg hover:brightness-110 transition-all duration-300"
      >
        Start Renting Now
      </button>
    </section>
  );
};

export default HowItWorks;
