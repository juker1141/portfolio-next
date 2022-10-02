import { createSlice } from "@reduxjs/toolkit";

interface State {
  isShowFormReview: boolean;
}

const initialState: State = {
  isShowFormReview: false
};

export const formReviewSlice = createSlice({
  name: "formReviewSlice",
  initialState,
  reducers: {
    toggleFormReview(state, { payload }) {
      state.isShowFormReview = payload;
    },
  },
});

export const { toggleFormReview } = formReviewSlice.actions;

export default formReviewSlice.reducer;
