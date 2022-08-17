import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewExpenditure, colorSpendingListItem } from "../redux/actions";
import uniqid from "uniqid";

function MainPageModal({ hidden, closeModal }) {
  const [decrementValue, setDecrementValue] = useState("");
  const [spendingName, setSpendingName] = useState("");

  const dispatch = useDispatch();

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

  function handleSpendingName(e) {
    setSpendingName(e.target.innerText);
  }

  function handleAddClick(e) {
    if (spendingName && decrementValue) {
      const newSpend = [
        spendingName,
        Number(decrementValue).toFixed(2),
        uniqid(),
        new Date(),
      ];
      dispatch(addNewExpenditure(newSpend));
      setSpendingName("");
      setDecrementValue("");
      handleOptionColorChange(e);
      closeModal();
    }
  }

  function newItemSubmitKeyDown(e) {
    if (e.keyCode === 13) {
      handleAddClick(e);
    }
  }

  function handleOptionColorChange(e) {
    if (e.target.className === "modal-list-element") {
      dispatch(colorSpendingListItem(e.target.dataset.id));
    } else {
      dispatch(colorSpendingListItem(e.target.dataset.id));
    }
  }

  useEffect(() => {
    setTimeout(function () {
      let viewheight = window.innerHeight;
      let viewwidth = window.innerWidth;
      let viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute(
        "content",
        `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0 user-scalable=no"`
      );
    }, 200);
  }, []);

  function overlayClick(e) {
    e.preventDefault();
    setDecrementValue("");
    handleOptionColorChange(e);
    closeModal();
  }

  return (
    <div className="modal-general" hidden={hidden}>
      <div className="overlay" onClick={overlayClick}></div>
      <div className="expenditure-modal-window">
        <p className="modal-text">Выберите статью расходов:</p>
        <div onClick={handleOptionColorChange} className="modal-list-items">
          {spendingArray.map((item) => (
            <div
              onClick={handleSpendingName}
              key={item[1]}
              data-id={item[1]}
              className={
                item[2] ? "modal-list-element colored" : "modal-list-element"
              }
            >
              {item[0]}
            </div>
          ))}
        </div>
        <input
          type="number"
          value={decrementValue}
          onChange={validationInputValue}
          onBlur={checkBlur}
          onKeyDown={newItemSubmitKeyDown}
          placeholder="Введите сумму расходов:"
          className="modal-input"
        ></input>
        <div onClick={handleAddClick} className="adding-expenditure-btn">
          ДОБАВИТЬ
        </div>
      </div>
    </div>
  );
}

export default MainPageModal;
