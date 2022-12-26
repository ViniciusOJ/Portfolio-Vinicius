import React from "react";
import { FooterDiv, Redes } from "./style";
import { ImWhatsapp, ImLinkedin2 } from "react-icons/im";

function Footer() {
  return (
    <FooterDiv>
      <span>Made by Vinicius Oliveira </span>
      <Redes>
        <a target="_blank" href="https://wa.me/5577981012589">
          <ImWhatsapp
            style={{
              color: "#FFF",
              backgroundColor: "#26D366",
              padding: ".3rem",
              borderRadius: "10px",
            }}
          />
        </a>
        <a href="https://www.linkedin.com/in/viniciusoj/" target="_blank">
          <ImLinkedin2
            style={{
              color: "#FFF",
              backgroundColor: "#0A66C2",
              padding: ".3rem",
              borderRadius: "10px",
            }}
          />
        </a>
      </Redes>
    </FooterDiv>
  );
}

export default Footer;
