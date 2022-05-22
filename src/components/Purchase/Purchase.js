import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const Purchase = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [tool, setTool] = useState({});
  const { name, img, minimumQuantity, availableQuantity, price } = tool;

  useEffect(() => {
    fetch(`http://localhost:5000/tool/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setTool(data);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    // <div class="card lg:card-side bg-base-100 px-20">
    //   <figure>
    //     <img className="w-100 h-100" src={img} alt="tool-img" />
    //   </figure>
    //   <div class="card-body">
    //     <h2 class="card-title">{name}</h2>
    //     <p>
    //       <h1>{minimumQuantity}</h1>
    //       <h1>{availableQuantity}</h1>
    //       <h1>{price}</h1>
    //     </p>
    //     <div class="card-actions justify-end">
    //       <button class="btn btn-primary">Pay</button>
    //     </div>
    //   </div>
    // </div>
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div class="hero-overlay bg-opacity-70"></div>
      <div class="hero-content text-center text-base-100">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">{name}</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
