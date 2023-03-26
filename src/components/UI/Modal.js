import classes from "./Modal.module.css";
import ReactDOM  from "react-dom";
import React from "react";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
  <Fragment>
    {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      portalElement
    )}
  </Fragment>
  )
};
export default Modal;

//with the help of portals we can change the rendering style of the html content.
//like in somewhere else where it is needed.
//rendered html code is diffrent from the jsx code.
//by doing this our model, sidebars, dropdown, etc is not nested in another components.
