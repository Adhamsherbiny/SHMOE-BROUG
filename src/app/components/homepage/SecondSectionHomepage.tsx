"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import "@/app/styles/homepage.scss";
import "swiper/css/navigation";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import properties from "@/app/json/properties.json";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useQuery } from "@tanstack/react-query";

import PropertiesWidget from "../common/PropertiesWidget";
import Loading from "../common/Loading";

const breakpointsConfig = {
  1440: { slidesPerGroup: 3, slidesPerView: 3 },
  1350: { slidesPerGroup: 3, slidesPerView: 3 },
  1300: { slidesPerGroup: 2, slidesPerView: 2 },
  1100: { slidesPerGroup: 2, slidesPerView: 2 },
  1020: { slidesPerGroup: 2, slidesPerView: 2 },
  800: { slidesPerGroup: 1, slidesPerView: 1 },
  786: { slidesPerGroup: 1, slidesPerView: 1 },
  600: { slidesPerGroup: 1, slidesPerView: 1 },
  425: { slidesPerGroup: 1, slidesPerView: 1 },
  320: { slidesPerGroup: 1, slidesPerView: 1 },
};

// primitive type = {string, number. boolean}, reference type

export default function SecondSectionHomepage() {
  const { data, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => properties,
  });

  const [currentSlide, setCurrentSlide] = useState(1);
  const [allSlides, setAllSlides] = useState<any>(1);

  useEffect(() => {
    const calculateSlides = () => {
      const windowWidth = window.innerWidth;
      if (data) {
        if (windowWidth >= 1440) {
          setAllSlides(Math.ceil(data?.length / 3));
        } else if (windowWidth >= 1300) {
          setAllSlides(Math.ceil(data?.length / 2));
        } else if (windowWidth >= 860) {
          setAllSlides(Math.ceil(data?.length / 2));
        } else {
          setAllSlides(data?.length);
        }
      }
    };
    // Calculate the number of slides based on the largest breakpoint logic

    calculateSlides();

    // Recalculate on window resize
    window.addEventListener("resize", calculateSlides);
    return () => window.removeEventListener("resize", calculateSlides);
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="second-section" id="Services">
      <div className="container">
        <header>
          <div className="content">
            <h1>Discover Our Services</h1>
            <p>
              Start Exploring Our Services Today! Whether you’re embarking on a
              new project or looking to enhance the performance of your existing
              ones, we are here to support you every step of the way. Contact us
              today, and let us help you turn your vision into reality.
            </p>
          </div>
          {/* <button>View All Properties</button> */}
        </header>
        <div className="slider">
          <Swiper
            navigation={{
              nextEl: ".arrow-right",
              prevEl: ".arrow-left",
            }}
            modules={[Pagination, Navigation]}
            slidesPerView={3}
            slidesPerGroup={3}
            breakpoints={breakpointsConfig}
            className="myswiper-container"
          >
            {data?.map((property: any) => (
              <SwiperSlide key={property.id} className="slides">
                <PropertiesWidget
                  id={property.id}
                  image={property.image}
                  title={property.title}
                  description={property.description}
                  bedrooms={property.bedrooms}
                  bathrooms={property.bathrooms}
                  typeOfBuilding={property.typeOfBuilding}
                  price={property.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination">
          <div className="number-data">
            {currentSlide} of {allSlides}
          </div>
          <div className="paginati">
            <button
              className="arrow-left"
              onClick={() => {
                setCurrentSlide((prev) => (prev > 1 ? prev - 1 : allSlides));
              }}
            >
              <FontAwesomeIcon className="arrows" icon={faArrowLeft} />
            </button>
            <button
              className="arrow-right"
              onClick={() => {
                setCurrentSlide((prev) => (prev < allSlides ? prev + 1 : 1));
              }}
            >
              <FontAwesomeIcon className="arrows" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
