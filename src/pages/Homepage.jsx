import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import ExpertVets from "../components/ExpertVets";
import { servicesData, tipsData } from "../data/fakeData";


const HomePage = () => {
  return (
    <div className="space-y-20">

      {/* 1️⃣ Hero Slider / Banner */}
      <section>
        <Banner />
      </section>

      {/* 2️⃣ Popular Winter Care Services */}
      <section className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Winter Care Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 3️⃣ Winter Care Tips */}
      <section className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Winter Care Tips for Pets</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tipsData.map((tip, idx) => (
            <div key={idx} className="bg-white/10 p-5 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-white/90">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4️⃣ Meet Our Expert Vets */}
      <section className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Expert Vets</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <ExpertVets />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
