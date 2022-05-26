import React from "react";
import bg from "../../images/contact.jpg";

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="font-serif text-white p-6 md:p-16"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl md:text-5xl pt-2 pb-8">Contact Us</h1>

      {/* ________form start__________  */}
      <div className="w-full md:w-1/2 mx-auto">
        <form onSubmit={handleContact} className="flex flex-col">
          <input
            className="p-4 my-3 rounded-lg outline-0 text-black"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <input
            className="p-4 my-3 rounded-lg outline-0 text-black"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            className="p-2 mt-3 mb-6 rounded-lg outline-0 text-black"
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          {/* ___btn_____ */}
          <button className="btn btn-info text-base-100 font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
