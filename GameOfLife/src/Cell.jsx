import React from 'react';
import './Cell.css'

export default function Cell(props) {
  const value = props.value;
  
  let boxColor = " box-white";
  if (value === 0) {
    boxColor = ' box-white';
  } else if (value === 1) {
    boxColor = ' box-black';
  }

  const className = 'box' + boxColor;

  function handleClick() {
    props.toggleCellState(props.rowIndex, props.colIndex);
  }

  return <span className={className} onClick={() => handleClick()}></span>;
}
