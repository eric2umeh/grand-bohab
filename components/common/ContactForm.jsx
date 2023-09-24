import React from "react";
import Social from "./social/Social";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="row y-gap-20 pt-20 text-light-1">
      <div className="col-12 border-bottom">
        +234 8033 444 6666
      </div>
      <div className="col-12 border-bottom">
        Plot 1169 Opposite Capital Hub Mabushi, Abuja, Nigeria
      </div>
      <div className="col-12 border-bottom">
        grandbohabs@gmail.com
      </div>
      <div className="col-12 border-bottom d-flex x-gap-20 items-center mt-10">
        <Social />
      </div>
    </div>
  );
};

export default ContactForm;
