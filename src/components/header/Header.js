import React from "react";
import Topbar from "./topbar/Topbar";
import BottomBar from "./bottombar/BottomBar";
import Navbar from "./navbar/Navbar";
import Menumobile from "../menumobile/Menumobile";

function Header() {
  return (
    <>
      <Topbar />
      <BottomBar />
      <Menumobile />
      <Navbar />
    </>
  );
}

export default Header;
