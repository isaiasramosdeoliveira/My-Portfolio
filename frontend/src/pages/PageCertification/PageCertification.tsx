import { center } from "global/utils/center";
import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import frontend from "../../assets/imgs/frontend.png"
import backend from "../../assets/imgs/backend.png";
import datascience from "../../assets/imgs/datascience.png";
import {
  media_medio_desktop,
  media_mini_tablet,
  media_mobile,
  media_tablet,
} from "global/media-query/media-query-pageCertification";
import { transition200 } from "global/utils/transitions";
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
    height: 100vh;
  }
  ${media_medio_desktop}
  ${media_tablet}
  ${media_mini_tablet}
  ${media_mobile}
`;

const PageCertification = () => {
  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <Presentation
          title="Certificações"
          describe="Escolha um tópico para ver todos os certificados."
        />
        <div className="dice_of_courses">
          <Curses text="Front-end" type="Front-end" img={frontend} />
          <Curses text="Back-end" type="Back-end" img={backend} />
          <Curses text="Data Science" type="Data Science" img={datascience} />
        </div>
      </Suspense>
    </Container>
  );
};

export default PageCertification;
