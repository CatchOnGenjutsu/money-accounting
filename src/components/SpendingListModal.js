import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSpendingListItem } from "../redux/actions";
import uniqid from "uniqid";
import jQuery from "jquery";

function SpendingListModal({ hidden, closeModal }) {
  const [itemOfExpenditureName, setItemOfExpenditureName] = useState("");

  const dispatch = useDispatch();

  const spendingArray = useSelector((state) => {
    const { spendingListReducer } = state;
    return spendingListReducer.spendingListArr;
  });

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
      dispatch(addSpendingListItem([itemOfExpenditureName, uniqid()]));
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
