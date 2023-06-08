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
    justify-content:center;
    overflow-x: hidden;
    padding: 20px 20px 100px 20px;
    height: 95%;
    width: 100%;
    .project {
      min-width: 275px;
      flex-grow:1;
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
              link={project.link}
            />
          ))}
        </div>
      </Suspense>
    </Container>
  );
};

export default PageProjects;
