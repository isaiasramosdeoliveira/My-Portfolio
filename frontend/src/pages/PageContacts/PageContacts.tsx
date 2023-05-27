import React, {lazy, Suspense} from "react";
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
import contacts from "../../assets/imgs/contacts.png";
import Loading from "components/Loading/Loading";

const Container = styled.section`
  height: 100%;
  overflow-x: hidden;
  .messageBox {
    ${center}
    height: 80%;
    justify-content: space-around;
    gap: 20px;
    img {
      width: 350px;
      height: 350px;
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

const PageContacts = () => {
  return (
    <Container>
      <Suspense fallback={<Loading/>}>
        <Presentation title="Contatos" describe="Me envie uma mensagem." />
        <div className="messageBox">
          <img
            src={contacts}
            alt="imagem ilustrativa do isaías no computador"
          />
          <form
            action="https://formsubmit.co/isaias.ramos.olive@gmail.com"
            className="form"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="https://iromyportfolio.vercel.app/"
            />
            <select required name="selectMatters" id="selectmatters">
              <option value="">Selecione o assunto</option>
              <option value="elogios">Elogio</option>
              <option value="melho rias">Melhorias UX e UI</option>
              <option value="bugs">Relatar bugs</option>
              <option value="outro">Outro</option>
            </select>
            <input
              required
              placeholder="Seu nome"
              type="text"
              name="name"
              id="name"
            />
            <textarea
              placeholder="Assunto..."
              name="matters"
              id="matters"
              rows={5}
              required
            ></textarea>
            <Button text="Enviar" />
          </form>
        </div>
      </Suspense>
    </Container>
  );
};

export default PageContacts;
