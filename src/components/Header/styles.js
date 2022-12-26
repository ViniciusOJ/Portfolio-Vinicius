import styled from "styled-components";

export const NavBarContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.4s ease-in-out;
  height: 60px;
  position: fixed;
  backdrop-filter: blur(2px);
  padding: 1rem;
  z-index: 99999;

  @media (max-width: 970px) {
    display: none;
  }
`;

export const List = styled.ul`
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  font-size: 1rem;
  letter-spacing: 1.5px;
  justify-content: space-around;
  list-style: none;
  padding: 1rem;
  flex-direction: row;
  transition: all 0.8s ease-in-out;

  li {
    transform: scale(0.9);
    transition: all 0.2s ease-in-out;
    padding: 5px;
    display: flex;
    align-items: center;

    > svg {
      color: white;
    }

    &:hover {
      transform: scale(1);
      border-bottom: 1px solid #00f6ff;
    }
  }

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: #f7fff7;
    padding: 5px;

    transition: all 0.2s ease-in-out;

    &:hover {
      color: #00f6ff;
    }
  }

  @media (max-width: 970px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  display: none;
  position: fixed;
  z-index: 10;

  > svg {
    font-size: 2rem;
    cursor: pointer;
    color: ${(props) => (props.isVisible ? "#00f6ff" : "white")};
    margin: 10px 10px;
  }

  @media (max-width: 970px) {
    display: initial;
  }
`;
