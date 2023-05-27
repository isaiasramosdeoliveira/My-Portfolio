import { center } from "global/utils/center";
import React, {lazy, Suspense} from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import styled from "styled-components";
import { transition200 } from "global/utils/transitions";
import { ICourse } from "global/interfaces/interfaces";
import Loading from "components/Loading/Loading";
const Curse = lazy(() => import("./Course/Course"));
const Button = lazy(() => import("components/Button/Button"));


const Container = styled.div`
  height: 90%;
  .btn {
    ${center}
    font-size: 16px;
    gap: 15px;
    width: 350px;
    margin: 0px 10px;
  }
  .courses {
    ${transition200}
    overflow-x: hidden;
    ${center}
    align-items:start;
    width: 350px;
    margin: 10px;
    height: 100%;
    padding-bottom: 10px;
  }
`;
interface ICourses {
  text: string;
  setElement(element: boolean): void
  element?: boolean;
  dice?: any;
}

const Courses = ({ text, setElement, element, dice }: ICourses) => {
  const handleActiveCurses = (e: any) => {
    setElement(element == false ? true : false);
    const dice = e.target.parentElement as HTMLDivElement;
    const courses = dice.querySelectorAll(".course") as NodeListOf<HTMLElement>;
    courses.forEach((course) => {
      setTimeout(() => {
        course.setAttribute("data-animation", "none");
        course.style.display = "none";
      });
    });
    let mult = 0;
    courses.forEach((course) => {
      setTimeout(() => {
        course.setAttribute("data-animation", "active");
        course.style.display = "block";
      }, mult);
      mult += 60;
    });
  };
  return (
    <Container>
      <Suspense fallback={<Loading/>}>
        <Button
          functions={(e: EventTarget) => handleActiveCurses(e)}
          className={`${"btn"}`}
          text={text}
        >
          {element ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </Button>
        <div
          style={element ? { display: "flex" } : { display: "none" }}
          className="courses"
        >
          {dice?.map((course: ICourse) => (
            <Curse
              key={course.id}
              img={course.img}
              type={course.type}
              name={course.name}
              describe={course.describe}
              hours={course.hours}
              status={course.status}
            />
          ))}
        </div>
      </Suspense>
    </Container>
  );
};

export default Courses;
