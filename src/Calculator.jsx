import { useState } from "react";
export default function Calculator() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operator, setOperator] = useState(null);

  const appendNumber = (num) => {
    if (num === "." && current.includes(".")) return;
    setCurrent(current + num);
  };

  const chooseOperator = (op) => {
    if (current === "") return;
    if (previous !== "") Calculator();
    setOperator(op);
    setPrevious(current);
    setCurrent("");
  };

  const calculate = () => {
    const a = parseFloat(previous);
    const b = parseFloat(current);
    if (isNaN(a) || isNaN(b)) return;

    let result;
    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "×":
        result = a * b;
        break;
      case "÷":
        if (b === 0) {
          setCurrent("Error");
          setPrevious("");
          setOperator(null);
          return;
        }
        result = a / b;
        break;
      default:
        return;
    }

    setCurrent(result.toString());
    setPrevious("");
    setOperator(null);
  };

  const clearAll = () => {
    setCurrent("");
    setPrevious("");
    setOperator(null);
  };

  const buttons = [
    { label: "7", type: "num" },
    { label: "8", type: "num" },
    { label: "9", type: "num" },
    { label: "÷", type: "op" },
    { label: "4", type: "num" },
    { label: "5", type: "num" },
    { label: "6", type: "num" },
    { label: "×", type: "op" },
    { label: "1", type: "num" },
    { label: "2", type: "num" },
    { label: "3", type: "num" },
    { label: "-", type: "op" },
    { label: "0", type: "num" },
    { label: ".", type: "num" },
    { label: "=", type: "equal" },
    { label: "+", type: "op" },
  ];

  const handleClick = (btn) => {
    if (btn.type === "num") appendNumber(btn.label);
    if (btn.type === "op") chooseOperator(btn.label);
    if (btn.type === "equal") calculate();
  };

  return <div></div>;
}
