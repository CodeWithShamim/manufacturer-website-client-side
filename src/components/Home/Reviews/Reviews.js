import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ReviewDetail from "./ReviewDetail";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("review", () =>
    fetch("https://ryan-refrigerator-instrument.herokuapp.com/review").then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-2xl font-serif md:text-4xl text-primary font-bold capitalize">
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
