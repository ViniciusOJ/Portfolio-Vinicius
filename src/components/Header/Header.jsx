import React, { useState } from "react";
import { NavBarContainer, List, RightContainer } from "./styles";
import { IoClose, IoMenu } from "react-icons/io5";
import { GiStarsStack } from "react-icons/gi";

import MenuMobile from "../MenuMobile/MenuMobile";
import {
  MdHome,
  MdAdd,
  MdTextSnippet,
  MdOutlineLocalPhone,
} from "react-icons/md";

function Header({ ...props }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <RightContainer>
        {isVisible ? (
          <IoClose onClick={() => setIsVisible(false)} />
        ) : (
          <IoMenu onClick={() => setIsVisible(true)} />
        )}
      </RightContainer>

      <MenuMobile
        isVisible={isVisible}
        home="pagina inicial"
        about="sobre mim"
        skills="habilidades"
        project="projetos"
        contact="contato"
      >
        <IoClose />
      </MenuMobile>
      <NavBarContainer isVisible={isVisible}>
        <List isVisible={isVisible}>
          <li>
            <MdHome />
            <a href={`#home`}>{props.home}</a>
          </li>
          <li>
            <MdAdd />
            <a href={`#about`}>{props.about}</a>
          </li>
          <li>
            <GiStarsStack />
            <a href={`#skills`}>{props.skils}</a>
          </li>
          <li>
            <MdTextSnippet />
            <a href={`#projects`}>{props.project}</a>
          </li>
          <li>
            <MdOutlineLocalPhone />
            <a href={`#contact`}>{props.contact}</a>
          </li>
        </List>
      </NavBarContainer>
    </>
  );
}

export default Header;
