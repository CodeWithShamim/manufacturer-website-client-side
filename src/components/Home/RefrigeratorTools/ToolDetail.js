import React from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";

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
    <div class="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-3/5 mx-auto" src={img} alt="tool-img" />
      </figure>
      <div class="card-body">
        <h2 className="card-title">{name}</h2>
        <div>
          <h2>
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

          <p>
            <span className="text-xl text-red-400 font-bold">Description:</span>
            {description}
          </p>
        </div>

        <div class="card-actions justify-end">
          {!isAdmin && (
            <Link to={`/purchase/${_id}`}>
              <button className="btn btn-primary text-base-100">
                Place Order
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
