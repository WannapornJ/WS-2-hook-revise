import { useState, useEffect, useRef } from "react";

export default function Calculator() {
  const number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "AC"];
  const symbols = ["+", "-", "×", "÷"];
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [symbol, setSymbol] = useState("");

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const focusedInput = useRef("num1");

  const handleClickNumber = (number) => {
    if (typeof number !== "number") {
      setResult("");
      setNum1("");
      setNum2("");
      setSymbol("");
    } else {
      if (focusedInput.current === "num1") {
        setNum1((prev) => prev + number);
      } else {
        setNum2((prev) => prev + number);
      }
    }
  };

  const handleFocus = (inputName) => {
    focusedInput.current = inputName;
  };

  const handleChangeNumber = (e) => {
    let targetName = e.target.name;
    let value = e.target.value;
    if (targetName === "num1") {
      setNum1(value);
    } else {
      setNum2(value);
    }
  };

  const handleClickSymbol = (sym) => {
    if (symbol !== "=") {
      setSymbol(sym);
    }
  };

  const summary = () => {
    switch (symbol) {
      case "+":
        setResult(String(Number(num1) + Number(num2)));
        break;
      case "-":
        setResult(String(Number(num1) - Number(num2)));
        break;
      case "×":
        setResult(String(Number(num1) * Number(num2)));
        break;
      case "÷":
        setResult(String(Number(num1) / Number(num2)));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    inputRef1.current.focus();
  }, []);

  return (
    <div className="h-[50vh] flex flex-col items-center justify-center">
      {!result ? (
        <div className="flex items-center gap-4 text-3xl font-bold">
          <input
            ref={inputRef1}
            type="number"
            value={num1}
            name="num1"
            onChange={(e) => handleChangeNumber(e)}
            onFocus={() => handleFocus("num1")}
            className="w-[100px] px-4 py-2 rounded-xl"
          />
          <p className="w-[50px]">{symbol}</p>
          <input
            ref={inputRef2}
            type="number"
            value={num2}
            name="num2"
            onChange={(e) => handleChangeNumber(e)}
            onFocus={() => handleFocus("num2")}
            className="w-[100px] px-4 py-2 rounded-xl"
          />
        </div>
      ) : (
        <p className="text-3xl font-bold">{result}</p>
      )}
      <div className="calculator flex gap-4 mt-8">
        <div className="number grid grid-cols-3 gap-4">
          {number.map((num) => (
            <button
              key={num}
              className="border rounded-[50%] size-16 text-3xl text-center flex items-center justify-center"
              onClick={() => handleClickNumber(num)}
            >
              {num}
            </button>
          ))}
        </div>
        <div className="symbol flex flex-col gap-4">
          {symbols.map((sym) => (
            <button
              key={sym}
              className="border rounded-[50%] size-16 text-3xl text-center"
              onClick={() => handleClickSymbol(sym)}
            >
              {sym}
            </button>
          ))}
        </div>
        <button
          className="border rounded-[50%] size-16 text-3xl text-center"
          onClick={() => summary()}
        >
          =
        </button>
      </div>
    </div>
  );
}
