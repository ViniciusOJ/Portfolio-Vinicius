import React from "react";
import { HomeContainer, Texts, DivButton, LinkedinButton } from "./styles";
import giphy from "../../assets/giphy.gif";
import Typical from "react-typical";
import { IoLogoLinkedin } from "react-icons/io5";
import curriculum from "../../assets/CurriculoDEV.pdf";
import ButtonDownload from "../../components/ButtonDownload/ButtonDownload";

function Home() {
  return (
    <>
      <HomeContainer id="home">
        <Texts>
          <Typical
            loop={Infinity}
            steps={[
              "Ola, eu sou",
              1000,
              "Hello, I am",
              1000,
              "Hola yo soy",
              1000,
            ]}
          />
          <h1>Vinicius Oliveira</h1>

          <DivButton>
            <ButtonDownload
              href={curriculum}
              download={"CurriculoDEV"}
              text="Download CV"
              color={"white"}
              backgroundColor={"white"}
            />
            <LinkedinButton
              target="_blank"
              href="https://www.linkedin.com/in/viniciusoj/"
            >
              Linkedin <IoLogoLinkedin />
            </LinkedinButton>
          </DivButton>
        </Texts>
        <img src={giphy} />
      </HomeContainer>
    </>
  );
}

export default Home;
