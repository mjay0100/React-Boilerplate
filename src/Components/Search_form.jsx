import React, { useRef, useEffect } from "react";
import { useGlobal } from "../Context";

const Search_form = () => {
  const { setSearchTerm } = useGlobal();
  const search = useRef();
  useEffect(() => {
    search.current.focus();
  }, []);

  const cocktailsearch = () => {
    setSearchTerm(search.current.value);
  };
  return (
    <div className="shadow-sm shadow-zinc-400/80 hover:shadow-zinc-700 duration-500 transition-all w-1/2 mt-[5rem] mx-auto p-4 ">
      <form className="text-center grid " onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="name"
          className="text-2xl mt-5 capitalize text-emerald-600"
        >
          search cocktails
        </label>
        <input
          className="w-[60%] mx-auto my-4 p-1  border-2 border-solid border-transparent bg-[#f1f5f8] rounded-sm focus:border-red-500"
          type="text"
          id="name"
          onChange={cocktailsearch}
          ref={search}
          placeholder="search cocktail"
        />
      </form>
    </div>
  );
};

export default Search_form;
