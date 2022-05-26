import React from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import Description from "./Description";
import "./ToolDetail.css";

const ToolDetail = ({ tool }) => {
  const [isAdmin] = useAdmin();

  const {
    _id,
    name,
    img,
    description,
    minimumQuantity,
    availableQuantity,
    price,
  } = tool;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl card-container hover:visible">
      <figure>
        / <img src={img} alt="too-img" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-sans font-semibold">
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
        {!isAdmin && (
          <div className="card-actions justify-end">
            <Link to={`/purchase/${_id}`}>
              <button className="btn btn-primary text-base-100">
                Place Order
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolDetail;
