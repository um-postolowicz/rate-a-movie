import React, { useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Search from "../components/Search";

const MainPage = () => {
  const [isModalVisible, setIsMobileVisible] = useState(true);
  return (
    <div className="wrapper">
      <Header />
      <Search />
      <Modal
        closeModal={() => setIsMobileVisible(false)}
        isModalVisible={isModalVisible}
      />
    </div>
  );
};

export default MainPage;
