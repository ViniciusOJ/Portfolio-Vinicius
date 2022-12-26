import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%,100%{
		transform:translatey(0)
	}
	50%{
		transform:translatey(-20px)
	}
`;

export const HomeContainer = styled.div`
  width: 100%;
  height:100vh;
  padding: 0 20px;
  justify-content: space-around;
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
  }

  img {
    width: 350px;
    border-radius: 80px;
    animation: ${float} 3.5s ease-in-out infinite;
    filter: grayscale(.6);

    @media (max-width: 860px) {
      width: 200px;
    }
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }

  p {
    color: #00f6ff;
    text-align: left;

    @media (max-width: 480px) {
      text-align: center;
    }
  }

  h1 {
    color: #f7fff7;
    font-size: 3rem;
    letter-spacing: 2px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;

  @media (max-width: 490px) {
    flex-direction: column;
    margin: 1rem auto 0 auto;
  }
`;

export const LinkedinButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: #00f6ff;
  border: 1px solid #00f6ff;
  border-radius: 10px;
  gap: 1rem;
  width: 200px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  transition: all 0.1s ease-in-out;
  transform: scale(0.9);
  cursor: pointer;

  &:hover {
    background-color: #00f6ff;
    color: white;
    transform: scale(1);
  }
`;
