const Amenities = () => {
  const amenitiesContent = [
    { id: 1, icon: "icon-no-smoke", name: "Non-smoking rooms" },
    { id: 2, icon: "icon-wifi", name: "Free WiFi" },
    { id: 3, icon: "icon-parking", name: "Parking" },
    { id: 4, icon: "icon-living-room", name: "Bar" },
    { id: 5, icon: "icon-shield", name: "Safety & security" },
    { id: 6, icon: "icon-tv", name: "Smart Tv" },
    { id: 7, icon: "icon-food", name: "Buffet" },
  ];
  return (
    <>
      <div className="row y-gap-15 pt-15">
        {amenitiesContent.map((item) => (
          <div className="col-sm-5" key={item.id}>
            <div className="d-flex items-center">
              <i className={`${item.icon} text-20 mr-10`} />
              <div className="text-15">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Amenities;
