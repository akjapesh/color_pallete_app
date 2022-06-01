import "../styles/App.css";
import React, { useState, useEffect } from "react";

//Cell Component
function Cell({ id, backgroundColor, presentColor, changeCellColor }) {
  const [hoverColor, setHoverColor] = useState("#FFFFFF");
  const onClick = () => {
    console.log(id);
    changeCellColor({ id, newColor: presentColor });
  };
  const hoverIn = () => {
    console.log(presentColor);
    setHoverColor(presentColor);
  };
  const hoverOut = () => {
    setHoverColor("#FFFFFF");
    // setHovercolor(background_color);
  };
  return (
    <div
      className="cell"
      onClick={onClick}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      style={{
        // backgroundColor: `${hovercolor}`
        backgroundColor: `${
          hoverColor === "#FFFFFF" ? backgroundColor : hoverColor
        }`,
      }}
    />
  );
}

export default Cell;
