import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";
import rentalsData from "../../../data/rentals";
import Seo from "../../../components/common/Seo";
import Header from "../../../components/header";
import Overview from "../../../components/room-single/Overview";
import StandardHighlights from "../../../components/room-single/StandardHighlights";
import Copyright from "../../../components/footer/default/Copyright";
import SlideGallery from "../../../components/room-single/SlideGallery";
import HelpfulFacts from "../../../components/room-single/HelpfulFacts";

const TourSingleV1Dynamic = () => {
  const router = useRouter();
  const [rental, setRental] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setRental(rentalsData.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo pageTitle="Rental Single" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-12">
              <div className="row justify-between items-end">
                <div className="col-auto">
                  <h1 className="text-26 fw-600">{rental?.title}</h1>
                  <div className="row x-gap-20 y-gap-20 items-center pt-10">
                    <div className="col-auto">
                      <div className="row x-gap-10 items-center">
                        <div className="col-auto">
                          <div className="d-flex x-gap-5 items-center">
                            <i className="icon-bed text-16 text-light-1" />
                            <div className="text-15 text-light-1">
                              {rental?.location}
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .col-auto */}

                <div className="col-auto">
                  <div className="row x-gap-10 y-gap-10">
                    
                    {/* End .col-auto */}

                    <div className="col-auto">
                      <button className="button px-15 py-10 -blue-1 bg-light-2 mt-10">
                        ₦
                        {rental?.price} night
                      </button>
                    </div>
                    {/* End .col-auto */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End sections pt-40 */}

      <section className="pt-40">
        <div className="container">
          <SlideGallery rental={rental} />
        </div>
      </section>
      {/* End gallery grid wrapper */}

      <section className="pt-40 js-pin-container">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <h3 className="text-22 fw-500">Property highlights</h3>
              <StandardHighlights />
              {/* End toursnapshot */}
              <div className="border-top-light mt-40 mb-40"></div>

              <Overview />
              {/* End  Overview */}
            </div>
            {/* End .col-xl-8 */}
            
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}


      <section className="pt-40 layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-22 fw-500">Things to note</h3>
            </div>
          </div>
          {/* End .row */}

          <div className="row x-gap-50 y-gap-30 pt-20">
            <HelpfulFacts />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Map */}

      <div className="py-20 border-top-light">
        <Copyright />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(TourSingleV1Dynamic), {
  ssr: false,
});
