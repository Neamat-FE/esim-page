import React from "react";
import Navbar from "./Navbar";
import SearchSection from "./SearchSection";
import TripType from "./TripType";
import DataSection from "./DataSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchSection />
      <TripType />
      <DataSection />
    </>
  );
};

export default Home;
