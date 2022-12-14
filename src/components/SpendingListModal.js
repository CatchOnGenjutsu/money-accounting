import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSpendingListItem } from "../redux/actions";
import uniqid from "uniqid";

function SpendingListModal({ hidden, closeModal }) {
  const [itemOfExpenditureName, setItemOfExpenditureName] = useState("");

  const dispatch = useDispatch();

  function validationInputValue(e) {
    e.preventDefault();
    setItemOfExpenditureName(e.target.value);
  }
  function checkBlur(e) {
    e.preventDefault();
    if (e.target.value) {
      setItemOfExpenditureName(itemOfExpenditureName);
    } else {
      setItemOfExpenditureName("");
    }
  }

  function newItemSubmit(e) {
    e.preventDefault();
    if (itemOfExpenditureName) {
      e.preventDefault();
      dispatch(addSpendingListItem([itemOfExpenditureName, uniqid(), false]));
    }
    setItemOfExpenditureName("");
    closeModal();
  }

  function newItemSubmitKeyDown(e) {
    if (e.keyCode === 13) {
      newItemSubmit(e);
    }
  }

  function overlayClick(e) {
    e.preventDefault();
    setItemOfExpenditureName("");
    closeModal();
  }

  return (
    <div className="modal-general" hidden={hidden}>
      <div className="overlay" onClick={overlayClick}></div>
      <div className="spending-modal-window">
        <p className="modal-text">Введите новую статью расходов:</p>
        <input
          type="text"
          value={itemOfExpenditureName}
          onChange={validationInputValue}
          onBlur={checkBlur}
          onKeyDown={newItemSubmitKeyDown}
          placeholder="Введите название:"
          className="modal-input"
        ></input>
        <div className="adding-expenditure-btn" onClick={newItemSubmit}>
          ДОБАВИТЬ
        </div>
      </div>
    </div>
  );
}

export default SpendingListModal;
