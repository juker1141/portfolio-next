import { createSlice } from "@reduxjs/toolkit";

import emailjs from 'emailjs-com';
import keys from "@conf/keys";

interface State {
  isShow: boolean;
  status: string | null;
}

const initialState: State = {
  isShow: false,
  status: null,
};


export const sendEmail = (formValues) => async (dispatch) => {
  dispatch(toggleModal({state: true, status: "loading"}));
  emailjs.send(
    keys.emailjsServicesID,
    keys.emailjsTemplateID,
    formValues,
    keys.emailjsUserID,
  )
    .then((res) => {
      dispatch(toggleModal({state: true, status: "success"}));
    }, (error) => {
      dispatch(toggleModal({state: true, status: "error"}));
    });
};

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    toggleModal(state, { payload }) {
      state.isShow = payload.state;
      state.status = payload.status;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
