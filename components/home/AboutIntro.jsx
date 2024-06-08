const AboutIntro = () => {
  return (
    <section className="section-bg layout-pt-lg layout-pb-lg">
      <div className="section-bg__item -right -w-1165 bg-light-2" />
      <div className="section-bg__item -video-left">
        <div className="row y-gap-30">
          {/* <div className="col-sm-6">
            <img src="/img/hotels/66.jpg" alt="image" />
          </div> */}
          {/* End .col */}

          <div className="col-auto">
            <img src="/img/hotels/66.jpg" alt="image" />
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .section-bg__item */}

      <div className="container lg:mt-30">
        <div className="row">
          <div className="offset-xl-6 col-xl-5 col-lg-6">
            <h2 className="text-30 fw-600">
              Simply Grande
            </h2>
            <p className="text-dark-1 mt-40 lg:mt-20 sm:mt-15">
              Experience unparalleled luxury and sophistication at our new rooms in the heart of the city's most sought-after neighborhood. 
              Nestled in a prime location, our meticulously designed rooms offer a harmonious blend of modern amenities and timeless elegance, ensuring an unforgettable stay for discerning travelers seeking the epitome of comfort and convenience.
            </p>
            <div className="d-inline-block mt-40 lg:mt-30 sm:mt-20">
              <a
                href="https://www.grandbohabs.shop"
                className="button -md -blue-1 bg-yellow-5 text-dark-1"
              >
                Book Now <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}
    </section>
  );
};

export default AboutIntro;
