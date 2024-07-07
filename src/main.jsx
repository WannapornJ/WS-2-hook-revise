import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calculator from "./pages/Calculator.jsx";
import Counter from "./pages/Counter.jsx";
import MenuList from "./components/MenuList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MenuList /> },
      { path: "/calculator", element: <Calculator /> },
      { path: "/counter", element: <Counter /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
