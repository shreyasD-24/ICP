import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import OrganisedProcess from "../components/section3";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <OrganisedProcess />
    </>
  );
}

export default Home;
