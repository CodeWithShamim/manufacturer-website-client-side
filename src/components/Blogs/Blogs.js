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
          Avoid inline style attributes: The browser often invests a lot of time
          rendering, when styles are implied inline. Scripting and rendering
          take time because the browser has to plan all the React style rules to
          the CSS properties. Creating a separate style.js file and importing it
          into the component is a faster method. <br />
          <br />
          Using react fragments decreases the no. of additional tags and
          satisfies the necessity of having a single parent element in the
          component. If we use the inline function, the function will generate a
          new instance of the object in every render and there will be multiple
          instances of these functions which will lead to consuming more time in
          garbage collection. To optimize that we can define functions outside
          the render method and call them wherever required.
        </p>
      </div>

      {/* ___question 2___  */}
      <div className="mt-10">
        <h1 className="text-lg md:xl text-left text-gray-black font-semibold pb-2">
          What are the different ways to manage a state in a React application?
        </h1>
        <p>
          There are four main types of state you need to properly manage in your
          React apps: 1. Local state <br />
          2. Global state <br />
          3. Server state br 4. <br />
          4. URL state
        </p>
      </div>

      {/* ___question 3___  */}
      <div className="mt-10">
        <h1 className="text-lg md:xl text-left text-gray-black font-semibold pb-2">
          How does prototypical inheritance work?
        </h1>
        <p>
          When we read a property from object, and it’s missing, JavaScript
          automatically takes it from the prototype. In programming, this is
          called “prototypal inheritance”. And soon we’ll study many examples of
          such inheritance, as well as cooler language features built upon it.
          In JavaScript, objects have a special hidden property that is either
          null or references another object. That object is called “a prototype.
        </p>
      </div>

      {/* ___question 4___  */}
      <div className="mt-10">
        <h1 className="text-lg md:xl text-left text-gray-black font-semibold pb-2">
          Why you do not set the state directly in React?
        </h1>
        <p>
          when we update the state of a component all it's children are going to
          be rendered as well. or our entire component tree rendered. but when i
          say our entire component tree is rendered that doesn’t mean that the
          entire DOM is updated. when a component is rendered we basically get a
          react element, so that is updating our virtual dom. React will then
          look at the virtual DOM, it also has a copy of the old virtual DOM,
          that is why we shouldn’t update the state directly, so we can have two
          different object references in memory, we have the old virtual DOM as
          well as the new virtual DOM. then react will figure out what is
          changed and based on that it will update the real DOM accordingly .
        </p>
      </div>

      {/* ___question 5___  */}
      <div className="mt-10">
        <h1 className="text-lg md:xl text-left text-gray-black font-semibold pb-2">
          What is a unit test? Why should write unit tests?
        </h1>
        <p>
          Unit testing is an important step in the development process in which
          the smallest testable parts of an application, called units, are
          individually and independently scrutinized for proper operation. This
          testing methodology is done during the development process by the
          software developers and sometimes QA staff. The main objective of unit
          testing is to isolate written code to test and determine if it works
          as intended. <br />
          <br />
          <span>How unit tests work:-</span> A unit test typically comprises of
          three stages: plan, cases and scripting and the unit test itself. In
          the first step, the unit test is prepared and reviewed. The next step
          is for the test cases and scripts to be made, then the code is tested.
          Test-driven development requires that developers first write failing
          unit tests. Then they write code and refactor the application until
          the test passes. TDD typically results in an explicit and predictable
          code base. Each test case is tested independently in an isolated
          environment, as to ensure a lack of dependencies in the code. The
          software developer should code criteria to verify each test case, and
          a testing framework can be used to report any failed tests. Developers
          should not make a test for every line of code, as this may take up too
          much time. Developers should then create tests focusing on code which
          could affect the behavior of the software being developed.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
