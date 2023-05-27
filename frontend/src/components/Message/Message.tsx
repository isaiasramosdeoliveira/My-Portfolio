import { chatActive, chatDisabled } from "global/animations/animations";
import { IMessage } from "global/interfaces/interfaces";
import { center } from "global/utils/center";
import { useAppDispatch, useAppSelector } from "hook/hooks";
import React, { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { checkout, setMessages } from "redux/Message/slice";
import styled from "styled-components";

const Container = styled.section`
  ${chatActive}
  ${chatDisabled}
  position: fixed;
  z-index: 2;
  left: 82px;
  bottom: 22px;
  .active {
    width: 300px;
    height: 350px;
    padding: 20px 20px 60px 20px;
  }
  .disabled {
    position: absolute;
    width: 25px;
    height: 25px;
    bottom: 5px;
    left: 5px;
    clip-path: circle(100px);
    padding: 0px;
  }
`;
const Message = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-center: center;
  position: relative;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  margin: 20px;
  margin-left: 80px;
  padding: 10px;
  font-size: 25px;
  border-radius: 15px;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.buttons.top};
  border-bottom: 1px solid ${({ theme }) => theme.buttons.bottom};
  background: ${({ theme }) => theme.buttons.bg};
  box-shadow: ${({ theme }) => theme.buttons.shadow};
  color: ${({ theme }) => theme.buttons.letter};
  &:hover {
    background: ${({ theme }) => theme.buttons.hover};
  }
  .num {
    ${center}
    position:absolute;
    top: -5px;
    right: -5px;
    font-size: 14px;
    background: rgb(227, 50, 50);
    border-radius: 100%;
    width: 20px;
    height: 20px;
    font-weight: 600;
  }
  .not {
    display: none;
  }
`;

const Chat = styled.div`
  overflow-x: hidden;
  background: ${({ theme }) => theme.content.message.message.bg};
  border-top: 1px solid ${({ theme }) => theme.content.message.message.top};
  border-bottom: 1px solid
    ${({ theme }) => theme.content.message.message.bottom};
  box-shadow: ${({ theme }) => theme.content.message.message.shadow};
  border-radius: 10px;
  &[data-chat="true"] {
    animation: alternate 400ms chatActive;
  }
  &[data-chat="false"] {
    animation: alternate 400ms chatDisabled;
  }
  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.scroll.bgExtern};
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scroll.bgIntern};
    border-radius: 50px;
  }
  li {
    list-style: none;
    color: ${({ theme }) => theme.content.message.message.title};
  }
  .message {
    background: ${({ theme }) => theme.content.message.message.bgDescribe};
    border-top: 1px solid ${({ theme }) => theme.content.message.message.top};
    border-bottom: 1px solid
      ${({ theme }) => theme.content.message.message.bottom};
    box-shadow: ${({ theme }) => theme.content.message.message.shadow};
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0px;
  }
`;

export default () => {
  const { messages, view } = useAppSelector((state) => state.messageReducer);
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState(false);
  const [dice, setDice] = useState(messages);
  const [notification, setNotification] = useState(view);

  useEffect(() => {
    dispatch(checkout({ state: "not" }));
    dispatch(setMessages({ messages: dice }));
  }, [notification, dice]);

  const handleSeenMessages = () => {
    setStatus(status == false ? true : false);
    setNotification("not");
  };

  const handleSeenState = () => {
    setDice([]);
    setStatus(false);
  };
  return (
    <Container id="Message">
      <Chat data-chat={status} className={status ? "active" : "disabled"}>
        {status ? (
          <ul className="messages">
            {messages.length == 0 ? (
              <>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "260px",
                  }}
                >
                  Sem mensagens
                </li>
              </>
            ) : (
              <>
                {dice.map((message: IMessage) => (
                  <li key={message.id} className="message">
                    {message.message}
                  </li>
                ))}
              </>
            )}
          </ul>
        ) : (
          ""
        )}
      </Chat>
      <Message
        id="ButtonMessage"
        onClick={handleSeenMessages}
        onBlur={handleSeenState}
      >
        {notification == "not" ? (
          <></>
        ) : (
          <span
            className={`${messages.length == 0 ? `${notification}` : "num"}`}
          >
            {messages.length}
          </span>
        )}

        <IoIosNotifications />
      </Message>
    </Container>
  );
};
