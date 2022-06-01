import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { FaStar } from "react-icons/fa";
import defaultAvatar from "../../../images/avatar.png";
import "./Reviews.css";
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
    <div className="px-4 pb-10 md:px-16 bg-slate-400">
      <h1 className="text-2xl font-serif md:text-4xl text-base-100 font-bold capitalize pt-24">
        Our customer review
      </h1>

      <>
        <Swiper
          className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-12 mySwiper"
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          pagination={
            (true,
            {
              clickable: true,
            })
          }
          modules={[Autoplay, EffectCoverflow, Pagination]}
        >
          {reviews?.map(({ _id, name, avatar, description, rating }) => (
            <SwiperSlide
              key={_id}
              className="shadow-lg border border-gray-200 bg-base-100 py-12 w-full text-center relative mt-20"
            >
              <h2 className="text-lg uppercase text-orange-500 font-semibold pt-6">
                {name}
              </h2>
              <p className="text-orange-300 flex justify-center items-center py-2">
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
              <h1 className="w-4/5 mx-auto">{description}</h1>

              <div className="absolute top-[-38px] bottom-0 left-0 right-0 flex justify-center">
                <img
                  className="w-24 h-24 rounded-full border-8 bg-zinc-200 border-base-100 shadow-zinc-600 shadow-lg"
                  src={avatar ? avatar : defaultAvatar}
                  alt={name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;
