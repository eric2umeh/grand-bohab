import Image from "next/image";

const Index = () => {
  return (
    <section className="masthead -type-10">
      <div className="container-1500">
        <div className="row">
          <div className="col-lg-auto">
            <div className="masthead__content">
              <h1
                className="text-60 lg:text-40 sm:text-30"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Choose Your Next Stay
              </h1>
              <p className="mt-5" data-aos="fade-up" data-aos-delay="200">
                Explore unforgettable hospitality in Abuja
              </p>
            </div>
            {/* End .masthead__content */}
          </div>
          {/* End .col-lg-auto */}
        </div>
        {/* End .row */}

        <div
          className="masthead__image"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="row y-gap-30 flex-nowrap">
            <div className="col-auto">
              <Image
                src="/img/hotels/34.jpg"
                alt="image"
                width="800"
                height="800"
                className="rounded-16"
              />
            </div>
            {/* End col-auto */}

            <div className="col-auto">
              <Image
                src="/img/hotels/105.jpg"
                alt="image"
                width="800"
                height="0"
                className="rounded-16"
              />
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End .masthead__image */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default Index;