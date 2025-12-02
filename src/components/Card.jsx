import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Card = ({ service }) => {
  const { id, serviceName, image, rating, price, slotsAvailable } = service;

  return (
    <Link
      to={`/service/${id}`}
      className="card bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden"
    >
      <div className="p-4">
        {/* Image */}
        <figure>
          <img
            className="w-full h-48 object-cover rounded-xl"
            src={image}
            alt={serviceName}
          />
        </figure>

        {/* Service info */}
        <div className="mt-3">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{serviceName}</h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">
              {rating} ({slotsAvailable} slots)
            </span>
          </div>

          {/* Price */}
          <p className="text-gray-600 mb-3">Price: ${price}</p>

          {/* View Details button */}
          <button className="w-full py-2 bg-gradient-to-r from-pink-400 to-orange-300 text-white font-semibold rounded-lg hover:opacity-90 transition">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
