import { createSlice } from "@reduxjs/toolkit";

export const getMode = (): string | undefined => {
  const dice = window.localStorage.getItem("mode")
  if (dice == null) {
    window.localStorage.setItem("mode", "dark");
    return "dark"
  } else{
    if (dice == "light"){
      return "light"
    }
    if (dice == "dark") {
      return "dark"
    }
  }
}

const slice = createSlice({
  name: "mode",
  initialState: {
    mode: getMode()
  },
  reducers: {
    changeMode: (state, { payload }) => {
      window.localStorage.setItem("mode", `${payload.mode}`);
      return { ...state, mode: payload.mode };
    }
  },

})

export const { changeMode } = slice.actions
export default slice.reducer;