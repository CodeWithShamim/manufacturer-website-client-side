import React from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import blob from "../../../images/blob.svg";

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
    <div className="card w-full bg-base-100 shadow-xl rounded-sm">
      <figure
        className="z-10 relative p-4"
        style={{
          background: `url(${blob})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2 className="absolute right-0 top-0 bg-red-400 font-sans p-1 text-sm font-bold text-base-100">
          Available: {availableQuantity}
        </h2>
        <img
          className="w-48 mx-auto hover:scale-125 z-50 transition-all "
          src={img}
          alt="tool-img"
        />
      </figure>
      <hr />

      {/* ____body___ */}
      <div class="card-body">
        <h2 className="card-title text-left">{name}</h2>
        <div className="text-left">
          <h2>
            <span className="text-sm text-primary font-bold">
              Minimum Quantity:
            </span>{" "}
            {minimumQuantity}
          </h2>
          <h2>
            <span className="text-sm text-primary font-bold">
              Per Unit Price:
            </span>{" "}
            ${price}
          </h2>

          <p>
            <span className="text-sm text-primary font-bold">Description:</span>{" "}
            {description}
          </p>
        </div>

        <div class="card-actions justify-end">
          {!isAdmin && (
            <Link to={`/purchase/${_id}`}>
              <button className="btn btn-primary btn-sm text-base-100">
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
