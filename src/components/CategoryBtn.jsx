import React from "react";

let category_item = [
  {
    id: 1,
    name: "mobile",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsfj00_jxjB0Wt7iY-X2EwVeEFC7eFl-wHQ&s",
  },
  {
    id: 2,
    name: "Furniture",
    img: "https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=BSBGae3sdyCHLH911Iv3mplZFoCbjq22ryBMqGpC5Rk=",
  },
  {
    id: 3,
    name: "Watches",
    img: "https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw66fe4c98/images/Titan/Catalog/90188AP06_1.jpg",
  },
  {
    id: 4,
    name:"Electronic",
    img:"https://www.jiomart.com/images/product/original/492664431/lg-7-kg-front-load-fully-automatic-washing-machine-with-smart-diagnosis-system-fhm1207sdl-digital-o492664431-p591053947-0-202202221324.jpeg?im=Resize=(420,420)"
  },
  {
     id:5,
     name:"Fashion",
     img:"https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-with-curly-hairstyle-sexy-man-dressed-jeans-jacket-fashion-male-isolated-white-wall-studio_158538-26608.jpg?semt=ais_hybrid&w=740&q=80"
  },
    {
    id: 3,
    name: "Watches",
    img: "https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw66fe4c98/images/Titan/Catalog/90188AP06_1.jpg",
  },
  
];


const TopCategories = () => {
  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Shop From <span className="text-sky-600">Top Categories</span>
          </h2>
          <button className="text-sky-600 text-sm font-medium hover:underline">
            View All →
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-between gap-6">
          {category_item.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="md:w-20 h-20 p-3 rounded-full border border-sky-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <p className="mt-3 text-sm text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
