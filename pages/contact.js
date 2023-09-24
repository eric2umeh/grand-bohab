import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import WhyChoose from "../components/block/BlockGuide";
import Copyright from "../components/footer/default/Copyright";
import Header1 from "../components/header";
import ContactForm from "../components/common/ContactForm";

const Contact = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      <br /> <br />

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
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
