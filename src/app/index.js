import React from "react";
import Routing from "./Component/Common/Routes";
import { Header } from "./Component/Pages/Navbar/Header";

function MainApp() {
  return (
    <>
      <Header />
      <Routing />
    </>
  );
}

export default MainApp;
