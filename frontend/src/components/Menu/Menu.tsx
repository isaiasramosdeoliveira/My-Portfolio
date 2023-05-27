import React, { useState, useEffect, memo, lazy, Suspense } from "react";
import styled from "styled-components";
import { FaUser, FaHome } from "react-icons/fa";
import { BsFillCaretUpFill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { screeX } from "global/utils/screen";
import logo from "assets/imgs/logo.png";
import {
  BsFillMortarboardFill,
  BsFillBoxFill,
  BsFillClipboardCheckFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { corPrimaryRed_6, letter } from "global/variables/variables";
import { left, top } from "global/animations/animations";
import Loading from "components/Loading/Loading";
const Link = lazy(() => import("components/Link/Link"));

const Container = styled.aside`
  ${left}
  ${top}
  z-index:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 300ms ease-in-out;
  background: ${({ theme }) => theme.menu.bg};
  width: 60px;
  border-right: 1px solid ${({ theme }) => theme.menu.line};
  .anchors {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .active {
      border-bottom: none;
      background: ${corPrimaryRed_6};
      box-shadow: ${({ theme }) => theme.menu.shadow};
      .icon,
      a {
        color: ${letter};
      }
    }
    #expend {
      display: none;
    }
    li {
      transition: all 200ms ease-in-out;
      cursor: pointer;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid;
      border-color: ${({ theme }) => theme.menu.line};
      .icon {
        color: ${({ theme }) => theme.menu.icon};
        font-size: 28px;
      }
      button {
        cursor: pointer;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 30px;
        border: none;
        color: ${({ theme }) => theme.menu.letter};
      }
      a {
        padding: 0px 20px;
        color: ${({ theme }) => theme.menu.letter};
        flex-grow: 1;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .describe {
        display: none;
        font-size: 14px;
      }
      &:hover {
        border-bottom: none;
        background: ${corPrimaryRed_6};
        box-shadow: ${({ theme }) => theme.menu.shadow};
        .icon,
        a {
          color: ${letter};
        }
      }
    }
    li:nth-child(2),
    li:nth-child(1) {
      &:hover {
        box-shadow: none;
        background: transparent;
      }
    }
    .img {
      display: flex;
      margin: auto;
      width: 50px;
    }
  }
  &:hover {
    width: 225px;
    li {
      .icon {
        animation: alternate left 0.5s;
      }
      a {
        justify-content: space-between;
        .describe {
          animation: alternate left 1s;
          display: block;
        }
      }
    }
  }
`;

const Menu = () => {
  const [expend, setExpend] = useState(false);
  useEffect(() => {
    if (screenX <= 415) {
      const menu = document.querySelector("#Menu") as HTMLElement;
      const dice = expend ? "100%" : "60px";
      menu.style.height = dice;
    }
    if (screeX > 415) {
      const menu = document.querySelector("#Menu") as HTMLElement;
      menu.style.height = "100%";
    }
  });
  return (
    <Container id="Menu">
      <Suspense fallback={<Loading/>}>
        <ul className="anchors">
          <li id="expend">
            <button
              onClick={() => setExpend(expend ? false : true)}
              onBlur={() => setExpend(false)}
            >
              {expend ? <BsFillCaretUpFill /> : <CgMenuGridO />}
            </button>
          </li>
          <li className="logo">
            <img className="img" src={logo} alt="Logo dom portfólio" />
          </li>
          <Link to="/" name="Home">
            <FaHome className="icon" />
          </Link>
          <Link to="/aboutme" name="Sobre mim">
            <FaUser className="icon" />
          </Link>
          <Link to="/certifications" name="Certificações">
            <BsFillMortarboardFill className="icon" />
          </Link>
          <Link to="/projects" name="Projetos">
            <BsFillBoxFill className="icon" />
          </Link>
          <Link to="/skills" name="Habilidades">
            <BsFillClipboardCheckFill className="icon" />
          </Link>
          <Link to="/contacts" name="Contatos">
            <BsFillTelephoneFill className="icon" />
          </Link>
        </ul>
      </Suspense>
    </Container>
  );
};

export default memo(Menu);
