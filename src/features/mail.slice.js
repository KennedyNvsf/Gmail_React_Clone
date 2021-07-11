import { createSlice } from '@reduxjs/toolkit';



export const mailSlice = createSlice({

  name: 'mail',
  initialState: {
      sendMessageIsOpen: false
  },

  //reducers states
  reducers: {
    openSendMessage: (state) => {
  
      state.sendMessageIsOpen = true;
    },
  
    closeSendMessage: (state) => {

         state.sendMessageIsOpen = false;
    },
  },
 
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;//state actions

export const selectsendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;//allow us to pull the states

export default mailSlice.reducer;//exporting the reducer