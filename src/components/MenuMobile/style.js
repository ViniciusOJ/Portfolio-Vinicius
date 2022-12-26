import styled from "styled-components";

export const NavbarMobile = styled.nav`
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  background: rgb(38, 38, 38);
  background: linear-gradient(
    49deg,
    rgba(38, 38, 38, 0.21332282913165268) 0%,
    rgba(0, 0, 0, 1) 67%
  );
  backdrop-filter: blur(4px);
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  bottom: ${(props) => (props.isVisible ? 0 : "-100%")};
  z-index: 5;

  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    justify-content: center;
  }

  li {
    font-size: 1.4rem;
    text-transform: capitalize;
    transform: scale(0.9);
    transition: all 0.2s ease-in-out;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    > svg {
      font-size: 2rem;
      color: white;
    }

    &:hover {
      transform: scale(1);
      border-bottom: 1px solid #00f6ff;
    }

    a {
      text-decoration: none;
      color: white;
      transition: all 0.2s ease-in;

      &:hover {
        color: #00f6ff;
      }
    }
  }
`;
