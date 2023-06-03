import { center } from "global/utils/center";
import React, { useState, lazy, Suspense } from "react";
import styled from "styled-components";
import { transition200 } from "global/utils/transitions";
import getProjects from "ts/projects/getProjects";
import {
  media_medio_desktop,
  media_mini_tablet,
  media_mobile,
  media_tablet,
} from "global/media-query/media-query-pageProjects";
import Loading from "components/Loading/Loading";
const Presentation = lazy(() => import("components/Presentation/Presentation"));
const Projects = lazy(() => import("./Projects/Projects"));

const Container = styled.section`
  height: 100%;
  overflow: hidden;
  .projects {
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    position: relative;
    ${transition200}
    align-items:start;
    overflow-x: hidden;
    height: 95%;
    padding: 10px 40px 100px 40px;
    width: 100%;
    .project {
      min-width: 260px;
      flex-grow:1;
    }
    &::before {
      position: fixed;
      width: 100%;
      content: "";
      padding: 15px;
      margin-top: -10px;
      background: linear-gradient(
        to bottom,
        ${({ theme }) => theme.content.bg},
        transparent 40%
      );
    }
  }
  ${media_medio_desktop}
  ${media_tablet}
  ${media_mini_tablet}
  ${media_mobile}
`;

const PageProjects = () => {
  const [dice] = useState(getProjects());
  return (
    <Container>
      <Suspense fallback={<Loading/>}>
        <Presentation
          title={"Projetos"}
          describe={
            "Meus principais projetos utilizando todo o meu conhecimento."
          }
          firstDescribeIcon="Concluído"
          icon="Construindo"
          secondDescribeIcon="Construindo"
        />
        <div className="projects">
          {dice.map((project) => (
            <Projects
              key={project.id}
              id={project.id}
              title={project.title}
              describe={project.describes}
              img={project.img}
              status={project.status}
            />
          ))}
        </div>
      </Suspense>
    </Container>
  );
};

export default PageProjects;
