import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-[75%] mx-auto mt-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
