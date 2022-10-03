import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { useTranslation } from "next-i18next";
import { toggleModal } from "@redux/modal/modalSlice";
import Modal from "../Modal";

const ContactInfowindow = (props) => {
  const { t }: { t: any } = useTranslation();
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal);

  function renderContent() {
    if (modal.status === "success") {
      return (
        <React.Fragment>
          <div className="text-xl font-black mb-5">
            {t("modal:success.title")}
          </div>
          <div className="mb-3 font-bold">{t("modal:success.description")}</div>
          <div className="font-bold">{t("modal:success.content")}</div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className="text-xl font-black mb-5">
          {t("modal:warning.title")}
        </div>
        <div className="mb-3 font-bold">{t("modal:warning.description")}</div>
        <div>{t("modal:warning.content")}</div>
      </React.Fragment>
    );
  }

  function renderActions(status) {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            handleClick();
          }}
          className="bg-blue-900 text-white text-base font-bold py-2 lg:py-2 px-8 flex items-center rounded justify-center mb-3 lg:mb-2">
          {t("modal:closebutton")}
        </button>
      </React.Fragment>
    );
  }

  function handleClick() {
    if (modal.status === "success") {
      props.onClick();
    }
    dispatch(toggleModal(false));
  }

  if (modal.isShow && modal.status === "loading") {
    return <Modal status={"loading"} />;
  }
  console.log(modal);
  return (
    <Modal
      status={modal.isShow && modal.status === "success" ? "success" : "error"}
      content={renderContent()}
      actions={renderActions(modal)}
      onClose={() => {
        dispatch(toggleModal(false));
      }}
    />
  );
};

export default ContactInfowindow;
