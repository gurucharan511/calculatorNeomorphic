import React, { useState } from "react";
import "./style/calculator.css";

export default function Calculator() {
  const [prevOpr, setPrevOpr] = useState("");
  const [currOpr, setCurrOpr] = useState("");
  const [operation, setOperation] = useState("");
  const [displayVal, setDisplayval] = useState("");

  function allClear() {
    setCurrOpr("");
    setPrevOpr("");
    setOperation("");
  }

  function deleteNum() {
    let slicedOperand;
    slicedOperand = currOpr.toString().slice(0, -1);
    setCurrOpr(slicedOperand);
  }

  function appendNumber(number) {
    let currentOperand;
    if (number === "." && currOpr.includes(".")) return;
    currentOperand = currOpr.toString() + number.toString();

    setCurrOpr(currentOperand);
  }

  function chooseOperation(operation) {
    let opr = operation;
    let currentOperand = currOpr;
    let previousOperand = prevOpr;
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    setPrevOpr(currentOperand);
    if (opr != null) {
      setDisplayval(currentOperand.toString() + opr.toString());
    } else {
      setDisplayval("");
    }
    setCurrOpr("");
    setOperation(opr);
    //updateDisplay(opr, prevOpr);
  }

  function compute() {
    let computation, prev, current;
    prev = parseFloat(prevOpr);
    current = parseFloat(currOpr);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }

    setCurrOpr(computation);
    setOperation("");
    setPrevOpr("");
    setDisplayval("");
  }

  return (
    <div className="calculatorGrid">
      <div className="output">
        <div className="previous-operand" data-previous-operand>
          {displayVal}
        </div>
        <div className="current-operand" data-current-operand>
          {currOpr}
        </div>
      </div>
      <button className="span-two" onClick={() => allClear()}>
        AC
      </button>
      <button data="data-delete" onClick={() => deleteNum()}>
        DEL
      </button>
      <button data="data-operation" onClick={() => chooseOperation("/")}>
        /
      </button>
      <button data="data-number" onClick={() => appendNumber(1)}>
        1
      </button>
      <button data="data-number" onClick={() => appendNumber(2)}>
        2
      </button>
      <button data="data-number" onClick={() => appendNumber(3)}>
        3
      </button>
      <button data="data-operation" onClick={() => chooseOperation("*")}>
        *
      </button>
      <button data="data-number" onClick={() => appendNumber(4)}>
        4
      </button>
      <button data="data-number" onClick={() => appendNumber(5)}>
        5
      </button>
      <button data="data-number" onClick={() => appendNumber(6)}>
        6
      </button>
      <button data="data-operation" onClick={() => chooseOperation("+")}>
        +
      </button>
      <button data="data-number" onClick={() => appendNumber(7)}>
        7
      </button>
      <button data="data-number" onClick={() => appendNumber(8)}>
        8
      </button>
      <button data="data-number" onClick={() => appendNumber(9)}>
        9
      </button>
      <button data="data-operation" onClick={() => chooseOperation("-")}>
        -
      </button>
      <button data="data-number" onClick={() => appendNumber(".")}>
        .
      </button>
      <button data="data-number" onClick={() => appendNumber(0)}>
        0
      </button>
      <button className="span-two" data="data-equals" onClick={() => compute()}>
        =
      </button>
    </div>
  );
}
