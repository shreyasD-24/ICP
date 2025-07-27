import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import OrganisedProcess from "../components/Section3";
import Sect10 from "../components/Sect10";
import Sect2 from "../components/Sect2";
import Sect4 from "../components/Sect4";
import Sect6 from "../components/Sect6";
import Sect8 from "../components/Sect8";
import SpecializedServices from "../components/Section5";
import FAQSection from "../components/Section7";
import ICPWorkFooter from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <OrganisedProcess />
      <SpecializedServices />
      <Sect2 />
      <Sect4 />
      <Sect6 />
      <FAQSection />
      <Sect8 />
      <Sect10 />
      <ICPWorkFooter />
    </>
  );
}

export default Home;
