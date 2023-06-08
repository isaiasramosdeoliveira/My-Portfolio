import React, { lazy, Suspense } from "react";
const Button = lazy(() => import("components/Button/Button"));
import { center } from "global/utils/center";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FcEngineering, FcOk } from "react-icons/fc";
import { IProjects } from "global/interfaces/interfaces";
import Loading from "components/Loading/Loading";

const Container = styled.div`
  padding: 20px;
  overflow: hidden;
  margin: 20px;
  min-width: 270px;
  max-width: 270px;
  flex-grow: 1;
  height: 370px;
  border-radius: 10px;
  background: ${({ theme }) => theme.content.pageProjects.projects.bg};
  border-top: 1px solid
    ${({ theme }) => theme.content.pageProjects.projects.top};
  border-bottom: 1px solid
    ${({ theme }) => theme.content.pageProjects.projects.bottom};
  color: ${({ theme }) => theme.content.pageProjects.projects.letter};
  color: ${({ theme }) => theme.content.pageProjects.projects.title};
  a {
    color: ${({ theme }) => theme.content.pageProjects.projects.letter};
  }
  box-shadow: ${({ theme }) => theme.content.pageProjects.projects.shadow};
  .title {
    ${center}
    justify-content:space-between;
    h2 {
      font-size: 20px;
    }
    .icon {
      font-size: 25px;
    }
    margin-bottom: 15px;
  }

  img {
    display: flex;
    margin: auto;
    width: 215px;
    height: 215px;
    border-radius: 5px;
  }
  .btns {
    ${center}
    padding: 10px;
    gap: 12px;
    margin: 20px -20px 0px -20px;
    border-top: 1px solid
      ${({ theme }) => theme.content.pageProjects.projects.top};
    background: ${({ theme }) =>
      theme.content.pageProjects.projects.bgDescribe};
    .btn {
      border-top: 1px solid
        ${({ theme }) => theme.content.pageProjects.projects.top};
      border-bottom: 1px solid
        ${({ theme }) => theme.content.pageProjects.projects.bottom};
      padding: 0px;
      background: ${({ theme }) =>
        theme.content.pageProjects.projects.bgButton};
      &:hover {
        background: ${({ theme }) => theme.content.pageProjects.projects.hover};
      }
      a {
        color: ${({ theme }) => theme.content.pageProjects.projects.title};
        ${center}
        padding: 15px;
      }
      ${center}
      width: 120px;
      white-space: nowrap;
    }
  }
`;

const Projects = ({ id, title, status, img, link }: IProjects) => {
  return (
    <Container className={`${"project"}`}>
      <Suspense fallback={<Loading />}>
        <div className="title">
          <h2>{title}</h2>
          {status ? (
            <FcOk className="icon" />
          ) : (
            <FcEngineering className="icon" />
          )}
        </div>
        <img src={img} alt={title} />
        <div className="btns">
          <Button className={`${"btn"}`}>
            <a href={link} target="_blank" rel="noreferrer">
              Ver projeto
            </a>
          </Button>
          <Button className={`${"btn"}`}>
            <Link to={`/projects/${id}`}>Descrição</Link>
          </Button>
        </div>
      </Suspense>
    </Container>
  );
};

export default Projects;
