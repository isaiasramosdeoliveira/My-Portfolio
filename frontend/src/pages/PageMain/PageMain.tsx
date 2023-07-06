import React, { lazy, Suspense, useState } from "react";
import styled from "styled-components";
import profile from "../../assets/imgs/profile-pic.png";
import { center } from "global/utils/center";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillGithub,
} from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import {
  corPrimaryBlack_3,
  corPrimaryBlack_4,
  letter,
} from "global/variables/variables";
import { transition200 } from "global/utils/transitions";
import {
  media_desktop,
  media_medio_desktop,
  media_mini_tablet,
  media_mobile,
  media_tablet,
} from "global/media-query/media-query-pageMain";
import getTrails from "ts/trail/getTrails";
const Button = lazy(() => import("components/Button/Button"));

const Container = styled.section`
  ${center}
  flex-wrap:nowrap;
  overflow-x: hidden;
  height: 100%;
  .box {
    position: relative;
    ${center}
    flex-direction: column;
    width: 380px;
    height: 360px;
    border-top: 1px dashed ${({ theme }) => theme.content.pageMain.main.top};
    border-bottom: 1px dashed ${({ theme }) => theme.content.pageMain.main.top};
    h2 {
      position: absolute;
      top: 10px;
    }
    &:nth-child(1) {
      border-right: 1px dashed ${({ theme }) => theme.content.pageMain.main.top};
    }
    &:nth-child(3) {
      border-left: 1px dashed ${({ theme }) => theme.content.pageMain.main.top};
    }
  }
  .describe {
    position: absolute;
    top: 60px;
    font-size: 12px;
  }
  .trail {
    ${center}
    flex-direction:column;
    gap: 12px;
    width: 100%;

    .skills {
      .skill {
        width: 32px;
        height: 32px;
        filter: contrast(0);
        &:nth-child(4) {
          filter: contrast(1);
        }
      }
    }
    .dates {
      .date {
        font-size: 14px;
      }
    }
    .skills,
    .dates {
      ${center}
      width:100%;
      justify-content: space-around;
    }
    .line {
      width: 90%;
      background: ${({ theme }) => theme.content.pageMain.main.top};
      padding: 0.5px;
    }
  }
  .profile {
    ${center}
    width: 100%;
    padding: 32px;
    img {
      ${center}
      width: 326px;
      height: 326px;
      border-radius: 100%;
      border: 8px solid ${({ theme }) => theme.content.pageMain.main.bgButton};
      box-shadow: ${({ theme }) => theme.buttons.shadow};
    }
  }
  .btns {
    ${center}
    .socialMedia {
      ${center}
      gap: 10px;
      #whatsapp:hover {
        ${transition200}
        background: #3edb5a;
        box-shadow: 0px 0px 10px #3edb5b81;
        color: black;
      }
      #linkedin:hover {
        ${transition200}
        box-shadow: 0px 0px 10px #0a66c2af;
        background: #0a66c2;
      }
      #instagram:hover {
        ${transition200}
        box-shadow: 0px 0px 10px #f200697f;
        background: #f20067;
      }
      #github:hover {
        ${transition200}
        box-shadow: 0px 0px 10px ${corPrimaryBlack_4};
        background: ${corPrimaryBlack_3};
      }
      .btn {
        flex: 1;
        min-width: 160px;
        padding: 10px;
        color: ${({ theme }) => theme.content.pageMain.main.letter};
        border-top: 1px solid ${({ theme }) => theme.content.pageMain.main.top};
        border-bottom: 1px solid
          ${({ theme }) => theme.content.pageMain.main.bottom};
        ${center}
        background:${({ theme }) => theme.content.pageMain.main.bgButton};
        ${center};
        justify-content: start;
        gap: 10px;
        .icon {
          font-size: 25px;
        }
        &:hover {
          border-top: 1px solid transparent;
          border-bottom: 1px solid transparent;
          color: ${letter};
        }
      }
    }
  }
  footer {
    font-family: "Dancing Script", cursive;
    font-size: 30px;
    position: absolute;
    bottom: 20px;
  }
  ${media_mini_tablet}
  ${media_tablet}
  ${media_mobile}
  ${media_medio_desktop}
  ${media_desktop}
`;
const PageMain = () => {
  const [dice] = useState(getTrails());
  return (
    <Container>
      <Suspense>
        <div className="box">
          <h2>Trilha de estudos</h2>
          <p className="describe">Me acompanhe na minha jornada.</p>
          <div className="trail">
            <picture className="skills">
              {dice[0].skills.map((skill) => (
                <img key={skill.id} className="skill" src={skill.url} alt="#" />
              ))}
            </picture>
            <span className="line"></span>
            <div className="dates">
              {dice[0].dates.map((dates) => (
                <span key={dates.date} className="date">
                  {dates.date}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="profile">
            <img src={profile} alt="foto de perfil" />
          </div>
        </div>
        <div className="box">
          <h2>Redes Sociais</h2>
          <div className="btns">
            <div className="socialMedia">
              <a
                href="https://www.instagram.com/dev.isaias/"
                target="_blank"
                rel="noreferrer"
              >
                <Button id="instagram" className="btn">
                  <AiOutlineInstagram className="icon" />
                  <p>Instagram</p>
                </Button>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5561996374607"
                target="_blank"
                rel="noreferrer"
              >
                <Button id="whatsapp" className="btn">
                  <AiOutlineWhatsApp className="icon" />
                  <p>Whatsapp</p>
                </Button>
              </a>
              <a
                href="https://github.com/isaiasramosdeoliveira"
                target="_blank"
                rel="noreferrer"
              >
                <Button id="github" className="btn">
                  <AiFillGithub className="icon" />
                  <p>Github</p>
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/isa%C3%ADas-ramos-ab015a248"
                target="_blank"
                rel="noreferrer"
              >
                <Button id="linkedin" className="btn">
                  <IoLogoLinkedin className="icon" />
                  <p>Linkedin</p>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <footer>Isaías Ramos</footer>
      </Suspense>
    </Container>
  );
};

export default PageMain;
