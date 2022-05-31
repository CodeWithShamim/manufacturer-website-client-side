import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import bg from "../../../images/review.jpg";
import { FaStar } from "react-icons/fa";
import defaultAvatar from "../../../images/avatar.png";
// ---swiper slide---
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { data: reviewsItem, isLoading } = useQuery("review", () =>
    fetch("https://ryan-refrigerator-instrument.herokuapp.com/review").then(
      (res) => res.json()
    )
  );

  useEffect(() => {
    if (reviewsItem) {
      setReviews([...reviewsItem.slice(0, 8)]);
    }
  }, [reviewsItem]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="px-4 md:px-24"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-2xl font-serif md:text-4xl text-primary font-bold capitalize pt-24">
        Our customer review
      </h1>

      <Swiper
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12 mySwiper mySwiper"
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
      >
        {reviews?.map(({ _id, name, avatar, description, rating }) => (
          <SwiperSlide
            key={_id}
            className="shadow-lg border border-gray-200 p-12 w-full overflow-hidden text-left"
          >
            <h1>{description}</h1>
            <p className="text-orange-200 flex items-center py-2">
              <span className="text-blue-800 font-semibold pr-3">Rating: </span>

              {rating === "1" && <FaStar />}
              {rating === "2" && (
                <>
                  <FaStar />
                  <FaStar />
                </>
              )}
              {rating === "3" && (
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </>
              )}
              {rating === "4" && (
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </>
              )}
              {rating === "5" && (
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </>
              )}
            </p>
            <div className="flex justify-evenly items-center pt-6 ">
              <img
                className="w-20 h-20 rounded-full"
                src={avatar ? avatar : defaultAvatar}
                alt={name}
              />
              <h2>{name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
