import "../styles/App.css";
import React, { useState, useEffect } from "react";
import Cell from "./Cell";

//////Table Component
function Table({ presentcolor, matrixstate, changecellcolor, style }) {
  return (
    <div className="grid-container" style={style}>
      {matrixstate.map((value, id) => (
        <Cell
          key={id}
          id={id}
          background_color={value}
          presentcolor={presentcolor}
          changecellcolor={changecellcolor}
        />
      ))}
    </div>
  );
}
export default Table;