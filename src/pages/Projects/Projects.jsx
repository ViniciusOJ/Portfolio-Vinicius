import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Card, Container, ContainerGeral } from "./style";

function Projects() {
  const [proj, setProj] = useState([]);

  useEffect(() => {
    async function LoadProj() {
      await api
        .get("/repos")
        .then((response) => setProj(response.data))
        .catch((error) => console.log(error));
    }

    LoadProj();
  }, []);

  console.log(proj);

  return (
    <ContainerGeral id="projects">
      <h1>Projetos</h1>
      <Container>
        {proj.map((item) => {
          return (
            <Card key={item.id}>
              <h3>{item.name}</h3>
              <a href={item.clone_url} target="_blank">
                Link do Projeto
              </a>
              <a href={`https://${item.homepage}`} target="_blank">
                Live Server
              </a>
            </Card>
          );
        })}
      </Container>
    </ContainerGeral>
  );
}

export default Projects;
