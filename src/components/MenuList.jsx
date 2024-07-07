import React from "react";

export default function MenuList() {
  return (
    <ul className="flex flex-col justify-start text-start">
      <li>
        <a href="/calculator">🧮 Calculator</a>
      </li>
      <li>
        <a href="/counter">🔢 Counter</a>
      </li>
    </ul>
  );
}
