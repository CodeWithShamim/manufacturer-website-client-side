import React from "react";

const MyPortfolio = () => {
  return (
    <div className="font-serif">
      <h1 className="text-4xl md:text-left text-gray-black font-semibold md:pl-10 lg:pl-16 py-6">
        Portfolio
      </h1>
      <hr />

      {/* ________________________  */}
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/hXsMYhP/profile-2.jpg"
            class="max-w-sm rounded-lg shadow-2xl w-full h-full"
            alt=""
          />
          <div className="text-left md:px-32">
            <h1 class="text-2xl md:text-3xl mt-6 lg:text-4xl font-bold uppercase">
              Hello, I'm shamim!
            </h1>
            <p className="text-sm font-bold text-red-400">
              Mern Stack Developer
            </p>
            <p class="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              totam perferendis vel nostrum consequuntur quibusdam animi
              blanditiis atque minus, doloremque quos cupiditate accusantium
              similique sequi dolorem eius, reprehenderit officia id.
            </p>
            <button class="btn btn-error text-base-100">Download Resume</button>

            {/* __________________info_____________ */}
            <div>
              <h1 className="text-2xl text-left pt-24 text-gray-black font-semibold">
                Connect with me <hr />
              </h1>
              <div className="mt-3">
                <address>
                  Full Name:- <span className="">Shamim Islam</span> <br />
                  Email:- shamimislamonline@gmail.com <br />
                  Linkedin:-{" "}
                  <a
                    href="https://www.linkedin.com/in/codewithshamim/"
                    target="_blan"
                    className="btn btn-ghost btn-link p-0 lowercase"
                  >
                    https://www.linkedin.com/in/codewithshamim
                  </a>
                </address>
              </div>

              {/* Education info  */}
              <div>
                <h1 className="text-2xl text-left pt-24 text-gray-black font-semibold">
                  Education <hr />
                </h1>
                <p>
                  I'm currently studying in Rangpur polytechnic institute.{" "}
                  <br />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
