import React from "react";
import styled from "styled-components";
import Skill from "../Skill/Skill";
import { center } from "global/utils/center";
import { ISkill } from "global/interfaces/interfaces";

const Container = styled.div`
  padding-top: 0px;
  width: 202px;
  height: 210px;
  border: 2px solid ${({ theme }) => theme.content.pageSkills.skills.bgDescribe};
  border-radius: 5px;
  position: relative;
  .title {
    margin: auto;
    position: absolute;
    top: -13px;
    right: 40px;
    background: ${({ theme }) => theme.content.bg};
    text-align: center;
    border-radius: 50px;
    width: 120px;
    color: ${({ theme }) => theme.content.pageSkills.skills.top};
  }
  .skill {
    overflow: auto;
    ${center}
    justify-content:center;
    gap: 10px;
    padding: 10px;
    padding-top: 20px;
    height: 200px;
  }
`;

interface IGroups {
  title: string;
  dice: Array<ISkill>;
}
const Groups = ({ title, dice }: IGroups) => {
  return (
    <Container>
      <span className="title">{title}</span>
      <div className="skill">
        {dice.map((skill) => (
          <Skill
            key={skill.id}
            id={skill.id}
            title={skill.title}
            img={skill.img}
            link={skill.link}
          />
        ))}
      </div>
    </Container>
  );
};

export default Groups;
