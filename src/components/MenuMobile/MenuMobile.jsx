import React from "react";
import { NavbarMobile } from "./style";
import {
  MdHome,
  MdAdd,
  MdTextSnippet,
  MdOutlineLocalPhone,
} from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";

function MenuMobile({ isVisible, home, about, project, contact, skills }) {
  return (
    <>
      <NavbarMobile isVisible={isVisible}>
        <ul>
          <li>
            <MdHome />

            <a href={`#home`}>{home}</a>
          </li>
          <li>
            <MdAdd />
            <a href={`#about`}>{about}</a>
          </li>
          <li>
            <GiStarsStack />
            <a href={`#skills`}>{skills}</a>
          </li>
          <li>
            <MdTextSnippet />
            <a href={`#projects`}>{project}</a>
          </li>
          <li>
            <MdOutlineLocalPhone />
            <a href={`#contact`}>{contact}</a>
          </li>
        </ul>
      </NavbarMobile>
    </>
  );
}

export default MenuMobile;
