const HelpfulFacts = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="">
          <div className="d-flex items-center">
            <i className="icon-calendar text-20 mr-10"></i>
            <div className="text-16 fw-500">Check-in/Check-out</div>
          </div>

          <div className="row x-gap-50 y-gap-5 pt-10">
            <div className="col-12">
              <div className="text-15">Check-in from: 2 PM</div>
            </div>

            <div className="col-12">
              <div className="text-15">Check-out until: 12:00 PM</div>
            </div>

            <div className="col-12">
              <div className="text-15">Reception open: 24 Hours</div>
            </div>
          </div>
        </div>

        <div className="mt-30">
          <div className="d-flex items-center">
            <i className="icon-location-pin text-20 mr-10"></i>
            <div className="text-16 fw-500">Getting around</div>
          </div>

          <div className="row x-gap-50 y-gap-5 pt-10">

            <div className="col-12">
              <div className="text-15">Travel time to airport: 37 minutes</div>
            </div>

            <div className="col-12">
              <div className="text-15">
                Distance from city center: 11 km
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="">
          <div className="d-flex items-center">
            <i className="icon-ticket text-20 mr-10"></i>
            <div className="text-16 fw-500">Extras</div>
          </div>

          <div className="row x-gap-50 y-gap-5 pt-10">
            <div className="col-12">
              <div className="text-15">
                Breakfast charge (if more than one guest): ₦6,500
              </div>
            </div>
          </div>
        </div>

        <div className="mt-30">
          <div className="d-flex items-center">
            <i className="icon-parking text-20 mr-10"></i>
            <div className="text-16 fw-500">Parking</div>
          </div>

          <div className="row x-gap-50 y-gap-5 pt-10">
            <div className="col-12">
              <div className="text-15">Daily parking for guest only</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="">
          <div className="d-flex items-center">
            <i className="icon-plans text-20 mr-10"></i>
            <div className="text-16 fw-500">The property</div>
          </div>

          <div className="row x-gap-50 y-gap-5 pt-10">
            <div className="col-12">
              <div className="text-15">Smoking rooms/floors: No</div>
            </div>

            <div className="col-12">
              <div className="text-15">Number of bars/lounges: 1</div>
            </div>

            <div className="col-12">
              <div className="text-15">Number of floors: 2</div>
            </div>

            <div className="col-12">
              <div className="text-15">Number of restaurants: 1</div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpfulFacts;
