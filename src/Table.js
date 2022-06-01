import "./App.css";
import React, { useState, useEffect } from "react";
import Cell from "./Cell.js";

//////Table Component
function Table({ presentcolor, matrixstate, changecellcolor, style }) {
  return (
    <div className="grid-container" style={style}>
      {matrixstate.map((value, id) => (
        <Cell
          key={id}
          id={id}
          background_color={value}
          resentcolor={presentcolor}
          changecellcolor={changecellcolor}
        />
      ))}
    </div>
  );
}
