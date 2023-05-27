import { center } from 'global/utils/center';
import React, { useState, lazy, Suspense } from 'react'
import styled from 'styled-components'
import aboutMe from "../../assets/imgs/aboutMe.png"
import { media_medio_desktop, media_tablet, media_mini_tablet,media_mobile } from 'global/media-query/media-query-pageAboutMe';
import Loading from 'components/Loading/Loading';
const Button = lazy(() => import("components/Button/Button"));
const Presentation = lazy(() => import("components/Presentation/Presentation"));

const Container = styled.section`
  height: 100%;
  overflow: hidden;
  .box {
    ${center}
    gap:20px;
    height: 80%;
    img {
      height: 450px;
    }
    .frame {
      position: relative;
      backdrop-filter: blur(2px);
      border-radius: 10px;
      .text {
        color: ${({ theme }) => theme.content.pageAboutMe.aboutMe.title};
        height: 380px;
        width: 600px;
      }
      .btns {
        ${center}
        background: ${({ theme }) => theme.content.bg};
        position: absolute;
        border-radius: 0px 0px 10px 10px;
        bottom: -30px;
        right: 170px;
        padding: 10px;
        gap: 12px;
        .btn {
          padding: 10px 15px;
          ${center}
          width: 115px;
          white-space: nowrap;
        }
      }
    }
  }
  ${media_medio_desktop}
  ${media_tablet}
  ${media_mini_tablet}
  ${media_mobile}
`;

const text_1 = (
  <p>
    Minha jornada começou em 2020 quando entrei para uma escola de computação
    gráfica. Tudo mudou quando meu professor citou a programação, a partir daí
    pesquisei bastante e percebi ser o que eu queria fazer, não pela a alta
    demanda, e sim por amar a área.
    <br />
    <br />
    Em 2021 entrei para a faculdade cursando Engenharia de software e comecei os
    meus estudos fervorosamente. Ganhei vários certificados, fiz vários projetos
    e fui descobrindo minha especialização, que logo seria desenvolvedor
    Front-end.
    <br />
    <br />
    Desde então tenho estudado bastante tudo que engloba a área de TI e tentado
    entrar no mercado de trabalho.
  </p>
);

const text_2 = (
  <p>
    Atualmente cursando Engenharia de Software e me especializando em
    desenvolvimento Front-end. Procuro minha primeira oportunidade de trabalho
    para demonstrar minhas habilidades.
  </p>
);

const PageAboutMe = () => {
  const [status, setStatus] = useState(false);
  return (
    <Container>
      <Suspense fallback={<Loading/>}>
        <Presentation
          title="Sobre mim"
          describe="Um pouco sobre minha trajetória."
        />
        <article className="box">
          <img src={aboutMe} alt="Imagem ilustrativa do isaias" />
          <div className="frame">
            <div className="text">{status ? text_2 : text_1}</div>
            <div className="btns">
              <Button
                className={`${"btn"}`}
                text="História"
                functions={() => setStatus(false)}
              ></Button>
              <Button
                className={`${"btn"}`}
                text="Resumo"
                functions={() => setStatus(true)}
              ></Button>
            </div>
          </div>
        </article>
      </Suspense>
    </Container>
  );
}

export default PageAboutMe