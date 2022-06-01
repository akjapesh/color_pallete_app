import "./App.css";
import React, { useState, useEffect } from "react";
import { CirclePicker } from "react-color";
import Table from "./Table.js";
import Reset from "./Reset.js";

///Main App Component
function App() {
  const num_rows = 32,
    num_cols = 32;
  const [matrixstate, setMatrixstate] = useState(() => {
    return Array.from({ length: num_rows * num_cols }, () => "#FFFFFF");
  });

  const [presentcolor, setPresentcolor] = useState("#FFFFFF");

  function changecellcolor({ id, newcolor }) {
    setMatrixstate((pr_state) => {
      const new_state = [...pr_state];
      new_state[id] = newcolor;
      return new_state;
    });
  }

  function handleChangeComplete(pr_color) {
    setPresentcolor(pr_color.hex);
    console.log(pr_color.hex);
  }

  return (
    <div className="App center">
      <div style={{ margin: 20 }}>Pixel Editorr</div>
      <div className="center">
        <CirclePicker onChangeComplete={handleChangeComplete} />
      </div>
      <Table
        presentcolor={presentcolor}
        matrixstate={matrixstate}
        changecellcolor={changecellcolor}
        style={{ margin: 20 }}
      />
      <Reset matrixstate={matrixstate} changecellcolor={changecellcolor} />
    </div>
  );
}
export default App;
