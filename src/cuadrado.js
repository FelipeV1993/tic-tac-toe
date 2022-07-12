import React, { useState } from "react";

function Cuadrado({valor, onClick, top, bottom, left, right,}) {
  return (
    <button className="square bg-secondary" style={{
        
        borderTopColor: `${top}`,
        borderRightColor: `${right}`,
        borderBottomColor: `${bottom}`,
        borderLeft: `${left}`,
    }} onClick={onClick} >
      {valor}
    </button>
  );
}

export default Cuadrado;