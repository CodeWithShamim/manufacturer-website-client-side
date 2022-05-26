import React from "react";

const Blogs = () => {
  return (
    <div className="text-left px-4 py-8 md:pt-12 md:px-24 font-serif">
      {/* ___question 1___  */}
      <div>
        <h1 className="text-lg md:xl text-left text-gray-black font-semibold pb-2">
          How will you improve the performance of a React Application?
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sequi
          ipsa harum ut fugit, quos, maiores nostrum ullam libero voluptas enim
          in iure rem sed nihil vero architecto magnam veritatis!
        </p>
      </div>

      {/* ___question 2___  */}
      <div className="mt-10">
        <h1 className="text-lg md:xl text-left text-gray-black font-semibold pb-2">
          What are the different ways to manage a state in a React application?
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sequi
          ipsa harum ut fugit, quos, maiores nostrum ullam libero voluptas enim
          in iure rem sed nihil vero architecto magnam veritatis!
        </p>
      </div>

      {/* ___question 3___  */}
      <div className="mt-10">
        <h1 className="text-lg md:xl text-left text-gray-black font-semibold pb-2">
          How does prototypical inheritance work?
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sequi
          ipsa harum ut fugit, quos, maiores nostrum ullam libero voluptas enim
          in iure rem sed nihil vero architecto magnam veritatis!
        </p>
      </div>

      {/* ___question 4___  */}
      <div className="mt-10">
        <h1 className="text-lg md:xl text-left text-gray-black font-semibold pb-2">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts.
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sequi
          ipsa harum ut fugit, quos, maiores nostrum ullam libero voluptas enim
          in iure rem sed nihil vero architecto magnam veritatis!
        </p>
      </div>

      {/* ___question 5___  */}
      <div className="mt-10">
        <h1 className="text-lg md:xl text-left text-gray-black font-semibold pb-2">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sequi
          ipsa harum ut fugit, quos, maiores nostrum ullam libero voluptas enim
          in iure rem sed nihil vero architecto magnam veritatis!
        </p>
      </div>

      {/* ___question 5___  */}
      <div className="mt-10">
        <h1 className="text-lg md:xl text-left text-gray-black font-semibold pb-2">
          What is a unit test? Why should write unit tests?
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sequi
          ipsa harum ut fugit, quos, maiores nostrum ullam libero voluptas enim
          in iure rem sed nihil vero architecto magnam veritatis!
        </p>
      </div>
    </div>
  );
};

export default Blogs;
