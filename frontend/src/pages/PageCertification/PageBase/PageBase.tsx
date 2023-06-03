import Presentation from "components/Presentation/Presentation";
import { center } from "global/utils/center";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { BsFillReplyFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import getCourses from "ts/courses/getCourses";
import { ICourse } from "global/interfaces/interfaces";
import Course from "../Curses/Course/Course";
const Container = styled.section`
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
  .describes {
    .describe {
      ${center}
      justify-content:space-between;
      padding: 20px 40px;
      background: ${({ theme }) =>
        theme.content.pageProjects.projects.bgDescribe};
      border-top: 1px solid
        ${({ theme }) => theme.content.pageProjects.projects.top};
      .icon {
        cursor: pointer;
        font-size: 30px;
      }
    }
  }
  .dice_of_courses {
    overflow-x: hidden;
    height: 75vh;
    padding: 10px 40px 100px 40px;
    display: flex;
    flex-wrap: wrap;
    .course {
      flex-grow: 1;
      max-width: 355px;
      min-width: 250px;
    }
  }
`;

const PageBase = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const [type] = useState(search.get("page"));
  const [dice, setDice] = useState([]);
  useEffect(() => {
    if (type !== null) {
      const regex = /[^a-zA-Z0-9\s]/g;
      const response = type
        .replace(regex, "")
        .replace(" ", "")
        .toLocaleLowerCase();
      setDice(getCourses(response));
    }
  }, []);
  return (
    <Container>
      <Presentation
        title={type}
        describe={`Alguns dos meus certificados de ${type} para comprovar meu domínio em tal tecnologia.`}
      />
      <div className="describes">
        <div className="describe">
          {" "}
          <p>Certificações / {type}</p>
          <BsFillReplyFill onClick={() => navigate(-1)} className="icon" />
        </div>
      </div>
      <div className="dice_of_courses">
        {dice.map(
          ({ id, describe, hours, name, img, status, type }: ICourse) => (
            <Course
              key={id}
              id={id}
              img={img}
              name={name}
              describe={describe}
              hours={hours}
              status={status}
              type={type}
            />
          )
        )}
      </div>
    </Container>
  );
};

export default PageBase;
