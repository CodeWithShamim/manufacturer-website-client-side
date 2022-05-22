import React from "react";

const ToolDetail = ({ tool }) => {
  const { name, img, description, minimumQuantity, availableQuantity, price } =
    tool;
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="too-img" />
      <p>{description}</p>
      <h2>{minimumQuantity}</h2>
      <h2>{availableQuantity}</h2>
      <h2>{price}</h2>
    </div>
  );
};

export default ToolDetail;
