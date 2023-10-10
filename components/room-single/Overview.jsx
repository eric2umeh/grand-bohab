import Amenities from "./Amenities";

const Overview = () => {
  return (
    <>
      <div>
        <h3 className="text-22 fw-500">Overview</h3>
        <p className="text-dark-1 text-15 mt-20">
          A Grand room with an orthopaedic bed. Reading table. sep. WC. Living room with 1 sofa chairs and Smart TV.
          Exit to the balcony with great view. No kitchen.
        </p>

      </div>

      <div className="border-top-light mt-40 mb-40"></div>
      {/* End border-top-light */}

      <div>
        <h3 className="text-22 fw-500">Amenities</h3>
        <Amenities />
      </div>
      {/* End aminities */}
    </>
  );
};

export default Overview;
