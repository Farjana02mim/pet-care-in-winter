import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import HomeExtras from "../components/HomeExtras"; // Tips + Experts
import { tipsData } from "../data/fakeData";
import ExtraSection from "./ExtraSection";

const HomePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to load services:", err));
  }, []);

  return (
    <div className="space-y-20">

      {/* Hero Banner */}
      <section>
        <Banner />
      </section>

      {/* Popular Services */}
      <section className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Winter Care Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.serviceId} service={service} />
          ))}
        </div>
      </section>

      {/* Winter Care Tips */}
      <section className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Winter Care Tips for Pets</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tipsData.map((tip, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Vets */}
      <section className="w-11/12 mx-auto">
        <HomeExtras />
      </section>
      {/* Extra Section */}
      <section className="w-11/12 mx-auto">
        <ExtraSection />
      </section>
    </div>
  );
};

export default HomePage;
