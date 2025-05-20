import React from "react";

import "./International.css";
import Programs from "../../components/international/programs/Programs";
import Information from "../../components/international/information/Information";
import Popular from "../../components/international/popular/Popular";
import Payment from "../../components/international/payment/Payment";
import Service from "../../components/shared/service/Service";
import Contact from "../../components/shared/contact/Contact";

const International = () => {
  return (
    <div>
      <Programs />
      <Information />
      <Popular />
      <Payment />
      <Service />
      <Contact />
    </div>
  );
};

export default International;
