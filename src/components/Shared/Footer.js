import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer
      className="footer p-10 border-t-2 bg-gradient-to-r from-slate-800 to-gray-500 text-base-100 w-full"
      // style={{
      //   backgroundImage: `url(${footer})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
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
        <Link to="/" className="link link-hover">
          Branding
        </Link>
        <Link to="/" className="link link-hover">
          Design
        </Link>
        <Link to="/" className="link link-hover">
          Marketing
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
          Cookie
        </Link>
        <Link to="/" className="link link-hover">
          Terms
        </Link>
        <Link to="/" className="link link-hover">
          Privacy
        </Link>
      </div>
      <div className="w-3/5">
        <div className="form-control w-80">
          <div className="relative">
            <img
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
              data-aos-delay="100"
              src={logo}
              alt="logo"
            />
            <p className="text-base-300 font-bold">
              Copyright &copy; 2022 Ryan Instrument
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
