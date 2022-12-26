import styled from "styled-components";

export const FooterDiv = styled.div`
  width: 100%;
  height: 80px;
  background-color: #021015;
  border-top: 2px solid #031b22;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  span {
    color: white;
    font-size: 1.2rem;
  }

  svg {
    transform: scale(0.9);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1);
    }
  }

  @media (max-width: 350px) {
    flex-direction: column;
    height: 140px;
  }
`;

export const Redes = styled.div`
  max-width: 1000px;
  display: flex;
  font-size: 2rem;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
