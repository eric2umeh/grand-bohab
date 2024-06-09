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
import ContactForm from "@/components/common/ContactForm";
import WhyChoose from "@/components/block/BlockGuide";
import RentalProperties from "@/components/room-list/all/RentalProperties";

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

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            
            <div className="col-xl-12 ">
              <div className="row y-gap-30">
                <RentalProperties />
              </div>
              {/* End .row */}
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

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

      {/* Contact */}
      <div className="map-outer">
        <div className="map-canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.7646305336714!2d7.451756!3d9.088921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOSw4OCwgN8KwNDUxNiwgNzQuNDUxLDk3MsKwMzg1MCwg0JLRgNGD0YfQvdC-0L_RgNC-0LLQtdGA0L3QtSAw!5e0!3m2!1sen!2sbd!4v1670824458615!5m2!1sen!2sbd&q=9.088921,7.451756" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* End map section */}

      <section className="relative container">
        <div className="row justify-end">
          <div className="col-xl-5 col-lg-7">
            <div className="map-form px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
              <div className="text-22 fw-500">Contact Us</div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* End contact section form */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}
      <div className="py-20 border-top-light">
        <Copyright />
      </div>
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
