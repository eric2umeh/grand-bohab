import Seo from "@/components/common/Seo";
import Copyright from "@/components/footer/default/Copyright";
import Header from "@/components/header";
import Hero from "@/components/hero";
import dynamic from "next/dynamic";
import Link from "next/link";
import AboutIntro from "@/components/home/AboutIntro";
import Travellers from "@/components/home/Travellers";
import PopularRoutes from "@/components/home/PopularRoutes";
import Testimonial from "../../components/home/Testimonial";
import TestimonialRating from "../../components/home/TestimonialRating";

const Home = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      {/* End Page Title */}

      <Header />
      {/* End Header 3 */}

      {/* End Hero 3 */}
      <div className="d-none sm:d-flex">
        <br /> <br /> <br /> <br /> <br />
      </div>

      <section className="layout-pt-lg layout-pb-lg z-999">
        <div className="container">
          <div className="row justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md sm:mt-80">
                <h2 className="sectionTitle__title container">Popular Rooms</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These are various distinguished rooms
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="/room/all"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                Showcase <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="relative mt-40 sm:mt-20">
            <PopularRoutes />
          </div>
          {/* End relative */}
        </div>
        {/* End .container */}
      </section>
      {/* End popular routes Section */}

      <AboutIntro />
      {/* About Intro Cruise  Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Explore more views</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Other activities to visit
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination -dots text-border js-places-pag" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <Travellers />
          {/* End travellers component */}
        </div>
        {/* End .container */}
      </section>
      {/* End Connect with Travellers Sections */}

      <section className="layout-pt-sm layout-pb-sm bg-yellow-5">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End testimonial and brand sections Section */}

      <div className="py-20 border-top-light">
        <Copyright />
      </div>
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
