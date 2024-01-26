import {createSlice} from "@reduxjs/toolkit";

/**
 * Chat Reducer
 * containing global state for chat system, it has
 * chat - state: list of chat from localstorage
 *
 * @addChat - function: adding chat to the localstorage and chat state
 */

export const chatSlice = createSlice({
  name: "counter",
  initialState: {
    chat: JSON.parse(localStorage.getItem("@chat")) || [],
  },
  reducers: {
    addChat: (state, action) => {
      const chats = JSON.parse(localStorage.getItem("@chat")) || state.chat;
      state.chat = [...chats, action.payload];
      localStorage.setItem("@chat", JSON.stringify(state.chat));
    },
  },
});

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
