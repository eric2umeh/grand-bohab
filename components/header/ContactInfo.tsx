import React from "react";

const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Contact Grand Bohabs",
      action: "tel:+(234) 080 333 888 9999",
      text: "+(234) 080 333 888 9999",
    },
    {
      id: 2,
      title: "Email?",
      action: "mailto:xyz@abc.com",
      text: "grandbohabs@gmail.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mb-20" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
