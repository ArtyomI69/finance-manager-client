import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { MessageType } from "../../models/MessageType";

interface Message {
  text: string;
  type: MessageType;
}

interface MessagesState {
  messages: Message[];
}

const initialState: MessagesState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    successMessage(state, action: PayloadAction<{ text: string }>) {
      state.messages.push({ text: action.payload.text, type: "SUCCESS" });
    },
    errorMessage(state, action: PayloadAction<{ text: string }>) {
      state.messages.push({ text: action.payload.text, type: "ERROR" });
    },
    plainMessage(state, action: PayloadAction<{ text: string }>) {
      state.messages.push({ text: action.payload.text, type: "PLAIN" });
    },
    removeMessage(state, action: PayloadAction<{ idx: number }>) {
      state.messages = state.messages.filter((_, idx) => idx !== action.payload.idx);
    },
  },
});

export default messagesSlice.reducer;
