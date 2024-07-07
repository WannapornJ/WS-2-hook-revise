import React from "react";
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-10 items-center justify-center text-3xl text-center">
        <button
          className="size-8 rounded-full border flex items-center justify-center"
          onClick={() => setNumber((prev) => prev - 1)}
        >
          <p className="transform -translate-y-[12%]">-</p>
        </button>
        <p className="font-bold">{number}</p>
        <button
          className="size-8 rounded-full border flex items-center justify-center"
          onClick={() => setNumber((prev) => prev + 1)}
        >
          <p className="transform -translate-y-[12%]">+</p>
        </button>
      </div>
      <button
        className="size-8 p-6 rounded-full border flex items-center justify-center"
        onClick={() => setNumber(0)}
      >
        reset
      </button>
    </div>
  );
}
