import React from "react";
import "./index.css";

function Tab({ name, humidity, isSelected, onClick }) {
  return (
    <div className={`tab ${isSelected ? 'isSelected': ''}`} isSelected={isSelected} onClick={onClick}>
      <div className="pot-wrap">
        <div style={{margin: `-${humidity}px -25px`, height: `${humidity}px`}} className="pot">
          {humidity}%
        </div>
      </div>
      <h2>{name}</h2>
    </div>);
}

export default Tab;
