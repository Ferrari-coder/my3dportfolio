import React, { useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { navLinks } from "../constants";

const Footer = () => {
  const [active, setActive] = useState("");

  return (
    <footer className={`${styles.paddingX} w-full bg-primary py-10`}>
      <div className="w-full flex justify-between max-w-7xl mx-auto column">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-24 h-24 object-contain" />
        </Link>
        <div className="flex flex-col items-center gap-8 nocenter">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-10 text-[18px] text_col">
            <p
              className="cursor-pointer hover:text-secondary"
              onClick={() =>
                window.open("https://twitter.com/tamilore_xo", "_blank")
              }
            >
              TWITTER
            </p>
            <p
              className="cursor-pointer hover:text-secondary"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/oluwaferanmi-aiyegbusi-0952b4229/",
                  "_blank"
                )
              }
            >
              LINKEDIN
            </p>
            <p
              className="cursor-pointer hover:text-secondary"
              onClick={() =>
                window.open("https://github.com/Ferrari-coder", "_blank")
              }
            >
              GITHUB
            </p>
            <p
              className="cursor-pointer hover:text-secondary"
              onClick={() =>
                window.open("mailto:oluwaferanmiaiyegbusi@gmail.com", "_blank")
              }
            >
              EMAIL
            </p>
          </div>
        </div>
        <div className="footer-hide"></div>
      </div>
      <div className="border-t-[1px] border-[#aaa6c3] my-10"></div>
      <p className="text-center text-[12px] text-secondary">
        @OLUWAFERANMI AIYEGBUSI 2023
      </p>
    </footer>
  );
};

export default Footer;
