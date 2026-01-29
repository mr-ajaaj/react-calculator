import { useState } from "react";
export default function Calculator() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operator, setOperator] = useState(null);

    const appendNumber = (num) => {
    if (num === "." && current.includes(".")) return;
    setCurrent(current + num);
  };



  return(
          <div></div>
  )  
}
