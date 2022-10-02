import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { reducer as reduxForm } from 'redux-form';
import modalReducer from "@redux/modal/modalSlice";
import formReviewReducer from "@redux/formReview/formReviewSlice";

const rootReducer = combineReducers({
  form: reduxForm,
  modal: modalReducer,
  formReview: formReviewReducer,
});

export type AppDispatch = typeof store.dispatch;
// 建立我們的 reducers type 供 useSelector 使用
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
