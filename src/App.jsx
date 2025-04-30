import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="card bg-white p-6 shadow-xl">
        <h1 className="text-3xl font-bold text-center">Hello, GitHub Pages!</h1>
        <p className="text-center text-gray-500 mt-2">
          Powered by React, Vite, Tailwind, and DaisyUI
        </p>
      </div>
    </div>
  );
}

export default App;
