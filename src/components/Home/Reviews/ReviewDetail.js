import React from "react";
import defaultAvatar from "../../../images/avatar.png";
import { FaStar } from "react-icons/fa";

const ReviewDetail = ({ review }) => {
  const { name, avatar, rating, description } = review;
  const ratingNumber = parseInt(rating);

  return (
    <div className=" shadow-xl rounded-lg p-4 w-full overflow-hidden">
      <h1>{description}</h1>
      <p className="text-orange-200 flex items-center">
        <span className="text-blue-800 font-semibold pr-3">Rating: </span>

        {ratingNumber === 1 && <FaStar />}
        {ratingNumber === 2 && (
          <>
            <FaStar />
            <FaStar />
          </>
        )}
        {ratingNumber === 3 && (
          <>
            <FaStar />
            <FaStar />
            <FaStar />
          </>
        )}
        {ratingNumber === 4 && (
          <>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </>
        )}
        {ratingNumber === 5 && (
          <>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </>
        )}
      </p>
      <div className="flex justify-evenly items-center pt-12">
        <img
          className="w-20 h-20 rounded-full"
          src={avatar ? avatar : defaultAvatar}
          alt={name}
        />
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default ReviewDetail;
