import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { replenishTheBalance } from "../redux/actions";

function ReplenishBalanceModal({ hidden, closeModal }) {
  const [incrementValue, setIncrementValue] = useState(null);

  const dispatch = useDispatch();

  function validationInputValue(e) {
    e.preventDefault();
    setIncrementValue(e.target.value);
  }
  function checkBlur(e) {
    e.preventDefault();
    if (e.target.value) {
      setIncrementValue(Number(incrementValue).toFixed(2));
    } else {
      setIncrementValue(null);
    }
  }

  function handleAddClick(e) {
    if (incrementValue) {
      dispatch(replenishTheBalance(Number(incrementValue)));
      setIncrementValue(null);
      closeModal();
    }
  }

  function newItemSubmitKeyDown(e) {
    if (e.keyCode === 13) {
      handleAddClick(e);
    }
  }

  function overlayClick(e) {
    e.preventDefault();
    setIncrementValue(null);
    closeModal();
  }

  return (
    <div className="modal-general" hidden={hidden}>
      <div className="overlay" onClick={overlayClick}></div>
      <div className="balance-modal-window">
        <p className="modal-text">Пополнить баланс:</p>
        <input
          type="number"
          value={incrementValue ?? ""}
          onChange={validationInputValue}
          onBlur={checkBlur}
          onKeyDown={newItemSubmitKeyDown}
          placeholder="Введите сумму пополнения:"
          className="modal-balance-input"
        ></input>
        <div className="adding-expenditure-btn" onClick={handleAddClick}>
          ПОПОЛНИТЬ
        </div>
      </div>
    </div>
  );
}

export default ReplenishBalanceModal;
