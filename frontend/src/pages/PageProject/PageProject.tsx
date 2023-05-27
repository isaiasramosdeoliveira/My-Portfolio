import {
  media_medio_desktop,
  media_mini_tablet,
  media_mobile,
  media_tablet,
} from "global/media-query/media-query-pageProject";
import { center } from "global/utils/center";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import getOnProject from "ts/projects/getOnProject";
import { BsFillReplyFill } from "react-icons/bs";

const PageProject = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [dice] = useState(getOnProject(Number(id)));
  const { title, img, corPrimary, skills, describes, functionalities } =
    dice[0];
  const Container = styled.section`
    height: 100%;
    .header {
      ${center}
      justify-content: space-between;
      padding: 20px 80px;
      img {
        width: 180px;
        height: 180px;
        border-radius: 100%;
      }
      h1 {
        padding: 10px 20px;
        font-size: 60px;
        background: ${corPrimary};
        border-radius: 0px 0px 10px 10px;
      }
    }
    .describe {
      ${center}
      justify-content:space-between;
      padding: 20px 40px;
      background: ${({ theme }) => theme.content.pageProjects.projects.bg};
      border-top: 1px solid
        ${({ theme }) => theme.content.pageProjects.projects.top};
      .icon {
        cursor: pointer;
        font-size: 30px;
      }
    }
    .describes {
      ${center}
      justify-content:space-around;
      align-items:flex-start;
      overflow-x: hidden;
      height: 60%;
      padding: 40px;
      backdrop-filter:blur(3px);
      .box {
        min-height: 250px;
        ul {
          padding-left: 20px;
          li {
            margin: 8px 0px;
          }
        }
        .skills {
          width: 350px;
          padding: 20px 0px;
          .skill {
            ${center}
            gap: 10px;
            margin: 18px 0px;
            justify-content: flex-start;
            img {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
      #imgProject {
        width: 400px;
        height: 250px;
        border-radius: 10px;
      }
    }
    ${media_medio_desktop}
    ${media_tablet}
    ${media_mini_tablet}
    ${media_mobile}
  `;
  return (
    <Container>
      <header className="header" style={{ backgroundColor: `${corPrimary}` }}>
        <img src={img} alt={title} />
        <h1>{title}</h1>
      </header>
      {skills.length == 0 ? (
        <div className="describe">
          {" "}
          <p>Em construção</p>
          <BsFillReplyFill onClick={() => navigate(-1)} className="icon" />
        </div>
      ) : (
        <>
          <div className="describe">
            <p>{describes}</p>
            <BsFillReplyFill onClick={() => navigate(-1)} className="icon" />
          </div>
          <div className="describes">
            <div className="box">
              <h4>Tecnologias utilizadas</h4>
              <div className="skills">
                {skills.map((skill) => (
                  <div className="skill" key={skill.id}>
                    <img
                      src={skill.img}
                      alt="foto da tecnologia usada no projeto"
                    />
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="box">
              <h4>Funcionalidades</h4>
              <div className="skills">
                <ul>
                  {functionalities?.map((functionalitie) => (
                    <li key={functionalitie.id} className="functionalitie">
                      {functionalitie.functionalitie}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img
              id="imgProject"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPbaocmBy5F5IIVfNHP72SGx0PXb6Rk5vaw&usqp=CAU"
              alt="imagem do projeto."
            />
          </div>
        </>
      )}
    </Container>
  );
};

export default PageProject;
