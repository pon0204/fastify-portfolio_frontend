import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { Chats,Chat } from '../types/types'

export interface chatState {
  chat: Chats
  editedChat: Chat
}

const initialState:any = {
  chat: [
    {
    isMe : true,
    text: 'テキスト1'
    },
    {
    isMe : false,
    text: 'テキスト2'
    },
  ],
  editedChat: {
    isMe: true,
    text: 'テキスト'
  }
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state, action: PayloadAction) => {
      state.chat = action.payload
    },
    setEditedChat: (state,action: PayloadAction) => {
      state.editedChat = action.payload
    },
    setEditedIsMe: (state,action: PayloadAction) => {
      state.editedChat.isMe = !state.editedChat.isMe
    }
}
})

export const { setChat, setEditedChat,setEditedIsMe } = chatSlice.actions
export const selectChat = (state: RootState) => state.chat.chat
export const selectEditedChat = (state: RootState) => state.chat.editedChat
export default chatSlice.reducer