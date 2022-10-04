import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { useForm } from "react-hook-form";
import { useTranslation, Trans } from "next-i18next";

import { RootState } from "@redux/store";
import { toggleFormReview } from "@redux/formReview/formReviewSlice";
import { sendEmail } from "@redux/modal/modalSlice";

// import ContactForm from "./ContactForm";
// import ContactFormReview from "./ContactFormReview";
import ContactInfowindow from "./ContactInfowindow";

const Contact = (props) => {
  const { t }: { t: any } = useTranslation();
  const dispatch = useAppDispatch();
  const formReview = useAppSelector((state) => state.formReview);
  const modal = useAppSelector((state) => state.modal);
  const [formValues, setFormValues] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(toggleFormReview(true));
    setFormValues(data);
  };

  function renderContent() {
    // console.log(formReview, props);
    if (formReview.isShowFormReview) {
      return (
        <div className="flex flex-col items-center">
          <div className="mt-5 flex w-full lg:justify-center">
            {t("contact:remind")}
          </div>
          <div className="w-5/6 lg:w-2/3">
            <div className="mt-5">
              <div className="mb-4">
                <label className="font-bold">
                  {t("contact:formFields.name")}
                </label>
                <div className="mt-4 italic">{formValues["name"]}</div>
              </div>
              <div className="mb-4">
                <label className="font-bold">
                  {t("contact:formFields.email")}
                </label>
                <div className="mt-4 italic">{formValues["email"]}</div>
              </div>
              <div className="mb-4">
                <label className="font-bold">
                  {t("contact:formFields.messages")}
                </label>
                <div className="mt-4 italic">{formValues["messages"]}</div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col-reverse lg:flex-row lg:justify-center">
            <button
              className="text-base font-bold py-4 lg:py-2 px-6 lg:mr-24
            focus:outline-none focus:shadow-outline rounded flex justify-center items-center"
              onClick={() => dispatch(toggleFormReview(false))}>
              <span className="material-icons mr-1">edit</span>
              {t("contact:button.edit")}
            </button>
            <button
              className="bg-blue-900 text-white text-base font-bold py-4 px-24 mb-5 lg:mb-0
                flex items-center rounded justify-center transition duration-500"
              onClick={() => {
                dispatch(
                  sendEmail({
                    formValues,
                    reset: () => reset(),
                  })
                );
                dispatch(toggleFormReview(false));
              }}>
              {t("contact:button.send")}
              <span className="material-icons ml-2">mail</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      // <ContactForm onFormSubmit={() => dispatch(toggleFormReview(true))} />
      <form
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
        action="/"
        method="post">
        <div className="mb-4">
          <label className="block text-xl font-bold mb-4 pl-2">
            {t("contact:formFields.name")}
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true, maxLength: 80 })}
            className={`text-xl bg-lightBlue border border-blue-900
                    p-2 px-3 rounded-lg focus:outline-none w-full
              ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name ? (
            <div className="text-red-500 text-sm pt-2 px-2">
              <Trans
                i18nKey="contact:error.required"
                values={{ name: t("contact:formFields.name") }}
              />
            </div>
          ) : (
            ""
          )}
          {/* 如果用戶點擊了，並且也有 error 的訊息，那就顯示 error 的訊息 */}
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-4 pl-2">
            {t("contact:formFields.email")}
          </label>
          <input
            type="text"
            id="email"
            className={`text-xl bg-lightBlue border border-blue-900
                    p-2 px-3 rounded-lg focus:outline-none w-full
              ${errors.email ? "border-red-500" : ""}`}
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && errors.email.type === "pattern" ? (
            <div className="text-red-500 text-sm pt-2 px-2">
              {t("contact:error.email")}
            </div>
          ) : (
            errors.email && (
              <div className="text-red-500 text-sm pt-2 px-2">
                <Trans
                  i18nKey="contact:error.required"
                  values={{ name: t("contact:formFields.email") }}
                />
              </div>
            )
          )}
          {/* 如果用戶點擊了，並且也有 error 的訊息，那就顯示 error 的訊息 */}
        </div>
        <div>
          <label className="block text-xl font-bold mb-4 pl-2">
            {t("contact:formFields.messages")}
          </label>
          <textarea
            id="messages"
            {...register("messages", { required: true })}
            className={`text-xl bg-lightBlue border border-blue-900
                p-3 rounded-lg focus:outline-none h-48 w-full
            ${errors.messages ? "border-red-500" : ""}`}
          />
          {errors.messages ? (
            <div className="text-red-500 text-sm pt-2 px-2">
              <Trans
                i18nKey="contact:error.required"
                values={{ name: t("contact:formFields.messages") }}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-4 lg:mt-8 flex flex-col-reverse lg:flex-row lg:justify-between lg:mx-8 xl:mx-16">
          <button
            className="text-base font-bold py-4 lg:py-2 px-24
                focus:outline-none focus:shadow-outline rounded flex justify-center items-center
                disabled:opacity-80"
            type="button"
            onClick={() => reset()}>
            {t("contact:button.cancel")}
            <span className="material-icons ml-1">clear</span>
          </button>
          <button
            type="submit"
            className="bg-blue-900 text-white text-base font-bold py-4 px-24
              flex items-center rounded justify-center disabled:opacity-70 mb-5 lg:mb-0"
            disabled={
              errors.hasOwnProperty("name") ||
              errors.hasOwnProperty("email") ||
              errors.hasOwnProperty("messages")
            }>
            {t("contact:button.next")}
            <span className="material-icons ml-1">done</span>
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="w-full pb-4">
      <div className="w-full flex justify-center items-center mt-20 lg:mt-32">
        <div className="flex flex-col items-center w-full lg:w-1/2 px-6 sm:px-24 lg:px-0">
          <div className="font-Raleway text-5xl lg:text-6xl w-full text-left lg:text-center relative mb-6">
            <span id="contact" className="absolute -top-36 lg:-top-52"></span>
            Contact
          </div>
          <div className="lg:text-xl w-full flex flex-col">
            {renderContent()}
          </div>
          {modal.isShow ? (
            <ContactInfowindow
              onClick={() => {
                reset();
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
