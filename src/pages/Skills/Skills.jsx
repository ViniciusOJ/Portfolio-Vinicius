import React, { useState, useEffect } from "react";
import { Cont, Container, Main, SkillsList } from "./styles";
import { SiBootstrap } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3, IoMdClock } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { FaHandsHelping } from "react-icons/fa";
import { GiPuzzle, GiTalk } from "react-icons/gi";
import { BsLightningFill } from "react-icons/bs";

function Skills() {
  const [scrollY, setScrollY] = useState({
    width: undefined,
  });
  const [position, setPosition] = useState(false);

  useEffect(() => {
    function handleResize() {
      setScrollY({
        width: window.pageYOffset,
      });
    }
    // Monitore o scroll da janela e atualize setScrollY no estado
    window.addEventListener("scroll", handleResize);
    handleResize();

    if (scrollY.width < 480) {
      setPosition(false);
    }

    if (scrollY.width >= 880) {
      setPosition(true);
    }

    return () => window.removeEventListener("scroll", handleResize);
  }, [scrollY.width]);

  return (
    <Main position={position} id="skills">
      <h1>Minhas Habilidades</h1>

      <Cont>
        <h4>Hard Skills</h4>
        <Container>
          <SkillsList>
            <IoLogoHtml5 className="skillHtml" />
            <h6 style={{ fontSize: "1.2rem", color: "white" }}>HTML</h6>
          </SkillsList>

          <SkillsList>
            <IoLogoCss3 className="skillCss" />
            <h6 style={{ fontSize: "1.2rem", color: "white" }}>CSS</h6>
          </SkillsList>

          <SkillsList>
            <SiBootstrap className="skillBootstrap" />
            <h6 style={{ fontSize: "1.2rem", color: "white" }}>Bootstrap</h6>
          </SkillsList>

          <SkillsList>
            <TbBrandJavascript className="skillJavascript" />
            <h6 style={{ fontSize: "1.2rem", color: "white" }}>Javascript</h6>
          </SkillsList>

          <SkillsList>
            <RiReactjsLine className="skillReact" />
            <h6 style={{ fontSize: "1.2rem", color: "white" }}>React</h6>
          </SkillsList>
        </Container>
      </Cont>
      <Cont>
        <h4>Soft Skills</h4>
        <Container>
          <SkillsList>
            <HiLightBulb className="skillLight" />
            <h6 style={{ fontSize: "1.2rem", color: "white" }}>Criatividade</h6>
          </SkillsList>

          <SkillsList>
            <GiPuzzle className="skillPuzzle" />
            <h6 style={{ color: "white" }}>Resolução de Problemas</h6>
          </SkillsList>

          <SkillsList>
            <GiTalk className="skillTalk" />
            <h6 style={{ fontSize: "1.2rem", color: "white" }}>Comunicação</h6>
          </SkillsList>

          <SkillsList>
            <FaHandsHelping className="skillHelping" />
            <h6 style={{ fontSize: "1.2rem", color: "white" }}>Colaboração</h6>
          </SkillsList>

          <SkillsList>
            <IoMdClock className="skillClock" />
            <h6 style={{ fontSize: "1.2rem", color: "white" }}>Pontualidade</h6>
          </SkillsList>

          <SkillsList>
            <BsLightningFill className="skillLight" />
            <h6 style={{ fontSize: "1.2rem", color: "white" }}>Proatividade</h6>
          </SkillsList>
        </Container>
      </Cont>
    </Main>
  );
}

export default Skills;
