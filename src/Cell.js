import "./App.css";
import React, { useState, useEffect } from "react";

//Cell Component
function Cell({ id, background_color, presentcolor, changecellcolor }) {
  const [hovercolor, setHovercolor] = useState("#FFFFFF");
  const onClick = () => {
    changecellcolor({ id, newcolor: presentcolor });
  };
  const hoverIn = () => {
    setHovercolor(presentcolor);
  };
  const hoverOut = () => {
    setHovercolor("#FFFFFF");
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
          hovercolor === "#FFFFFF" ? background_color : hovercolor
        }`,
      }}
    />
  );
}
