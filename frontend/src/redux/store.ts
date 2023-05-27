import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './Mode/slice'
import messageReducer from './Message/slice'

const store = configureStore({
  reducer: {modeReducer, messageReducer},
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch