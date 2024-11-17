import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/bgVideo1.mp4";
import "./hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

      {/* Center Content */}
      <div className="center-part relative z-10 flex flex-col top-40 items-center space-y-10">
        {/* Buttons */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#e6ffe6] bg-opacity-70 p-4 rounded-lg text-center text-black shadow-lg h-28 w-3/4 md:w-1/2 lg:w-1/3"
          onClick={() => navigate('/menu')}
          aria-label="View Menu"
        >
          <h2 className="text-2xl font-bold">Menu</h2>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#e6ffe6] bg-opacity-70 p-4 rounded-lg text-center text-black shadow-lg h-28 w-3/4 md:w-1/2 lg:w-1/3"
          onClick={() => handleScroll("gallery-section")}
          aria-label="View Gallery"
        >
          <h2 className="text-2xl font-bold">Gallery</h2>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-[#e6ffe6] bg-opacity-70 p-4 rounded-lg text-center text-black shadow-lg h-28 w-3/4 md:w-1/2 lg:w-1/3"
          onClick={() => handleScroll("contact-section")}
          aria-label="View Contact"
        >
          <h2 className="text-2xl font-bold">Contact</h2>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
