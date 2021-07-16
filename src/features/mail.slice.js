import { createSlice } from '@reduxjs/toolkit';



export const mailSlice = createSlice({

  name: 'mail',
  initialState: {
    selectedMail: null,
      sendMessageIsOpen: false,
  },

  //reducers states
  reducers: {

    selectMail : (state, action) => {

      state.selectedMail = action.payload;
    },

    openSendMessage: (state) => {
  
      state.sendMessageIsOpen = true;
    },
  
    closeSendMessage: (state) => {

         state.sendMessageIsOpen = false;
    },
  },
 
});

export const { openSendMessage, closeSendMessage, selectMail } = mailSlice.actions;//state actions

export const selectsendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;//allow us to pull the states

export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;//exporting the reducer