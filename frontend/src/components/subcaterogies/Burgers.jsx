import React from "react"
import img1 from "../../assets/subcategoryImg/veg-classic-burger.png"
import img2 from "../../assets/subcategoryImg/vegan-beet-burger.jpg"
import img3 from "../../assets/subcategoryImg/double-cheese-burger.jpg"
import img4 from "../../assets/subcategoryImg/classic-chicken-burger.png"
import img5 from "../../assets/subcategoryImg/Crispy-Chicken-Burger.jpg"
import img6 from "../../assets/subcategoryImg/Bacon-Chicken-Burger.jpg"

const Burgers = () => {
  const subcategoriesVeg = ["Classic Veg", "Root Venice", "Double Cheese"]
  const subcategoriesNonVeg = ["Classic Chicken", "Crispy Chicken", "Chicken Bacon"]
  const imagesVeg = [img1, img2, img3]
  const imagesNonVeg = [img4, img5, img6]

  return (
    <div className="relative w-full pt-5">
      <div className="main-box w-[95%] mx-auto h-auto bg-white rounded-xl p-6">
        <div className="explore flex justify-between items-center">
          <h1 className="curved-underline mb-6 text-xl font-semibold text-gray-700">
            Burgers
          </h1>
          <h1 className="mb-1 mr-2 text-green-600 flex items-center">
            <span className="mr-2 w-2.5 h-2.5 bg-green-600 rounded-full"></span>{" "}
            Veg
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {imagesVeg.map((img, index) => (
              <div
              key={index}
              className="relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center group"
              >
              <img
                src={img}
                alt={subcategoriesVeg[index]}
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:bg-gradient-to-t group-hover:from-gray-900 group-hover:via-gray-800 group-hover:to-black group-hover:opacity-60 transition duration-300"></div>

              <h1 className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10 group-hover:scale-105 transition-all duration-300 ease-in-out group-hover:bottom-5">
                {subcategoriesVeg[index]}
              </h1>
            </div>
          ))}
        </div>
        <div className="explore flex justify-end mt-5 items-center">
          <h1 className="mb-4 mr-2 text-red-600 flex items-center">
            <span className="mr-2 w-2.5 h-2.5 bg-red-600 rounded-full"></span>{" "}
            Non-Veg
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {imagesNonVeg.map((img, index) => (
              <div
              key={index}
              className="relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center group"
              >
              <img
                src={img}
                alt={subcategoriesNonVeg[index]}
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:bg-gradient-to-t group-hover:from-gray-900 group-hover:via-gray-800 group-hover:to-black group-hover:opacity-60 transition duration-300"></div>

              <h1 className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10 group-hover:scale-105 transition-all duration-300 ease-in-out group-hover:bottom-5">
                {subcategoriesNonVeg[index]}
              </h1>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Burgers
