import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #031b22;

  opacity: 1;
  overflow-x: hidden;
`;

export const InfosC = styled.div`
  width: 100%;
  margin-left: ${(props) => (props.position ? 0 : "-200%")};
  transition: all .5s ease-in;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Aboutus = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  font-size: 1.3rem;
  width: 50%;

  h1 {
    margin: 1rem;
  }

  p {
    text-align: justify;
    padding: 1rem;
  }

  span {
    color: #74d5ef;
  }

  @media (max-width: 854px) {
    font-size: 1rem;
  }

  @media (max-width: 720px) {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 1.5rem;
    text-align: center;
  }
`;

export const ImgContainer = styled.div`
  width: 320px;

  @media (max-width: 720px) {
    display: none;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
