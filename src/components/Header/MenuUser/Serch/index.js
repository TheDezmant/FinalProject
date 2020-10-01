import React from "react";
import { StyledInput, StyledSerch, SerchImg } from "./units";

const Serch = () => {
  return (
    <StyledSerch>
      <StyledInput type="text" placeholder="Поиск по сайту" />
      <SerchImg
        src="https://img.icons8.com/pastel-glyph/2x/search.png"
        alt=""
      />
    </StyledSerch>
  );
};

export default Serch;
