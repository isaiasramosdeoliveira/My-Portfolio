import { center } from 'global/utils/center'
import React from 'react'
import styled from 'styled-components'

const LoadingStyled = styled.div`
  ${center}
  width:100%;
  height: 100vh;
  background: ${({ theme }) => theme.content.bg};
  color: ${({ theme }) => theme.content.letter};
`;

const Loading = () => {
  return (
    <LoadingStyled>Loading...</LoadingStyled>
  )
}

export default Loading