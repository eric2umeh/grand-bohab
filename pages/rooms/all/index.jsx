import Seo from "../../../components/common/Seo";
import Header from "../../../components/header";
import Copyright from "../../../components/footer/default/Copyright";
import RentalProperties from "../../../components/room-list/all/RentalProperties";

const index = () => {
  return (
    <>
      <Seo pageTitle="Rental List v2" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg">
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

      <div className="py-20 border-top-light">
        <Copyright />
      </div>
    </>
  );
};

export default index;
