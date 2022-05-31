import React from "react";
import { useGlobal } from "../Context";
import Cocktail from "./Cocktail";

const List = () => {
  const { loading, cocktails } = useGlobal();

  if (loading) {
    return <h1 className="text-4xl text-center  capitalize">loading...</h1>;
  }
  if (cocktails.length < 1) {
    return <h1 className="text-4xl text-center  capitalize">No match</h1>;
  }
  return (
    <div className="grid grid-cols-3 gap-[2.5rem] w-[70vw] mx-auto mt-[7rem] rounded-lg">
      {cocktails.map((drink) => {
        return <Cocktail key={drink.id} {...drink} />;
      })}
    </div>
  );
};

export default List;
