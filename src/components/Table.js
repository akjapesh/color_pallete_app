import "../styles/App.css";
import React, { useState, useEffect } from "react";
import Cell from "./Cell";

//////Table Component
function Table({ presentColor, matrixState, changeCellColor, style }) {
  return (
    <div className="grid-container" style={style}>
      {matrixState.map((color, id) => (
        <Cell
          key={id}
          id={id}
          backgroundColor={color}
          presentColor={presentColor}
          changeCellColor={changeCellColor}
        />
      ))}
    </div>
  );
}
export default Table;
