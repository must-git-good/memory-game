import React from "react";
import "./memoryCard.css";
// import ScoreTally from "./scoreTally";


const style = {
    cardStyle: {
        backgroundImage: `"url('https://picsum.photos/200/300/?image=3')"`
    },
    textStyle: {
        color: "transparent"
    }
};

const MemoryCard = props => (
    <div 
        style={style.cardStyle}
        className={`memCard${props.id}`}
        id={props.id}

    >
      <span
      style={style.textStyle}
      >
      {props.id} 
      </span>
  </div>
);

export default MemoryCard;