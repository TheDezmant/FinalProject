import React from "react";
import StyledButton from "./units";

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export default Button;
