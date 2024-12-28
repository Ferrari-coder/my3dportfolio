import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState(""); //setActive to keep track of where we are on the page
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex gap-2">
            Oluwaferanmi<span className="sm:block hidden">Aiyegbusi</span>
          </p>
        </Link>
        <ul className="hide list-none flex flex-row gap-10">
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
        <div className="hide flex gap-3 items-center">
          <div
            className="text-[24px] cursor-pointer hover:text-[30px]"
            onClick={() =>
              window.open("https://github.com/Ferrari-coder", "_blank")
            }
          >
            <AiFillGithub />
          </div>
          <div
            className="text-[24px] cursor-pointer hover:text-[30px]"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/oluwaferanmi-aiyegbusi-0952b4229/",
                "_blank"
              )
            }
          >
            <AiFillLinkedin />
          </div>
          <div
            className="text-[24px] cursor-pointer hover:text-[30px]"
            onClick={() =>
              window.open("https://twitter.com/tamilore_xo", "_blank")
            }
          >
            <AiFillTwitterSquare />
          </div>
          <div>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1YDvwvNTbtaUXGvu1f2B7yb5Af8DGp2G-/view",
                  "_blank"
                )
              }
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl border-white border-[1px] hover:bg-slate-600"
            >
              View CV
            </button>
          </div>
        </div>
        <div>
          <div className="show hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[20px] h-[20px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    }font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1YDvwvNTbtaUXGvu1f2B7yb5Af8DGp2G-/view",
                      "_blank"
                    )
                  }
                  className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl border-white border-[1px]"
                >
                  View CV
                </button>
                <div className="flex gap-3">
                  <div
                    className="text-[24px] cursor-pointer hover:text-[30px]"
                    onClick={() =>
                      window.open("https://github.com/Ferrari-coder", "_blank")
                    }
                  >
                    <AiFillGithub />
                  </div>
                  <div
                    className="text-[24px] cursor-pointer hover:text-[30px]"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/oluwaferanmi-aiyegbusi-0952b4229/",
                        "_blank"
                      )
                    }
                  >
                    <AiFillLinkedin />
                  </div>
                  <div
                    className="text-[24px] cursor-pointer hover:text-[30px]"
                    onClick={() =>
                      window.open("https://twitter.com/tamilore_xo", "_blank")
                    }
                  >
                    <AiFillTwitterSquare />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
