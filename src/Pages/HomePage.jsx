import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import CoreFeatures from "../components/CoreFeatures";
import SystemHierarchy from "../components/SystemHierarchy";
import TechStack from "../components/TechStack";
import UserJourney from "../components/UserJourney";
import Roadmap from "../components/Roadmap";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureCards />
      <CoreFeatures />
      <SystemHierarchy />
      <TechStack />
      <UserJourney />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default HomePage;
