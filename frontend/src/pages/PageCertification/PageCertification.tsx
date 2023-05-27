import { center } from "global/utils/center";
import React, { useState, Suspense, lazy } from "react";
import styled from "styled-components";
import {
  media_medio_desktop,
  media_mini_tablet,
  media_mobile,
  media_tablet,
} from "global/media-query/media-query-pageCertification";
import { transition200 } from "global/utils/transitions";
import getCourses from "ts/courses/getCourses";
import Loading from "components/Loading/Loading";
const Presentation = lazy(() => import("components/Presentation/Presentation"));
const Curses = lazy(() => import("pages/PageCertification/Curses/Courses"));

const Container = styled.section`
  height: 100%;
  .presentation {
    ${center}
    padding-bottom:15px;
    width: 100%;
    align-self: start;
    justify-content: space-between;
    .status,
    .text {
      ${center}
      flex-direction:column;
      height: 100%;
      .item {
        ${center}
        width:100%;
        margin: 5px 0px;
        justify-content: space-between;
        .icon {
          font-size: 30px;
        }
      }
    }
    .status {
      width: 150px;
    }
  }
  .dice_of_courses {
    ${center}
    flex-wrap:nowrap;
    ${transition200}
    overflow: hidden;
    align-items: start;
    padding: 10px 0px;
    width: 100%;
    height: 90%;
  }
  ${media_medio_desktop}
  ${media_tablet}
  ${media_mini_tablet}
  ${media_mobile}
`;

const PageCertification = () => {
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);
  const [datascience, setDatascience] = useState(false);
  return (
    <Container>
      <Suspense fallback={<Loading/>}>
        <Presentation
          title="Certificações"
          describe="Alguns dos meus certificados para comprovar meu domínio em tal tecnologia."
          icon="Andamento"
          firstDescribeIcon="Concluído"
          secondDescribeIcon="Andamento"
        />
        <div className="dice_of_courses">
          <Curses
            text="Front-end"
            dice={getCourses("frontend")}
            setElement={setFrontend}
            element={frontend}
          />
          <Curses
            text="Back-end"
            dice={getCourses("backend")}
            setElement={setBackend}
            element={backend}
          />
          <Curses
            text="Data Science"
            dice={getCourses("datascience")}
            setElement={setDatascience}
            element={datascience}
          />
        </div>
      </Suspense>
    </Container>
  );
};

export default PageCertification;
