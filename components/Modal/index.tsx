import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const iconClass = (status) => {
    switch (status) {
      case "loading":
        return (
          <span className="material-icons-outlined text-5xl mt-12 animate-spin">
            autorenew
          </span>
        );
      case "success":
        return <i className="far fa-smile text-8xl"></i>;
      case "error":
        return <i className="far fa-sad-tear text-8xl"></i>;
      default:
        return null;
    }
  };

  const modalElement = document.querySelector("#modal");

  if (modalElement) {
    return ReactDOM.createPortal(
      <div
        className="fixed inset-0 w-full h-full z-20 bg-primary
            bg-opacity-50 duration-300 overflow-y-auto"
        onClick={props.onClose}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-11/12 md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-1/5 mx-auto mt-52 lg:mt-72 opacity-100"
        >
          <div className="bg-white shadow-lg rounded-lg text-blue-900 z-20">
            <div className="w-full flex justify-center pt-5">
              {props.status ? iconClass(props.status) : ""}
            </div>
            <div className="px-3 pb-3">
              <div className="text-center mt-6">{props.content}</div>
            </div>
            <div className="flex justify-center px-16 py-3">
              {props.actions}
            </div>
          </div>
        </div>
      </div>,
      modalElement
    );
  }
};

export default Modal;
