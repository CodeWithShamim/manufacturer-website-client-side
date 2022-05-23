import React from "react";
import defaultAvatar from "../../../images/avatar.png";

const ReviewDetail = ({ review }) => {
  const { name, avatar, rating, description } = review;
  return (
    <div className=" shadow-xl rounded-lg p-4 w-full overflow-hidden">
      <h1>{description}</h1>
      <p>Rating: {rating}/5</p>
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
