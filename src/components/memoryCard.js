import React from "react";
import "./memoryCard.css";

const style = {
    cardStyle: {
    },
    textStyle: {
    }
};

const MemoryCard = props => (
    <div 
        style={style.cardStyle}
        className="memCard"
    >
      <span
      style={style.textStyle}
      >
      {props.id} 
      </span>
  </div>
);

export default MemoryCard;