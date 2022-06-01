import "../styles/App.css";
import React, { useState, useEffect } from "react";

///Reset Component
function Undo({ state, setMatrixState, stateIndex, setStateIndex }) {
  const canUndo = stateIndex > 0;
  const goBack = (steps = 1) => {
    setStateIndex(Math.max(0, Number(stateIndex) - (Number(steps) || 1)));
    console.log(state);
    // setMatrixState(state);
  };
  return (
    <div className="actions">
      <button type="button" onClick={goBack} disabled={!canUndo}>
        Undo
      </button>
    </div>
  );
}

export default Undo;
