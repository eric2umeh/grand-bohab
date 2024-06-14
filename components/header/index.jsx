"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      {" "}
      <header className={`header ${navbar ? "is-sticky bg-white" : ""}`}>
        <div className="header__container header__container-1500 mx-auto px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-50">
                  <img src="/img/general/logo-bh.jpeg" alt="logo" />
                  <img src="/img/general/logo-bh.jpeg" alt="logo" />
                </Link>
                {/* End logo */}

                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              {/* <div className="d-flex items-center">
                <div className="d-flex items-center is-menu-opened-hide">
                  <Link
                    href="https://www.grandbohabs.shop/"
                    className="button px-30 fw-400 text-14 -blue-1 bg-yellow-5 h-50 text-white"
                  >
                    Make Reservations
                  </Link>
                </div> */}
                {/* End d-flex */}

              {/* </div> */}
              {/* End d-flex */}
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End header */}
    </>
  );
};

export default Header1;
