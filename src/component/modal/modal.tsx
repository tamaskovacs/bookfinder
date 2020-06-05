import React from "react";
import './modal.css';
import '../overlay/overlay';
import Overlay from "../overlay/overlay";
import ModalInterface from './modal-interface';
export default function Modal(props:ModalInterface) {

  return (
    <>
        {props.isOpen &&
            <Overlay child={
                (
                    <div className="modal-container">
                       <header className="modal-header">{props.title}</header>
                       <div className = "modal-body">
                           {props.child}
                       </div>
                       <footer className="modal-footer">
                            <button className="modal-close-button"
                                onClick={()=>props.closeHandler()}
                            >
                               close
                            </button>
                       </footer>
                    </div>

                )
            }/>
        }
    </>
  );
}
