import {useState} from 'react';
import Modal from "./Modal";
import Backdrop from"./Backdrop";
import React from "react";

function Tudo(props) {
  const [modalIsOpen, setModalIsOpen] =useState(false);
  function deleteHandler(){
    setModalIsOpen(true);
  }
  function cancelHandler(){
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn-delete" onClick={deleteHandler}>Delete </button>
      </div>
      {modalIsOpen && <Backdrop onCancel={cancelHandler}/> }
      {modalIsOpen && <Modal/>}
    </div>
  );
}

export default Tudo;
