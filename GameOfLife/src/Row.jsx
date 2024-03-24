import React from 'react';
import Cell from './Cell';
import './Cell.css'
import './Row.css'


export default function Row(props) {
  const rowData = props.rowData;
  const rowIndex = props.rowIndex;
  const toggleCellState = props.toggleCellState;

  return (
    <div className="row">
      {rowData.map((cellData, colIndex) => (
        <Cell key={colIndex} value={cellData} rowIndex={rowIndex} colIndex={colIndex} toggleCellState={toggleCellState} />
      ))}
    </div>
  );
}





