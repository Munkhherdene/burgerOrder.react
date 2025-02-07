import React from "react";
import "./style.css";
import { Comment } from "../comments";


export const MyCoolButton = (props) => {
  const clickHandler = (c) => {
     alert("comment is : " +  props.comment)};

  return (
    <div>
      {/* <span>{props.tovchner ? props.tovchner : "My default"}</span> <br></br> */}
      <input
        onClick={() => clickHandler(props.comment)}
        className="myCoolButton"
        type="button"
        value="Click me"
      />
    </div>
  );
};
