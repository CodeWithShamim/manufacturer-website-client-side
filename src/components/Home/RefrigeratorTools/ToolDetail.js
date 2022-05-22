import React from "react";
import Description from "./Description";
import "./ToolDetail.css";

const ToolDetail = ({ tool }) => {
  const { name, img, description, minimumQuantity, availableQuantity, price } =
    tool;
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl card-container hover:visible">
      <figure>
        / <img src={img} alt="too-img" />
      </figure>

      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p className="font-sans">
          <h2 className="pt-4">
            <span className="text-md text-red-400 font-bold">
              Minimum Quantity:
            </span>{" "}
            {minimumQuantity}
          </h2>
          <h2>
            <span className="text-md text-red-400 font-bold">
              Available Quantity:
            </span>{" "}
            {availableQuantity}
          </h2>
          <h2>
            <span className="text-md text-red-400 font-bold">
              Per Piece Price:
            </span>{" "}
            ${price}
          </h2>

          {/* <p className="pt-6">
            <span className="text-xl text-red-400 font-bold">Description:</span>
            {description.map((d, index) => (
              <Description key={index} d={d} />
            ))}
          </p> */}
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary text-base-100">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
