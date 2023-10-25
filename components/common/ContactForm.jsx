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
        Call: +234 915 126 3593
      </div>
      <div className="col-12 border-bottom">
        Plot 1169 Opposite The Capital Hub Mabushi, Abuja, Nigeria
      </div>
      <div className="col-12 border-bottom">
        Email: Grandbohabs@gmail.com
      </div>
      <div className="col-12 border-bottom d-flex x-gap-20 items-center mt-10">
        <Social /> grandbohabs
      </div>
    </div>
  );
};

export default ContactForm;
