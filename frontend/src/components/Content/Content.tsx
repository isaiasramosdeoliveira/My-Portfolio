import React from "react";
import styled from "styled-components";


interface IContent {
  children: React.ReactElement;
}

const Content = styled.main`
  overflow: hidden;
  background: ${({ theme }) => theme.content.bg};
  color: ${({ theme }) => theme.content.letter};
  background: url(${({ theme }) => theme.content.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  width: 100%;
  * {
    &::-webkit-scrollbar {
      background-color: ${({ theme }) => theme.scroll.bgExtern};
      width: 8px;
      height:8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.scroll.bgIntern};
      border-radius: 50px;
    }
  }
  a {
    color: ${({ theme }) => theme.content.letter};
  }
`;

export default ({ children }: IContent) => {
  return <Content id="Content">{children}</Content>;
};

Content;
