import { center } from 'global/utils/center';
import React, { useState, lazy, Suspense } from 'react'
import styled from 'styled-components'
import getSkills from 'ts/skills/getSkills';
import { media_medio_desktop, media_tablet, media_mini_tablet, media_mobile } from 'global/media-query/media-query-pageSkills';
import Loading from 'components/Loading/Loading';
const Groups = lazy(() => import("./Groups/Groups"));
const Presentation = lazy(() => import("components/Presentation/Presentation"));

const Container = styled.section`
  height: 100%;
  overflow-x: hidden;
  padding-bottom: 100px;
  .dice {
    padding-top: 10px;
    width: 100%;
    .skills {
      ${center}
      overflow-x: hidden;
      align-items: start;
      gap: 20px;
      padding: 20px 0px;
      width: 100%;
      height: 250px;
    }
    .range {
      ${center}
      justify-content:space-between;
      width: 100%;
      .text {
        color: ${({ theme }) => theme.content.pageSkills.skills.top};
        text-align: center;
        width: 12%;
      }
      .line {
        width: 43%;
        padding: 0.5px;
        background: ${({ theme }) =>
          theme.content.pageSkills.skills.bgDescribe};
      }
    }
  }
  ${media_medio_desktop}
  ${media_tablet}
  ${media_mini_tablet}
  ${media_mobile}
`;
const PageSkills = () => {
  const [frontend] = useState(getSkills("frontend"))
  const [backend] = useState(getSkills("backend"));
  const [datascience] = useState(getSkills("datascience"));
  return (
    <Container>
      <Suspense fallback={<Loading/>}>
        <Presentation
          title="Habilidades"
          describe="Algumas de minha habilidades."
        />
        <div className="dice">
          <span className="range">
            <span className="line"></span>
            <span className="text">Front-end </span>
            <span className="line"></span>
          </span>

          <div className={`${"skills"} ${"frontend"}`}>
            {frontend[0].skills.map((skill) => (
              <div className="group" key={skill.id}>
                <Groups title={skill.title} dice={skill.groups} />
              </div>
            ))}
          </div>

          {/* <span className="range">
            <span className="line"></span>
            <span className="text">Back-end </span>
            <span className="line"></span>
          </span>

          <div className={`${"skills"} ${"backend"}`}>
            {backend[0].skills.map((skill) => (
              <div className="group" key={skill.id}>
                <Groups title={skill.title} dice={skill.groups} />
              </div>
            ))}
          </div>

          <span className="range">
            <span className="line"></span>
            <span className="text">Data Science</span>{" "}
            <span className="line"></span>
          </span>

          <div className={`${"skills"} ${"datascience"}`}>
            {datascience[0].skills.map((skill) => (
              <div className="group" key={skill.id}>
                <Groups title={skill.title} dice={skill.groups} />
              </div>
            ))}
          </div> */}
        </div>
      </Suspense>
    </Container>
  );
}

export default PageSkills