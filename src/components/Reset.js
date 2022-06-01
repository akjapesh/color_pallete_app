import "../styles/App.css";
import React, { useState, useEffect } from "react";

///Reset Component
function Reset({ matrixState, changeCellColor,setMatrixState }) {
  const numRows = 32,
    numCols = 32;
  function resetMatrix() {
    setMatrixState(()=>{return Array.from({ length: numRows * numCols }, () => "#FFFFFF");})
    
  }
  return (
    <div className="center">
      <button type="button" onClick={resetMatrix}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
