import React from "react";
import StyledUserHref from "./units";
import UserHrefImg from "./UserHrefImg";

const UserHref = (props) => {
  return (
    <StyledUserHref>
      <UserHrefImg img={props.img} />
      {props.text}
    </StyledUserHref>
  );
};

export default UserHref;
