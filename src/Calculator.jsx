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

  return <div></div>;
}
