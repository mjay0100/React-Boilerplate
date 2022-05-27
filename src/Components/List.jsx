import React from "react";
import { useGlobal } from "../Context";

const List = () => {
  const { loading } = useGlobal();
  if (loading) {
    return (
      <h1 className="text-4xl text-center text-red-500 capitalize">
        loading...
      </h1>
    );
  }
  return <div>List</div>;
};

export default List;
