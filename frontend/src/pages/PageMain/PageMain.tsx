import React, { useState, useEffect, lazy, Suspense } from "react";
import styled from "styled-components";
import profile from "../../assets/imgs/profile-pic.png";
import { center } from "global/utils/center";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillGithub,
  AiOutlineFileText,
} from "react-icons/ai";
import {IoLogoLinkedin} from 'react-icons/io'
import {FcOk} from 'react-icons/fc';
import { corPrimaryBlack_3, corPrimaryBlack_4, corPrimaryRed_6, corPrimaryRed_7, letter} from "global/variables/variables";
import { transition200 } from "global/utils/transitions";
import { top} from "global/animations/animations";
import {media_desktop, media_medio_desktop, media_mini_tablet, media_mobile, media_tablet } from "global/media-query/media-query-pageMain";
const Button = lazy(() => import("components/Button/Button"));

const Container = styled.section`
  ${center}
  overflow-x: hidden;
  height: 100%;
  margin: auto;
  gap: 50px;
  .box {
    ${center}
    justify-content:space-between;
    .profile {
      margin-right: auto;
    }
    width: 72%;
  }
  .profile {
    display: flex;
    img {
      width: 350px;
      border-radius: 100%;
      border: 8px solid ${({ theme }) => theme.content.pageMain.main.bgButton};
      box-shadow: ${({ theme }) => theme.buttons.shadow};
    }
  }
  .btns {
    .carrer {
      ${center}
      max-width: 425px;
      button {
        ${center}
        width: 100%;
        margin-top: 10px;
        gap: 30px;
      }
      .item {
        display: none;
        justify-content: space-between;
        flex-wrap: nowrap;
        font-size: 14px;
        white-space: nowrap;
        width: 380px;
        padding: 10px 15px;
        color: ${({ theme }) => theme.content.pageMain.main.letter};
        background: ${({ theme }) => theme.content.pageMain.main.bgDescribe};
        border-top: 1px solid
          ${({ theme }) => theme.content.pageMain.main.hover};
        border-bottom: 1px solid
          ${({ theme }) => theme.content.pageMain.main.bottom};
        .icon {
          font-size: 20px;
        }
        &[data-action="active"] {
          ${top}
          animation: alternate top 400ms;
        }
      }
      .active {
        color: ${({ theme }) => theme.content.pageMain.main.letter};
        border-top: 1px solid ${({ theme }) => theme.content.pageMain.main.top};
        border-bottom: 1px solid
          ${({ theme }) => theme.content.pageMain.main.bottom};
        ${center}
        background:${({ theme }) => theme.content.pageMain.main.bgButton};
        .icon {
          margin-right: -60px;
          font-size: 20px;
        }
        &:hover {
          background: ${({ theme }) => theme.content.pageMain.main.hover};
        }
      }
    }
    .socialMedia {
      ${transition200}
      ${center}
      max-width:425px;
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
      a {
        ${center}
        .btn {
          color: ${({ theme }) => theme.content.pageMain.main.letter};
          width: 205px;
          padding: 15px;
          border-top: 1px solid
            ${({ theme }) => theme.content.pageMain.main.top};
          border-bottom: 1px solid
            ${({ theme }) => theme.content.pageMain.main.bottom};
          ${center}
          background:${({ theme }) => theme.content.pageMain.main.bgButton};
          ${center};
          justify-content: start;
          gap: 10px;
          p {
            display: block;
          }
          .icon {
            margin: -10px 0px;
            font-size: 25px;
          }
          &:hover {
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
            color: ${letter};
          }
        }
      }
      a:nth-child(5) {
        min-width: 100%;
        .btn {
          min-width: 100%;
          justify-content: center;
          &:hover {
            background: ${corPrimaryRed_6};
            box-shadow: 0px 0px 10px ${corPrimaryRed_7};
          }
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
  const [action, setAction] = useState(false);
  useEffect(() => {
    const items = document.querySelectorAll(".item") as NodeListOf<HTMLElement>
    if (action === true) {
      let mult = 0;
      items.forEach((item) => {
        setTimeout(() => {
          item.setAttribute('data-action', "active");
            item.style.display = "flex";
        }, mult);
        mult += 60;
      });
    }
    if (action === false) {
      let mult = 0;
      items.forEach(
        (item) => {
          setTimeout(() => {
            item.style.display = "none";
          }, mult);
          mult += 40;
        }
      );
    }
  }, [action])
  const handleAction = (): void => {
    setAction(action === false ? true : false);
  };
  return (
    <Container>
      <Suspense>
        <div className="box">
          <div className="profile">
            <img src={profile} alt="foto de perfil" />
          </div>
          <div className="btns">
            {action ? (
              <div></div>
            ) : (
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
                    <p>GitHub</p>
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/isa%C3%ADas-ramos-ab015a248"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button id="linkedin" className="btn">
                    <IoLogoLinkedin className="icon" />
                    <p>LinkedIn</p>
                  </Button>
                </a>
                <a download="">
                  <Button className="btn">
                    <AiOutlineFileText className="icon" />
                    <p>Currículo</p>
                  </Button>
                </a>
              </div>
            )}
            <div className="carrer">
              <Button
                text="Front-end Developer"
                className="active"
                functions={() => handleAction()}
              >
                {action ? (
                  <AiFillCaretUp className="icon" />
                ) : (
                  <AiFillCaretDown className="icon" />
                )}
              </Button>
              <Button data-item="item" className="item">
                <p>Layouts lindos e responsivos.</p>
                <FcOk className="icon" />
              </Button>
              <Button data-item="item" className="item">
                <p>SEO e acessibilidade juntos.</p>
                <FcOk className="icon" />
              </Button>
              <Button data-item="item" className="item">
                <p>Tecnologias modernas.</p>
                <FcOk className="icon" />
              </Button>
            </div>
          </div>
        </div>
        <footer>Isaías Ramos</footer>
      </Suspense>
    </Container>
  );
};

export default PageMain;
