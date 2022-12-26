import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 10px;
  gap: 1rem;
  width: 200px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  padding: .5rem .8rem;
  transition: all 0.1s ease-in-out;
  transform: scale(0.9);
  cursor: pointer;

  &:hover {
    color: black;
    background-color: white;
    transform: scale(1);
  }
`;
