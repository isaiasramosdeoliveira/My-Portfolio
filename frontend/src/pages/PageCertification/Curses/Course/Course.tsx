import React from "react";
import styled from "styled-components";
import { FcOk, FcClock } from "react-icons/fc";
import { center } from "global/utils/center";
import { top } from "global/animations/animations";
import { ICourse } from "global/interfaces/interfaces";

const Curse = styled.div`
  ${top}
  display:none;
  position: relative;
  background: ${({ theme }) => theme.content.pageCertification.course.bg};
  box-shadow: ${({ theme }) => theme.content.pageCertification.course.shadow};
  border-top: 1px solid
    ${({ theme }) => theme.content.pageCertification.course.top};
  border-bottom: 1px solid
    ${({ theme }) => theme.content.pageCertification.course.bottom};
  color: ${({ theme }) => theme.content.pageCertification.course.letter};
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  height: 200px;
  margin: 10px;
  img {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    border: 2px solid
      ${({ theme }) => theme.content.pageCertification.course.bgStatus};
  }
  h2 {
    margin-bottom: 10px;
  }
  h4 {
    font-size: 12px;
    width: 230px;
  }
  .describe {
    overflow-x: hidden;
    font-size: 12px;
    padding: 15px 0px;
    height: 100px;
  }
  .status {
    ${center}
    font-weight:600;
    justify-content: space-between;
    padding: 5px 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0px 0px 10px 10px;
    width: 100%;
    border-top: 1px solid
      ${({ theme }) => theme.content.pageCertification.course.top};
    background: ${({ theme }) =>
      theme.content.pageCertification.course.bgStatus};
    .icon {
      font-size: 25px;
    }
  }
  &[data-animation="active"] {
    animation: alternate 800ms top;
  }
`;
export default ({ id, img, name, describe, hours, status }: ICourse) => {
  return (
    <Curse key={id} data-animation={false} className="course">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <div className="describe">{describe}</div>
      <div className="status">
        <div>{hours}h</div>
        {status == false ? (
          <FcClock className="icon" />
        ) : (
          <FcOk className="icon" />
        )}
      </div>
    </Curse>
  );
};
