const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Address",
      content: (
        <>Plot 1169 Opposite Capital Hub Mabushi, Abuja, Nigeria</>
      ),
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Toll Free Customer Care",
      content: (
        <>
          <a href="tel:+4733378901">+234 810 0003 222</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: "Need support?",
      content: (
        <>
          {" "}
          <a href="mailto:i@gmail.com">grandbohabs@gmail.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
