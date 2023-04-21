import { useState } from "react";
import "./App.css";
import ParentComponent from "./component/ParentComponent";
import Counter from "./component/Counter";
import FocusInput from "./component/FocusInput";

function App() {
  return (
    <div>
      <FocusInput />
      {/*
    <Counter />
    <ParentComponent />*/}
    </div>
  );
}

export default App;
