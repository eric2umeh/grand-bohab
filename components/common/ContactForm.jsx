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
        Call: +234 901 626 4834
      </div>
      <div className="col-12 border-bottom">
        Whatsapp: +234 813 3405 6026
      </div>
      <div className="col-12 border-bottom">
        Reservations: www.grandbohabs.shop
      </div>
      <div className="col-12 border-bottom">
        Grand Bohabs Hotel Abuja Opposite The Capital Hub, Abuja, Nigeria
      </div>
      <div className="col-12 border-bottom">
        Email: Grandbohabs@gmail.com
      </div>
      <div className="col-12 border-bottom d-flex x-gap-20 items-center mt-10">
        <Social /> Instagram: grandbohabshotel
      </div>
    </div>
  );
};

export default ContactForm;
