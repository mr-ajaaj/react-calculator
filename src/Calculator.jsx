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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-80 bg-gray-800 p-4 rounded-2xl shadow-lg">
        <div className="bg-black text-white text-right p-4 rounded-xl mb-4 text-2xl">
          {current || previous || "0"}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleClick(btn)}
              className={`p-4 rounded-xl text-lg font-semibold transition text-white
                    ${btn.type === "op" ? "bg-indigo-600 hover:bg-indigo-500" : ""}
                    ${btn.type === "equal" ? "bg-emerald-600 hover:bg-emerald-500" : ""}
                    ${btn.type === "num" ? "bg-gray-700 hover:bg-gray-600" : ""}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <button
          onClick={clearAll}
          className="mt-4 w-full bg-red-600 hover:bg-red-500 text-white py-2 rounded-xl"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
