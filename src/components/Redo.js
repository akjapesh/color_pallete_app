import "../styles/App.css";
import React, { useState, useEffect } from "react";

///Reset Component
function Redo({ state,  setMatrixState, states,stateIndex, setStateIndex ,stateLastIndex}) {
  console.log(stateIndex,stateLastIndex);
    const canRedo=stateIndex<stateLastIndex;
  const goForward=(steps=1)=>{
      setStateIndex(Math.min(states.length-1,Number(stateIndex)+(Number(steps)||1)));
        // setMatrixState(state);
        console.log(state);
    };
  return (
    <div className="actions">
      <button type="button" onClick={goForward} disabled={!canRedo}>
        Redo
      </button>
    </div>
  );
}

export default Redo;
