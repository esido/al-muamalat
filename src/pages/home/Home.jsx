import React from "react";
import Hero from "../../components/home/hero/Hero";
import Service from "../../components/shared/service/Service";
import Team from "../../components/home/team/Team";
import Partner from "../../components/home/partner/Partner";
import OurMedia from "../../components/home/ourMedia/OurMedia";
import Students from "../../components/home/students/Students";
import Questions from "../../components/home/questions/Questions";
import Contact from "../../components/shared/contact/Contact";

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
