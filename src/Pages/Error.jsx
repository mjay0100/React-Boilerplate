import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="mx-auto my-[5rem] text-center">
      <h1 className="text-2xl text-center capitalize font-semibold">
        oops, wrong page
      </h1>
      <Link to="/">
        <button className="my-3 mx-auto bg-slate-300 p-3 rounded-md text-center hover:bg-slate-500 hover:text-white transition all duration-500">
          Home page
        </button>
      </Link>
    </section>
  );
};

export default Error;
