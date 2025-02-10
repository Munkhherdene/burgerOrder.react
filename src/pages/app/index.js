import React from "react";
import "./style.css";
import ToolBar from "../../components/toolBar";
import BurgerBuilder from "../burgerBuilder";
import "../../components/burgerIngredient";
import "../../components/burger";

export default function App() {
  return (
    <div className="App">
      <ToolBar />
      <BurgerBuilder className = "content"/>
      <burger />
    </div>
  );
}


