import React, { useRef } from 'react';
import './category.css'
import img1 from '../../assets/categoryImg/Coffee.png';
import img2 from '../../assets/categoryImg/Burgers.jpg';
import img3 from '../../assets/categoryImg/Penne Arrabiata.jpg';
import img4 from '../../assets/categoryImg/Pesto alla Genovese.jpg';
import img5 from '../../assets/categoryImg/Ricetta Ravioli di Patate.jpg';
import img6 from '../../assets/categoryImg/Spaghetti Bolognese.jpg';
import Burgers from '../subcaterogies/Burgers.jsx';

const Category = () => {
  // Refs for each category section
  const burgersRef = useRef(null);
  // const penneRef = useRef(null);
  // const pestoRef = useRef(null);
  // const ravioliRef = useRef(null);
  // const spaghettiRef = useRef(null);

  // Function to handle category click and scroll to the specific section
  const scrollToCategory = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const categories = [
    'Beverages',
    'Burgers',
    'Penne Arrabiata',
    'Pesto alla Genovese',
    'Ricetta Ravioli di Patate',
    'Spaghetti Bolognese',
    'Beverages',
    'Burgers',
    'Penne Arrabiata',
    'Pesto alla Genovese',
    'Ricetta Ravioli di Patate',
    'Spaghetti Bolognese',
  ];

  const images = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6];

  return (
    <div className="relative w-full pt-10">
      <div className="main-box w-[95%] mx-auto h-auto bg-white rounded-xl p-6">
        <h1 className="explore mb-4 text-xl font-semibold text-gray-700">Explore Categories</h1>
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center group cursor-pointer"
              onClick={() => {
                if (index === 1) scrollToCategory(burgersRef); // If Burgers is clicked, scroll to the Burgers section
              }}
            >
              {/* Category Image */}
              <img
                src={img}
                alt={categories[index]}
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Transparent overlay */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:bg-gradient-to-t group-hover:from-gray-900 group-hover:via-gray-800 group-hover:to-black group-hover:opacity-60 transition duration-300"></div>

              {/* Category Name as H1 */}
              <h1 className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10 group-hover:scale-105 transition-all duration-300 ease-in-out group-hover:bottom-5">
                {categories[index]}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Burger Section */}
      <div ref={burgersRef}>
        <Burgers />
      </div>
    </div>
  );
};

export default Category;
