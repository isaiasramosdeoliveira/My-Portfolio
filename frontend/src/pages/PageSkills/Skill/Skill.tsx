import { top } from 'global/animations/animations';
import { ISkill } from 'global/interfaces/interfaces';
import { center } from 'global/utils/center';
import { transition200, transition400 } from 'global/utils/transitions';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  ${center}
  ${top}
  ${transition400}
  background: ${({ theme }) => theme.content.pageSkills.skills.bg};
  border-top: 1px solid ${({ theme }) => theme.content.pageSkills.skills.top};
  border-bottom: 1px solid
    ${({ theme }) => theme.content.pageSkills.skills.bottom};
  box-shadow: ${({ theme }) => theme.content.pageSkills.skills.shadow};
  width: 80px;
  height: 80px;
  border-radius: 10px;
  .btn {
    ${transition400}
    color:${({ theme }) => theme.content.pageSkills.skills.title};
    ${center}
    img, .describe {
      ${center}
      margin:auto;
      ${transition400}
    }
    img {
      width: 45px;
      height: 45px;
    }
    .describe {
      text-align:center;
      z-index: 1;
      font-size: 14px;
      min-width: 60px;
      min-height: 60px;
      display: none;
    }
  }
  &:hover {
    .btn {
      ${center}
      ${transition200}
      justify-content: space-between;
      img {
        display: none;
      }
      .describe {
        display: flex;
        animation: alternate 400ms top;
      }
    }
  }
`;



const Skill = ({title, img, link}: ISkill) => {
  return (
    <Container>
      <a className="btn" target="_blank" rel="noreferrer" href={link}>
        <img src={img} alt={`ícone do ${title}`} />
        <p className="describe">{title}</p>
      </a>
    </Container>
  );
}

export default Skill