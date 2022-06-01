import "../styles/App.css";
import React, { useState, useEffect } from "react";

///Reset Component
function Reset({ matrixstate, changecellcolor }) {
  const num_rows = 32,
    num_cols = 32;
  function resetmatrix() {
    return Array.from({ length: num_rows * num_cols }, () => "#FFFFFF");
  }
  return (
    <div className="center">
      <button type="button" onClick={resetmatrix}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
