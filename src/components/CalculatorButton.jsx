import React from "react";

export default function CalculatorButton({ button, handleClick }) {
  return (
    <button
      className="border rounded-[50%] size-16 text-3xl text-center flex items-center justify-center"
      onClick={() => handleClick(button)}
    >
      {button}
    </button>
  );
}
