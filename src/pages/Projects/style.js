import styled from "styled-components";

export const ContainerGeral = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #031b22;
  text-align: center;
  padding: 2rem;

  h1 {
    color: white;
    margin: 1rem;
    font-size: 2rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

export const Card = styled.div`
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #011015;
  border-radius: 1rem;

  h3 {
    color: white;
  }

  a {
    background-color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 10px;
    text-decoration: none;
    color: #011015;
    font-weight: 600;
    transition: all 0.1s ease-in-out;
    transform: scale(0.9);
    margin: 0.5rem;

    &:hover {
      transform: scale(1);
    }
  }
`;
