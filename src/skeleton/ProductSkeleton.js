import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductSkeleton = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-sm pb-10">
      <figure className="z-10 relative p-4">
        <Skeleton height={180} width={350} />
      </figure>
      <hr />
      {/* ____body___ */}
      <div class="card-body flex items-center">
        <h2 className="card-title text-left">
          <Skeleton width={340} height={40} />
        </h2>
        <div className="text-left">
          <h2>
            <Skeleton width={270} />
          </h2>
          <h2>
            <Skeleton width={300} />
          </h2>
          <p>
            <Skeleton height={27} width={340} />
            <Skeleton />
          </p>
        </div>

        <div class="card-actions justify-end absolute right-8 bottom-8">
          <Skeleton width={130} height={32} />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
