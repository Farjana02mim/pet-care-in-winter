// ExtraSection.jsx
import React from "react";

const accessoriesData = [
  {
    id: 1,
    name: "Cozy Dog Sweater",
    image: "https://i.postimg.cc/example-sweater.png",
    price: 20,
  },
  {
    id: 2,
    name: "Warm Cat Hoodie",
    image: "https://i.postimg.cc/example-hoodie.png",
    price: 18,
  },
  {
    id: 3,
    name: "Furry Boots for Dogs",
    image: "https://i.postimg.cc/example-boots.png",
    price: 15,
  },
];

const ExtraSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-500">
          Winter Pet Accessories ❄️
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {accessoriesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition-transform"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-gray-700 font-medium">Price: ${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
