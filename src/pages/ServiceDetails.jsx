import React, { useContext, useState, useEffect } from "react";
import { useParams, Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); 
  const location = useLocation();
  const [service, setService] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });

  
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.serviceId === parseInt(id));
        setService(found);
      })
      .catch((err) => console.error("Failed to load services:", err));
  }, [id]);

  
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (!service) return <p className="text-center mt-10">Service not found!</p>;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking successful!");
    setForm({ name: "", email: "" });
  };

  return (
    <div className="min-h-screen py-10 px-4 md:px-10 bg-gradient-to-br from-[#FFF5EB] via-[#FCE7F3] to-[#F3F4F6]">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden">
        <div className="md:flex">
          
          <div className="md:w-1/2">
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="md:w-1/2 p-8 space-y-4">
            <h2 className="text-3xl font-bold text-pink-600">{service.serviceName}</h2>
            <p className="text-gray-700">{service.description}</p>

            <div className="grid grid-cols-2 gap-3 text-gray-700 mt-4">
              <p><strong>Provider:</strong> {service.providerName}</p>
              <p><strong>Email:</strong> {service.providerEmail}</p>
              <p><strong>Price:</strong> ${service.price}</p>
              <p><strong>Rating:</strong> {service.rating}</p>
              <p><strong>Slots:</strong> {service.slotsAvailable}</p>
              <p><strong>Category:</strong> {service.category}</p>
            </div>

            
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-pink-600">Book This Service</h3>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="input input-bordered w-full bg-white/80 focus:ring-2 focus:ring-pink-300 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="input input-bordered w-full bg-white/80 focus:ring-2 focus:ring-pink-300 rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-orange-300 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
