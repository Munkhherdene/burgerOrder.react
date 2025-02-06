import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {MyCoolButton} from "./components/MyCoolButton";


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <MyCoolButton tovchner="my 1 button" />
        </>
        <>
          <MyCoolButton tovchner="my 2 button" />
        </>
        <>
          <MyCoolButton tovchner="my 3 button" />
        </>
        <>
          <MyCoolButton />
        </>
      </header>
    </div>
  );
}


