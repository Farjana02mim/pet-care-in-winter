import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import ExpertVets from "../components/ExpertVets";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch JSON data from public folder or src/data
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

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
          {services.map((service) => (
            <Card key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 3️⃣ Winter Care Tips */}
      <section className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Winter Care Tips for Pets</h2>
        {/* You can add tips JSON mapping here if needed */}
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
