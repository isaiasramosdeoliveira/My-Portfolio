import Presentation from "components/Presentation/Presentation";
import { center } from "global/utils/center";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

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
`;

const PageBase = () => {
  const [search] = useSearchParams();
  const [type] = useState(search.get("page"));
  return (
    <Container>
      <Presentation
        title={type}
        describe={`Alguns dos meus certificados de ${type} para comprovar meu domínio em tal tecnologia.`}
      />
    </Container>
  );
};

export default PageBase;
