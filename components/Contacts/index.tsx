import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { RootState } from "@redux/store";
import { toggleFormReview } from "@redux/formReview/formReviewSlice";

import ContactForm from "./ContactForm";
import ContactFormReview from "./ContactFormReview";
import ContactInfowindow from "./ContactInfowindow";

const Contact = (props) => {
  const dispatch = useDispatch();
  const formReview = useSelector((state: RootState) => state.formReview);
  const modal = useSelector((state: RootState) => state.modal);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  function renderContent() {
    // console.log(formReview, props);
    // if (formReview.isShowFormReview) {
    //   return (
    //     <ContactFormReview
    //       // onCancel={() => dispatch(toggleFormReview(false))}
    //       onEmailSend={() => dispatch(toggleFormReview(false))}
    //     />
    //   );
    // }

    return (
      // <ContactForm onFormSubmit={() => dispatch(toggleFormReview(true))} />
      <form
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
        action="/"
        method="post">
        <label>name</label>
        <input
          type="text"
          placeholder="name"
          id="name"
          {...register("name", { required: true, maxLength: 80 })}
        />
        {errors.name && "請輸入name"}
        <label>email</label>
        <input
          type="text"
          placeholder="email"
          id="email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && "請輸入email"}
        <label>messages</label>
        <textarea
          placeholder="messages"
          id="messages"
          {...register("messages", { required: true })}
        />
        {errors.messages && "請輸入messages"}
        <button className="" type="button" onClick={() => reset()}>
          reset
        </button>
        <button className="" type="submit">
          submit
        </button>
      </form>
    );
  }

  return (
    <div className="w-full pb-4">
      <div className="w-full flex justify-center items-center mt-20 lg:mt-32">
        <div className="flex flex-col items-center w-full lg:w-1/2 px-6 sm:px-24 lg:px-0">
          <div className="font-Raleway text-5xl lg:text-6xl w-full text-left lg:text-center relative">
            <span id="contact" className="absolute -top-36 lg:-top-52"></span>
            Contact
          </div>
          <div className="lg:text-xl w-full flex flex-col">
            {renderContent()}
          </div>
          {/* {modal.isShow ? (
            <ContactInfowindow
            // onClick={() => {
            //   this.props.reset();
            // }}
            />
          ) : (
            ""
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
