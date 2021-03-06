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
              This is Shamim Islam. Now, I am currently studying at Rangpur
              polytechnic institute in computer technology. I like to write code
              And learn new skills. My Future plan in 2022 is to Become a MERN
              Stack Developer. I already completed HTML, CSS,
              Javascript,Bootstrap, Tailwind CSS, React.js Node.js, MongoDB,
              Expres.js.
            </p>
            <button class="btn btn-error text-base-100">Download Resume</button>

            {/* __________________info_____________ */}
            <div>
              <h1 className="text-2xl text-left pt-20 text-gray-black font-semibold">
                Connect with me <hr />
              </h1>
              <div className="mt-3">
                <address>
                  Full Name:- <span className="">Shamim Islam</span> <br />
                  Email:- shamimislamonline@gmail.com <br />
                  Linkedin:-{" "}
                  <a
                    href="https://www.linkedin.com/in/codewithshamim/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-xs md:btn-md btn-ghost btn-link p-0 lowercase"
                  >
                    https://www.linkedin.com/in/codewithshamim
                  </a>
                </address>
              </div>

              {/* Education info  */}
              <div>
                <h1 className="text-2xl text-left pt-10 text-gray-black font-semibold pb-3">
                  Education <hr />
                </h1>
                <p>
                  SSC:- 2019 <br />
                  Currently studying Diploma Engineering <br />
                  Instittue Name: Rangpur polytechnic institute
                  <br />
                  Technology : Computer <br />
                </p>
              </div>

              {/* skill info  */}
              <div>
                <h1 className="text-2xl text-left pt-10 text-gray-black font-semibold pb-3">
                  Skill <hr />
                </h1>
                <div className="grid grid-flow-row md:grid-flow-col">
                  <span>Html</span>
                  <span>Css</span>
                  <span>Bootstrap</span>
                  <span>TailwindCss</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>NodeJs</span>
                  <span>MongoDb</span>
                  <span>ExpressJs</span>
                </div>
              </div>

              {/* project  */}
              <div>
                <h1 className="text-2xl text-left pt-10 text-gray-black font-semibold">
                  Project <hr />
                </h1>
                <div>
                  <p>
                    Project-1:-{" "}
                    <a
                      href="https://ryan-books-store.web.app"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xs md:btn-md btn-ghost btn-link p-0 lowercase"
                    >
                      https://ryan-books-store.web.app
                    </a>
                  </p>
                  <p>
                    Project-2:-{" "}
                    <a
                      href="https://eyun-fitness.web.app"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xs md:btn-md btn-ghost btn-link p-0 lowercase"
                    >
                      https://eyun-fitness.web.app
                    </a>
                  </p>
                  <p>
                    Project-3:-{" "}
                    <a
                      href="https://products-analysis-web.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xs md:btn-md btn-ghost btn-link p-0 lowercase"
                    >
                      https://products-analysis-web.netlify.app
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
