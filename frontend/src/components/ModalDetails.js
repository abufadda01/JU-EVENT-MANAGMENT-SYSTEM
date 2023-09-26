
import React from "react";
import ReactDOM from "react-dom";



const Backdrop = (props) => {

  return <div className="backdrop" onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {


  return (
    <div className="modal">
      <div className="modal-header">
        <h1> Event Details</h1>
      </div>
      <div className="modal-body">
        <p>{props.detail}</p>
      </div>
      <div className="modal-footer">
        <button className="modal-btn" onClick={props.onConfirm}>
          Close
        </button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          detail={props.detail}
        
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root"))}
    </>
  );
};

export default Modal;

     





















/*import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {

  return <div className="backdrop" onClick={props.confirm}> </div>;
};


const ModalOverLay = (props) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h1> Event details </h1>  
      </div>

      <div className="modal-body">
        <p>{props.detail}</p>
      </div>
      <div className="modal-footer">
        <button className="modal-btn" onClick={props.confirm}>Close</button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop detail = {props.detail}confirm={props.confirm} />,
        document.getElementById("backdrop-root")
      )} 
      {ReactDOM.createPortal(<ModalOverLay  confirm={props.confirm} /> , document.getElementById("modal-root") )}
    </>
  );
};

export default Modal;*/
