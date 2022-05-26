import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-screen">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-vector/concept-illustration-smart-house-internet-things-wireless-digital-technologies_1441-2204.jpg?w=900&t=st=1653570908~exp=1653571508~hmac=8c56f38ff16b82b6729bb239f21baf39677442c91551e71b3256831a952a41a0"
            className="w-full"
            alt=""
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-vector/refrigerator-fridge-realistic-set-isolated-cold-storage-units-with-products-open-closed-door_1284-27090.jpg?w=740&t=st=1653570903~exp=1653571503~hmac=ed6c3929f92c1b5c50bf7eabb1fb2f9bc02252a49a2b58d12db35d37df0c6ebf"
            className="w-full"
            alt=""
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-vector/housewife-repairman-with-tools-box-kitchen-near-broken-fridge-leakage-floor-home-appliance-repair-service_575670-1163.jpg?w=740&t=st=1653570149~exp=1653570749~hmac=d69a65167af1c7dbc87ff42aa366715f80ad81072ed6475edb5949aa70b28378"
            className="w-full"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
