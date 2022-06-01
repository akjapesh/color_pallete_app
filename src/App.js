import "./styles/App.css";
import React, { useState, useEffect, useMemo } from "react";
import isEqual from "lodash/isEqual";
import { CirclePicker } from "react-color";
import Table from "./components/Table";
import Reset from "./components/Reset";
import Undo from "./components/Undo";
import Redo from "./components/Redo";
///Main App Component
function App() {
  const numRows = 32,
    numCols = 32;
  const [matrixState, setMatrixState] = useState(() => {
    if (window.localStorage.getItem("matrixState"))
      return JSON.parse(window.localStorage.getItem("matrixState"));
    return Array.from({ length: numRows * numCols }, () => "#FFFFFF");
  });
  const [states, setStates] = useState(() => {
    if (window.localStorage.getItem("states"))
      return JSON.parse(window.localStorage.getItem("states"));
    return [Array.from({ length: numRows * numCols }, () => "#FFFFFF")];
  });
  const [stateIndex, setStateIndex] = useState(()=>{
    if (window.localStorage.getItem("stateIndex"))
      return window.localStorage.getItem("stateIndex");
    return 0;});
    
  const [presentColor, setPresentColor] = useState("#FFFFFF");

  const state = useMemo(() => states[stateIndex], [states, stateIndex]);

  useEffect(() => {
    setMatrixState(state);
  }, [state]);

  useEffect(()=>{
    window.localStorage.setItem("stateIndex",stateIndex);
    window.localStorage.setItem("matrixState", JSON.stringify(matrixState));
    window.localStorage.setItem("states", JSON.stringify(states));
  },[stateIndex,matrixState,states])

  const setState = (value) => {
    if (isEqual(state, value)) {
      return;
    }
    const copy = states.slice(0, stateIndex + 1);
    copy.push(value);
    setStates(copy);
    setStateIndex(copy.length - 1);
  };

  function changeCellColor({ id, newColor }) {
    setMatrixState((previousState) => {
      const newState = [...previousState];
      newState[id] = newColor;
      setState(newState);
      return newState;
    });
  }

  function handleChangeComplete(previousColor) {
    setPresentColor(previousColor.hex);
    console.log(previousColor.hex);
  }

  return (
    <div className="App center">
      <div style={{ margin: 20 }}>Pixel Editorr</div>
      <div className="center">
        <CirclePicker onChangeComplete={handleChangeComplete} />
      </div>
      <Table
        presentColor={presentColor}
        matrixState={matrixState}
        changeCellColor={changeCellColor}
        style={{ margin: 20 }}
      />
      <div>
        <Reset
          matrixState={matrixState}
          setMatrixState={setMatrixState}
          setStateIndex={setStateIndex}
          setStates={setStates}
        />
        <Undo
          state={state}
          matrixState={matrixState}
          setMatrixState={setMatrixState}
          stateIndex={stateIndex}
          setStateIndex={setStateIndex}
        />
        <Redo
          state={state}
          setMatrixState={setMatrixState}
          states={states}
          stateIndex={stateIndex}
          setStateIndex={setStateIndex}
          stateLastIndex={states.length - 1}
        />
      </div>
    </div>
  );
}
export default App;
