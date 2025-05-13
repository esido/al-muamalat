import React from "react";
import Hero from "../../components/hero/Hero";
import Service from "../../components/service/Service";
import Team from "../../components/team/Team";
import Partner from "../../components/partner/Partner";
import OurMedia from "../../components/ourMedia/OurMedia";
import Students from "../../components/students/Students";
import Questions from "../../components/questions/Questions";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Team />
      <Partner />
      <OurMedia />
      <Students />
      <Questions />
      <Contact />
    </div>
  );
};

export default Home;
