import React from "react";
import StyledHeader from "./units";
import MenuDns from "./MenuDns";
import MenuUser from "./MenuUser";

const Header = () => {
  return (
    <>
      <MenuDns />
      <MenuUser />
    </>
  );
};

export default Header;
