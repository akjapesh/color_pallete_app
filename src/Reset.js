import "./App.css";
import React, { useState, useEffect } from "react";

///Reset Component
function Reset({ matrixstate, changecellcolor }) {
  function resetmatrix() {
    matrixstate.map((ele, id) => {
      changecellcolor({ id, newcolor: "#FFFFFF" });
    });
  }
  return (
    <div className="center">
      <button type="button" onClick={resetmatrix}>
        Reset
      </button>
    </div>
  );
}
