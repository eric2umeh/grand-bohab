import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import rentalsData from '../../../data/rentals';
import isTextMatched from '../../../utils/isTextMatched';

const RentalProperties = () => {
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function Arrow(props) {
    let className =
      props.type === 'next'
        ? 'slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next'
        : 'slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev';
    className += ' arrow';
    const char =
      props.type === 'next' ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      {rentalsData.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={`/room/single/${item.id}`}
            // href={`https://www.grandbohabs.shop/room/${item.id}`}
            className="rentalCard -type-1 rounded-4 hover-inside-slider"
          >
            <div className="rentalCard__image">
              <div className="cardImage inside-slider">
                <Slider
                  {...itemSettings}
                  arrows={true}
                  nextArrow={<Arrow type="next" />}
                  prevArrow={<Arrow type="prev" />}
                >
                  {item?.slideImg?.map((slide, i) => (
                    <div className="cardImage ratio ratio-1:1" key={i}>
                      <div className="cardImage__content ">
                        <Image
                          width={300}
                          height={300}
                          className="rounded-4 col-12 js-lazy"
                          src={slide}
                          alt="image"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>

                <div className="cardImage__leftBadge">
                  <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase  ${
                      isTextMatched(item?.tag, 'discount')
                        ? 'bg-blue-1 text-white'
                        : ''
                    }  ${
                      isTextMatched(item?.tag, 'popular')
                        ? 'bg-yellow-1 text-dark-1'
                        : ''
                    }`}
                  >
                    {item?.tag}
                  </div>
                </div>
              </div>
            </div>
            {/* End image card */}

            <div className="rentalCard__content mt-10">
              <h4 className="rentalCard__title text-dark-1 text-18 lh-16 fw-500 d-flex items-center justify-between">
                <span>{item?.title}</span>
                <div className="text-light-1">
                  <span className="fw-500 text-dark-1">₦{item?.price}</span> /
                  per night
                </div>
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5" />
              <div className="d-flex items-center mt-5">
                <div className="text-14 text-light-1">{item?.guest} guests</div>
                <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                <div className="text-14 text-light-1">
                  {item?.parlour} parlour
                </div>
                <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                <div className="text-14 text-light-1">
                  {item?.bedroom} bedroom
                </div>
              </div>
            </div>
          </Link>
          <div className="d-flex items-center is-menu-opened-hide">
            <Link
              href={`https://www.grandbohabs.shop/room/${item.id}`}
              className="button px-30 fw-400 text-14 -blue-1 bg-yellow-5 h-40 text-white"
            >
              Book Nvow
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default RentalProperties;
