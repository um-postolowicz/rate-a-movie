import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";

const StartPage = ({ handleInput, handleSearch, inputValue }) => {
  return (
    <>
      <Header />
      <Search
        handleInput={handleInput}
        handleSearch={handleSearch}
        inputValue={inputValue}
      />
    </>
  );
};

export default StartPage;
