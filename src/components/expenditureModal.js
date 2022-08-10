import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ExpenditureModal({ hidden }) {
  const [decrementValue, setDecrementValue] = useState("");

  const spendingArray = useSelector((state) => {
    const { spendingListReducer } = state;
    return spendingListReducer.spendingListArr;
  });

  function validationInputValue(e) {
    e.preventDefault();
    setDecrementValue(e.target.value);
  }
  function checkBlur(e) {
    e.preventDefault();
    if (e.target.value) {
      setDecrementValue(Number(decrementValue).toFixed(2));
    } else {
      setDecrementValue("");
    }
  }

  return (
    <div hidden={!hidden} className="overlay">
      <div className="expenditure-modal-window">
        <p className="modal-text">Выберите статью расходов:</p>
        <div className="modal-list-items">
          {spendingArray.map((item) => (
            <div key={item[1]} className="modal-list-element">
              {item[0]}
            </div>
          ))}
        </div>
        <input
          type="number"
          value={decrementValue}
          onChange={validationInputValue}
          onBlur={checkBlur}
          placeholder="Введите сумму расходов:"
          className="modal-input"
        ></input>
        <div className="adding-expenditure-btn">ДОБАВИТЬ</div>
      </div>
    </div>
  );
}

export default ExpenditureModal;
