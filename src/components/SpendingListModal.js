import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jQuery from "jquery";

function SpendingListModal({ hidden }) {
  const [itemOfExpenditureName, setItemOfExpenditureName] = useState("");

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
  useEffect(() => {
    setTimeout(function () {
      let viewheight = window.innerHeight;
      let viewwidth = window.innerWidth;
      let viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute(
        "content",
        `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0"`
      );
    }, 200);
  }, []);

  return (
    <div hidden={!hidden} className="overlay">
      <div className="spending-modal-window">
        <p className="modal-text">Введите новую статью расходов:</p>
        <input
          value={itemOfExpenditureName}
          onChange={validationInputValue}
          onBlur={checkBlur}
          placeholder="Введите название:"
          className="modal-input"
        ></input>
        <div className="adding-expenditure-btn">ДОБАВИТЬ</div>
      </div>
    </div>
  );
}

export default SpendingListModal;
