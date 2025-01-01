import React from "react";
import Navbar from "./Navbar";
import SearchSection from "./SearchSection";
import TripType from "./TripType";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchSection />
      <TripType />
    </>
  );
};

export default Home;
