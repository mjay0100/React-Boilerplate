import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <div className=" mx-auto my-auto text-center rounded-lg shadow-md shadow-slate-500/60 hover:shadow-slate-600 duration-300 transition-all">
      <img className=" object-cover rounded md" src={image} alt={name} />
      <div className="p-4 text-zinc-700 capitalize">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>
          <button className="p-2 cursor-pointer rounded-md mt-2 bg-zinc-500/70 hover:bg-zinc-600 duration-300 text-white ">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
