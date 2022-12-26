import styled from "styled-components";

export const CForm = styled.div`
  width: 90%;
  margin: 2rem auto;
  height: 90vh;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Redes = styled.div`
  max-width: 1000px;
  display: flex;
  font-size: 3rem;
  margin: 1rem 0 .4rem 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
