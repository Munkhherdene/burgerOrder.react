import React from "react";
import "./style.css";


export const MyCoolButton = (props) => {
  const clickHandler = (c) => {
     alert("comment is : " +  props.comment)};

  return (
    <div>
      {/* <span>{props.tovchner ? props.tovchner : "My default"}</span> <br></br> */}
      <span className="coolText"> test</span>
      <br/>
      <input
        onClick={() => clickHandler(props.comment)}
        className="myCoolButton"
        type="button"
        value="Click me"
      />
    </div>
  );
};
