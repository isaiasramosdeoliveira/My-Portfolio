import React, {memo} from "react";
import styled from "styled-components";

interface IButton {
  children?: React.ReactNode | undefined;
  text?: string;
  className?: string;
  id?: string;
  functions?(e?: any): void;
}

const Container = styled.button`
  cursor: pointer;
  padding: 14px 56px;
  border-radius: 10px;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.buttons.top};
  border-bottom: 1px solid ${({ theme }) => theme.buttons.bottom};
  background: ${({ theme }) => theme.buttons.bg};
  box-shadow: ${({ theme }) => theme.buttons.shadow};
  color: ${({ theme }) => theme.buttons.letter};
  &:hover {
    background: ${({ theme }) => theme.buttons.hover};
  }
`;

const Button = ({
  text,
  className,
  id,
  children,
  functions,
}: IButton) => {
  return (
    <Container
      id={id}
      className={className}
      onClick={functions}
    >
      {text}
      {children}
    </Container>
  );
};

export default memo(Button)