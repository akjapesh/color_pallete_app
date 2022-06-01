import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { CirclePicker } from "react-color";
import Table from "./components/Table";
import Reset from "./components/Reset";
///Main App Component
function App() {
  const numRows = 32,
    numCols = 32;
  const [matrixState, setMatrixState] = useState(() => {
    return Array.from({ length: numRows * numCols }, () => "#FFFFFF");
  });

  const [presentColor, setPresentColor] = useState("#FFFFFF");

  function changeCellColor({ id, newColor }) {
    setMatrixState((previousState) => {
      const newState = [...previousState];
      newState[id] = newColor;
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
      <Reset matrixState={matrixState} changeCellColor={changeCellColor} setMatrixState={setMatrixState} />
    </div>
  );
}
export default App;
