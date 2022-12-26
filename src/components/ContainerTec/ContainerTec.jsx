import React from "react";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { ContainerTecs, DivGeral } from "./style";

function ContainerTec() {
  return (
    <DivGeral>
      <ContainerTecs>
        <IoLogoHtml5 style={{ color: "#D84924", fontSize: "4rem" }} />
        <h6 style={{ color: "#D84924" }}>HTML 5</h6>

        <IoLogoCss3 style={{ color: "#0066B6", fontSize: "4rem" }} />

        <IoLogoJavascript style={{ color: "#EAD41C", fontSize: "4rem" }} />

        <RiReactjsLine style={{ color: "#5CCFEE", fontSize: "4rem" }} />

        <SiStyledcomponents style={{ color: "#F2C548", fontSize: "4rem" }} />

        <FaGitAlt style={{ color: "#E44C30", fontSize: "4rem" }} />
      </ContainerTecs>
    </DivGeral>
  );
}

export default ContainerTec;
