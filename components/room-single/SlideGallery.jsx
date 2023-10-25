import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const SlideGallery = ({ rental }) => {
  console.log(rental, "rental")
  return (
    <>
      <Gallery>
        <div className="galleryGrid -type-1 relative">
          <div className="galleryGrid__item">
            <Item
              original={rental.slideImg && rental.slideImg[0]}
              thumbnail={rental.slideImg && rental.slideImg[0]}
              width={1006}
              height={765}
            >
              {({ ref, open }) => (
                <Image
                  width={600}
                  height={500}
                  src={rental.slideImg && rental.slideImg[0]}
                  ref={ref}
                  onClick={open}
                  alt="image"
                  role="button"
                  className="rounded-4"
                />
              )}
            </Item>
          </div>
          {/* End .galleryGrid__item */}

          <div className="galleryGrid__item">
            <Item
              original={rental.slideImg && rental.slideImg[1]}
              thumbnail={rental.slideImg && rental.slideImg[1]}
              width={450}
              height={375}
            >
              {({ ref, open }) => (
                <Image
                  width={450}
                  height={375}
                  ref={ref}
                  onClick={open}
                  src={rental.slideImg && rental.slideImg[1]}
                  alt="image"
                  className="rounded-4"
                  role="button"
                />
              )}
            </Item>
          </div>
          {/* End .galleryGrid__item */}

          <div className="galleryGrid__item">
            <Item
              original={rental.slideImg && rental.slideImg[2]}
              thumbnail={rental.slideImg && rental.slideImg[2]}
              width={450}
              height={375}
            >
              {({ ref, open }) => (
                <Image
                  width={450}
                  height={375}
                  ref={ref}
                  onClick={open}
                  src={rental.slideImg && rental.slideImg[2]}
                  alt="image"
                  className="rounded-4"
                  role="button"
                />
              )}
            </Item>
          </div>
          {/* End .galleryGrid__item */}

          <div className="galleryGrid__item">
            <Item
              original={rental.slideImg && rental.slideImg[3]}
              thumbnail={rental.slideImg && rental.slideImg[3]}
              width={450}
              height={375}
            >
              {({ ref, open }) => (
                <Image
                  width={450}
                  height={375}
                  ref={ref}
                  onClick={open}
                  src={rental.slideImg && rental.slideImg[3]}
                  alt="image"
                  className="rounded-4"
                  role="button"
                />
              )}
            </Item>
          </div>
          {/* End .galleryGrid__item */}

          <div className="galleryGrid__item relative">
            <Image
              width={450}
              height={375}
              src="/img/general/logo-bh.jpeg"
              alt="image"
              className="rounded-4"
            />
            <div className="absolute h-full col-12 z-2 px-20 py-20 d-flex justify-end items-end bottom-0 end-0">
              <Item
                original="/img/general/logo-bh.jpeg"
                thumbnail="/img/general/logo-bh.jpeg"
                width={450}
                height={375}
              >
                {({ ref, open }) => (
                  <div
                    className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"
                    ref={ref}
                    onClick={open}
                    role="button"
                  >
                    See All Photos
                  </div>
                )}
              </Item>
            </div>
          </div>
          {/* End .galleryGrid__item */}
        </div>
      </Gallery>
    </>
  );
};

export default SlideGallery;
