import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import FeatureCard from "./cards/FeatureCard";
import StatsSection from "./StatsSection";

const Main = () => {
  return (
    <>
    <main id="main" className="main">
      <div className="container">
        <Hero />
        <About />
        <Services />
        <FeatureCard />
        <StatsSection />
        {/* Add more content here as needed */}
      </div>
    </main>
    </>
  );
};

export default Main;