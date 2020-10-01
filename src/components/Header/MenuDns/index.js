import React from "react";
import { StyledMenuDns, DnsHrefs, DnsHref, MenuDnsImg } from "./units";

const MenuDns = () => {
  return (
    <StyledMenuDns>
      <div>
        <MenuDnsImg
          src="https://s1.iconbird.com/ico/2013/6/280/w512h5121371488614places512.png"
          alt=""
        />
        Саров
      </div>
      <DnsHrefs>
        <DnsHref>Магазины</DnsHref>
        <DnsHref>
          Покупателям
          <img src="" alt="" />
        </DnsHref>
        <DnsHref>Юридическим лицам</DnsHref>
        <DnsHref>Клуб DNS</DnsHref>
      </DnsHrefs>
      <div>
        <MenuDnsImg
          src="https://e7.pngegg.com/pngimages/563/359/png-clipart-mobile-phones-computer-icons-telephone-phone-icon-text-phone-icon.png"
          alt=""
        />
        8-800-555-35-35(с 3:00 до 22:00)
      </div>
    </StyledMenuDns>
  );
};

export default MenuDns;
