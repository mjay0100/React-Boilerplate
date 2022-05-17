import React from "react";
import { useGlobal } from "../Context";
import Search_form from "./Components/Search_form";
import List from "./Components/List";
const Home = () => {
  return (
    <div>
      <Search_form />
      <List />
    </div>
  );
};

export default Home;
