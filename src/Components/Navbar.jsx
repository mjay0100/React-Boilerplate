import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between  mx-auto items-center h-[5rem] p-4 shadow-md shadow-slate-300 ">
      <div className="w-[85vw] items-center flex justify-between mx-auto ">
        <Link to="/">
          <img src={logo} className="w-3/5" />
        </Link>
        <ul className="flex items-center gap-5 text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
