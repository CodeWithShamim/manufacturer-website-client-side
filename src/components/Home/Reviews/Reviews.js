import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ReviewDetail from "./ReviewDetail";
import bg from "../../../images/review.jpg";

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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-12">
        {reviews?.map((review) => (
          <ReviewDetail key={review._id} review={review}></ReviewDetail>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
