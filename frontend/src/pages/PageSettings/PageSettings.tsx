import React, { lazy, Suspense } from "react";
const Button = lazy(() => import("components/Button/Button"));
const Presentation = lazy(() => import("components/Presentation/Presentation"));
import {
  media_medio_desktop,
  media_tablet,
  media_mini_tablet,
  media_mobile,
} from "global/media-query/media-query-pageContacts";
import { center } from "global/utils/center";
import styled from "styled-components";
import settings from "../../assets/imgs/settings.png";
import Loading from "components/Loading/Loading";
const Container = styled.section`
  height: 100%;
  overflow: hidden;
  .messageBox {
    ${center}
    height: 80%;
    justify-content: space-around;
    gap: 20px;
    img {
      width: 350px;
      height: 250px;
    }
    .form {
      ${center}
      flex-direction: column;
      background: ${({ theme }) => theme.content.pageContacts.contacts.bg};
      box-shadow: ${({ theme }) => theme.content.pageContacts.contacts.shadow};
      border-radius: 10px;
      border: 1px solid
        ${({ theme }) => theme.content.pageContacts.contacts.top};
      padding: 40px;
      gap: 15px;
      input,
      textarea,
      select {
        max-width: 300px;
        min-width: 300px;
        background: transparent;
        color: ${({ theme }) => theme.content.pageContacts.contacts.title};
        border: 1px solid
          ${({ theme }) => theme.content.pageContacts.contacts.top};
        outline: none;
        padding: 10px 20px;
        border-radius: 10px;
      }
      option {
        background: ${({ theme }) => theme.content.bg};
      }
    }
  }
  ${media_medio_desktop}
  ${media_tablet}
  ${media_mini_tablet}
  ${media_mobile}
`;

const PageSettings = () => {
  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <Presentation
          title="Configurações"
          describe="Área reservada para configurar o portfólio, caso tenha acesso, coloque a senha e o email válidos."
        />
        <div className="messageBox">
          <img
            src={settings}
            alt="imagem ilustrativa do isaías no computador"
          />
          <form action="#" className="form" method="POST">
            <input
              required
              placeholder="Seu e-mail"
              type="email"
              name="email"
              id="email"
            />
            <input
              required
              placeholder="Sua senha"
              type="password"
              name="password"
              id="password"
            />
            <Button text="Entrar" />
          </form>
        </div>
      </Suspense>
    </Container>
  );
};

export default PageSettings;
