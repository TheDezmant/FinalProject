import React from "react";
import { StyledMenuUser, UserHrefs } from "./units";
import UserHref from "./UserHref";
import Button from "./Button";
import Serch from "./Serch";

const MenuUser = () => {
  return (
    <StyledMenuUser>
      <img
        src="https://upload.wikimedia.org/wikipedia/ru/5/51/DNS_logo.png"
        alt=""
        width="300px"
        height="50px"
      />
      <Serch />
      <UserHrefs>
        <UserHref
          img="https://s1.iconbird.com/ico/2014/1/613/w256h2561390849392combo256.png"
          text="Сравнить"
        />
        <UserHref
          img="https://img.icons8.com/ios/452/like.png"
          text="Избранное"
        />
        <UserHref
          img="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11001410572/original/shopping109.png?1455021247"
          text="Корзина"
        />
        <UserHref
          img="https://s1.iconbird.com/ico/2014/1/607/w256h2561390848328appointmentreminders256.png"
          text=""
        />
      </UserHrefs>
      <Button>Войти</Button>
    </StyledMenuUser>
  );
};

export default MenuUser;
