import {createSlice} from '@reduxjs/toolkit';
import json from "../../jsons/messages.json";

export const getState = () => {
  const dice = window.sessionStorage.getItem("state")
  if (dice == null) {
    window.sessionStorage.setItem("state", "ok");
    return "ok"
  } else {
    if (dice == "not") {
      return "not"
    }
    if (dice == "ok") {
      return "ok"
    }
  }
}

const initialState = {
  messages: json,
  view: getState()
}

const slice = createSlice({
  name: "message",
  initialState,
  reducers: {
    checkout: (state, { payload }) => {
      window.sessionStorage.setItem("state", `${payload.state}`);
      return { ...state, view: payload.state };
      return
    },
    setMessages: (state, { payload }) => {
      return { ...state, messages: payload.messages };
      return
    }
  }
})

export const {checkout, setMessages} = slice.actions
export default slice.reducer
