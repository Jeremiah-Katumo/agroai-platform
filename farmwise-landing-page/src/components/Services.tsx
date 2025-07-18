// components/Services.tsx
import React from "react";
import ServiceCard from "./cards/ServiceCard";
import { FreshVegetableIcon, MowingIcon, PlantingIcon, SeedingIcon, VegetableSell, WateringIcon } from "./icons/ServiceIcons";

const services = [
  { 
    number: "01", 
    heading: "Planting", 
    description: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
    svg: PlantingIcon
},
  { number: "02", heading: "Mulching", description: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie" },
  { number: "03", heading: "Plowing", description: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie" },
  {
    number: "04",
    heading: "Mowing",
    description: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
    svg: MowingIcon
  },
  { number: "05", heading: "Seeding", description: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie", svg: SeedingIcon },
  { number: "06", heading: "Fresh Vegetables", description: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie", svg: FreshVegetableIcon },
  { number: "07", heading: "Watering", description: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie", svg: WateringIcon },
  { number: "08", heading: "Vegetable selling", description: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie", svg: VegetableSell }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services section p-5">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2 className="content-title mb-4">SERVICES</h2>
        <p>Providing Fresh Produce Every Single Day</p>
      </div>

      <div className="content">
        <div className="container">
          <div className="row g-0">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                number={service.number}
                heading={service.heading}
                description={service.description}
                SvgIcon={service.svg}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
