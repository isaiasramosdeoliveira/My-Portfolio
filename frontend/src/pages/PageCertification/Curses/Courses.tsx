import { center } from "global/utils/center";
import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import Loading from "components/Loading/Loading";
const Button = lazy(() => import("components/Button/Button"));
const Link = lazy(() => import("components/Link/Link"));

const Container = styled.div`
  ${center}
  height: 90%;
  .count,
  .icon {
    ${center}
    position: absolute;
    background: ${({ theme }) => theme.content.pageCertification.course.bg};
    border-left: 1px solid
      ${({ theme }) => theme.content.pageCertification.course.top};
    border-top: 1px solid
      ${({ theme }) => theme.content.pageCertification.course.top};
    box-shadow: ${({ theme }) => theme.content.pageCertification.course.shadow};
    font-size: 16px;
  }
  .count {
    ${center}
    width: 45px;
    height: 45px;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    border-radius: 100px;
  }
  .icon {
    ${center}
    width: 70px;
    height: 70px;
    top: 10px;
    left: 10px;
    border-radius: 100px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 100px;
    }
  }
  .card {
    ${center}
    min-width: 255px;
    height: 310px;
    border-radius: 10px;
    border-top: 1px solid
      ${({ theme }) => theme.content.pageProjects.projects.top};
    background: ${({ theme }) =>
      theme.content.pageProjects.projects.bgDescribe};
    box-shadow: ${({ theme }) => theme.content.pageCertification.course.shadow};
  }
  .btn {
    transition: all 200ms ease-in-out;
    border-top: 1px solid
      ${({ theme }) => theme.content.pageCertification.course.top};
    border-bottom: 1px solid
      ${({ theme }) => theme.content.pageCertification.course.bottom};
    color: ${({ theme }) => theme.content.pageCertification.course.letter};
    background: ${({ theme }) => theme.content.pageCertification.course.bg};
    font-weight: 600;
    position: relative;
    ${center}
    font-size: 18px;
    gap: 15px;
    width: 300px;
    height: 350px;
    margin: 0px 10px;
    &:hover {
      transform: translateY(-20px);
    }
  }
`;
interface ICourses {
  text: string;
  type: string;
  img: string;
}

const Courses = ({ text, type, img }: ICourses) => {
  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <Link to={`/certification?page=${type}`}>
          <Button className={`${"btn"}`}>
            <div className="icon">
              <img src={img} alt="" />
            </div>
            <p className="card">{type}</p>
            <div className="count">10</div>
          </Button>
        </Link>
      </Suspense>
    </Container>
  );
};

export default Courses;
