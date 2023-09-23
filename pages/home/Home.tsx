import Seo from "@/components/common/Seo";
import dynamic from "next/dynamic";
// import Seo from "../../components/common/Seo";

const Home = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      {/* End Page Title */}

      {/* <Header3 /> */}
      {/* End Header 3 */}

      {/* <Hero3 /> */}
      {/* End Hero 3 */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            {/* <WhyChoose /> */}
          </div>
          {/* End row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why choose Section */}

      {/* <Copyright /> */}
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
