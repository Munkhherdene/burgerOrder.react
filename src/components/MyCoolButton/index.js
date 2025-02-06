import React from "react";
import "./style.css";

export const MyCoolButton = (props) => {
  const clickHandler = () => {
    alert("I was clicked");
  };

  return (
    <div>
      <span>{`Өнөөдөр : ${new Date()}`}</span>
      <span>{props.tovchner ? props.tovchner : "My default"}</span> <br></br>
      <input
        onClick={clickHandler}
        className="myCoolButton"
        type="button"
        value="Click me"
      />
    </div>
  );
};
