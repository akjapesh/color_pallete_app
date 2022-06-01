import "../styles/App.css";
import React, { useState, useEffect } from "react";

///Reset Component
function Reset({ matrixState,setMatrixState, setStateIndex,setStates }) {
  const numRows = 32,
    numCols = 32;
  function resetMatrix() {
    setMatrixState(()=>{return Array.from({ length: numRows * numCols }, () => "#FFFFFF");})
    setStateIndex(0);
    setStates(()=>{return [Array.from({ length: numRows * numCols }, () => "#FFFFFF")];});
  }
  return (
    <div className="actions">
      <button type="button" onClick={resetMatrix}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
