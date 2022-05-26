import React from "react";
import { Link } from "react-router-dom";
import footer from "../../images/footer.jpg";

const Footer = () => {
  return (
    <footer
      className="footer p-10 bg-base-100 border-t-2 border-black text-base-content w-full"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div>
        <span className="footer-title">Services</span>
        <Link to="/" className="link link-hover">
          Branding
        </Link>
        <Link to="/" className="link link-hover">
          Design
        </Link>
        <Link to="/" className="link link-hover">
          Marketing
        </Link>
        <Link to="/" className="link link-hover">
          Advertisement
        </Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/" className="link link-hover">
          About us
        </Link>
        <Link to="/" className="link link-hover">
          Contact
        </Link>
        <Link to="/" className="link link-hover">
          Jobs
        </Link>
        <Link to="/" className="link link-hover">
          Press kit
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="/" className="link link-hover">
          Terms of use
        </Link>
        <Link to="/" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="/" className="link link-hover">
          Cookie policy
        </Link>
      </div>
      <div className="w-3/5">
        <span className="footer-title">Subscribe Now</span>
        <div className="form-control w-80">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border border-black p-1 rounded-2xl w-full outline-none "
            />
            <button className="btn btn-error btn-sm absolute top-0 right-0 rounded-l-none text-bold text-base-100">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
