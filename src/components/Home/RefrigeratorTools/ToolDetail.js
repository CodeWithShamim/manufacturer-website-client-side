import React from "react";
import Description from "./Description";

const ToolDetail = ({ tool }) => {
  const { name, img, description, minimumQuantity, availableQuantity, price } =
    tool;
  return (
    <div className="shadow-xl flex rounded-lg p-4 text-left">
      {/* __________left-side__________ */}
      <div className="flex-3 p-3">
        <img className="w-100 h-100" src={img} alt="too-img" />
      </div>

      {/* _______right-side_________ */}
      <div className="flex-2 relative pb-20">
        <h1 className="text-xl text-accent">{name}</h1>
        <p className="pt-6">
          <span className="text-xl text-red-400 font-bold">Description:</span>
          {description.map((d, index) => (
            <Description key={index} d={d} />
          ))}
        </p>

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

        {/* _________order btn___________ */}
        <div className=" absolute bottom-0 left-0 right-0 w-full mx-auto">
          <button className="btn btn-primary text-base-100 font-bold">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
