import { center } from 'global/utils/center';
import React from 'react'
import styled from 'styled-components'
import { FcEngineering, FcOk, FcClock } from "react-icons/fc";
import { media_medio_desktop, media_tablet, media_mini_tablet, media_mobile } from 'global/media-query/media-query-presentation';

const Container = styled.div`
  ${center}
  background:${({ theme }) => theme.content.bg};
  padding-bottom: 15px;
  width: 100%;
  padding: 20px 40px;
  align-self: start;
  justify-content: space-between;
  .status,
  .text {
    ${center}
    flex-direction:column;
    height: 100%;
    .items {
      ${center}
      width:100%;
      margin: 5px 0px;
      gap: 10px;
      justify-content: space-between;
      .icon {
        font-size: 30px;
      }
    }
  }
  .status {
    width: 150px;
  }
  ${media_medio_desktop}
  ${media_tablet}
  ${media_mini_tablet}
  ${media_mobile}
`;

interface IPresentation {
  title: string;
  describe: string;
  icon?: string | undefined
  firstDescribeIcon?: string;
  secondDescribeIcon?: string;
}

const Presentation = ({title, describe,  firstDescribeIcon, secondDescribeIcon, icon}: IPresentation) => {
  return (
    <Container className="presentation">
      <div className="text">
        <h1 className={`${"items"} ${"title"}`}>{title}</h1>
        <p className={`${"items"} ${"describe"}`}>{describe}</p>
      </div>
      <div className="status">
        {icon == undefined ? (
          ""
        ) : (
          <div className='boxItems'>
            <div className={`${"concluded"} ${"items"}`}>
              <p>{firstDescribeIcon}</p>
              <FcOk className="icon" />
            </div>
            <div className={`${"pregress"} ${"items"}`}>
              <p>{secondDescribeIcon}</p>
              {icon == "Construindo" ? (
                <FcEngineering className="icon" />
              ) : (
                <FcClock className="icon" />
              )}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Presentation