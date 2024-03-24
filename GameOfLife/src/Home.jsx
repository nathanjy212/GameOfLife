import { useState } from 'react'
import './Home.css'
import Row from './Row';

export default function Home() {

  const [heightState, setHeightState] = useState(20);
  const [widthState, setWidthState] = useState(20);

  // I'll start first with a 20 by 20 grid
  const [gridState, setGridState] = useState(generateGrid(20, 20));

  const [heightErrorState, setHeightError] = useState(false);
  const [widthErrorState, setWidthError] = useState(false);

  // we need a way to count the boxes
  const [blackBoxCountState, setBlackBoxCount] = useState(0);

  function generateDeadorAlive () {
    const probability = Math.random();

    if (probability < 0.05) {
        return 1;
    } else {
        return 0;
    }
  }


  function generateGrid(height, width) {
    let blackBoxCounter = 0;
    
    // create a grid array 
    const grid = [];
    for (let rows = 0; rows < height; rows++) {
      // Then we need to create the row array
      const row = [];
      for (let cols = 0; cols < width; cols++) {
        // we want to push all the cells into row
        const cellState = generateDeadorAlive()
        if (cellState === 1) {
          blackBoxCounter++;
        } 
        row.push(cellState);
      }
      // now we want to push the row into grid
      grid.push(row);
    }

    // setBlackBoxCount(blackBoxCounter);

    // why do you need to return Grid? I tried returning "hello" and nothing really happens?
    return grid;
    // return {grid, blackBoxCounter};
  }




  // function generateGrid(height, width) {
  //   // let blackBoxCounter = 0;
    
  //   // create a grid array 
  //   const grid = [];
  //   for (let rows = 0; rows < height; rows++) {
  //     // Then we need to create the row array
  //     const row = [];
  //     for (let cols = 0; cols < width; cols++) {
  //       // we want to push all the cells into row
  //       const cellState = generateDeadorAlive()
  //       if (cellState === 1) {
  //       } 
  //       row.push(cellState);
  //     }
  //     // now we want to push the row into grid
  //     grid.push(row);
  //   }

  //   // setBlackBoxCount(blackBoxCounter);

  //   // why do you need to return Grid? I tried returning "hello" and nothing really happens?
  //   return grid;
  //   // return {grid, blackBoxCounter};
  // }

  // okay we want to create a function where when we click the cell,
  // it can toggle it between white and black.
  // so this function should be able to take in the col and row that was clicked
  function toggleCellState(rowIndex, colIndex) {
    // this is why we have setGridState because the state of the
    // grid changes
    setGridState(function(currentGrid) {
        // Create a copy of the current grid
        const newGrid = [];
        // normal loop here
        for (let i = 0; i < currentGrid.length; i++) {
          // if this is where the change is happeneing
          if (i === rowIndex) {
            // create a new row
            let newRow = [];
            for (let j = 0; j < currentGrid[i].length; j++) {
              if (j === colIndex) {
                // Determine the new state for the cell to be toggled
                let toggledCell = 0;
                if (currentGrid[i][j] === 0) {
                    toggledCell = 1;
                } else {
                    toggledCell = 0;
                }
                newRow.push(toggledCell);
              } else {
                  // If it's not the cell to be toggled, keep it as is and keep going
                  newRow.push(currentGrid[i][j]);
              }
            }
            // Add the changed row
            newGrid.push(newRow);
          } else {
              // If it's not the row to be modified, add the same row back
              newGrid.push(currentGrid[i]);
          }
        }

        // Return the new grid with the toggled cell.
        return newGrid;
    });
  }


  function nextGrid() {
    const newGrid = [];
    for (let rowIndex = 0; rowIndex < gridState.length; rowIndex++) {
      const newRow = [];
      // I am creating this nested loop so that we can dive all the way into 
      // building the specific cell
      for (let colIndex = 0; colIndex < gridState[rowIndex].length; colIndex++) {
        // once we have target the cell, now we want to know who
        // are the cells alive around us?
        // this should return us a number
        let neighborCells = countNeighborCells(rowIndex, colIndex);
        let currentCell = gridState[rowIndex][colIndex];
        // if my cell is alive
        if (currentCell === 1) {
          // the first condition is if I have less than 2 living neighbors I die
          // the 3rd condition is if I have more than 3 live neighbor cells, I also die
          if (neighborCells < 2 || neighborCells > 3) {
            currentCell = 0;
          }
        } else if (currentCell === 0 && neighborCells === 3) {
          currentCell = 1;
        }
        newRow.push(currentCell);
      }
      newGrid.push(newRow);
    }
    setGridState(newGrid);
  }

  // we need to constantly be checking our neighbors
  function countNeighborCells(x, y) {
    // so first we initialize count
    let count = 0;
    // this for loop is to check the row before and the row after
    for (let rowIndex = -1; rowIndex <= 1; rowIndex++) {
      // this is to check the column before and the column after
      for (let colIndex = -1; colIndex <= 1; colIndex++) {
        if (rowIndex === 0 && colIndex === 0) {
          continue;
        } // Skip the cell itself
        const neighborX = x + colIndex;
        const neighborY = y + rowIndex;
        
        // There are some conditions here we need to satisfy
        // 1) We need to make sure that the X coord is not -ve, it is is, we are out of bounds
        // 2) We also want to make sure that it is less that the widthState. If this is equal to
        // the widthState, this means that it is already out of bounds
        // same for the width
        if (neighborX >= 0 &&
          neighborX < widthState &&
          neighborY >= 0 &&
          neighborY < heightState) {
          count += gridState[neighborX][neighborY];
        }
      }
    }
    return count;
  }

  function handleHeightChange(event) {
    let value = event.target.value;
    if (value >= 3 && value <= 40) {
      setHeightError(false);
      setHeightState(value);
    } else {
      setHeightError(true);
    }
  }

  function handleWidthChange(event) {
    let value = event.target.value
    if (value >= 3 && value <= 40) {
      setWidthError(false);
      setWidthState(value);
    } else {
      setWidthError(true);
    }
  }

  // what if we remove the event?
  function handleSubmitButton() {
    if (heightState>=3 && heightState<=40 && widthState>=3 && widthState<=40) {
      setGridState(generateGrid(heightState, widthState));
    }
    
  }

  



  // function renderRow(row, rowIndex) {
  //   return <Row key={rowIndex} rowData={row} />;
  // }

  function renderRow(row, rowIndex) {
    return <Row key={rowIndex} rowData={row} rowIndex={rowIndex} toggleCellState={toggleCellState} />;
  }

  const renderedGrid = gridState.map(renderRow);


  console.log(renderedGrid);


  return(<div className='move-left'> 
    <nav id="mainNavbar" className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
      <a href="#" className="navbar-brand">HOME</a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navLinks">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">ABOUT</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link underline">GAME</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className='text'>Live Cells: {blackBoxCountState}</div>
    <div className='top-margin'>
      <label>
        Height:
        <input type='number' placeholder={20} onChange={handleHeightChange}></input>
      </label>
      {heightErrorState && <div style={{ color: 'red' }}>The grid height can only be sized within 3-40.</div>}
    </div>
    <div>
      <label>
        Width:
        <input type='number' placeholder={20} onChange={handleWidthChange}></input>
      </label>
      {widthErrorState && <div style={{ color: 'red' }}>The grid width can only be sized within 3-40.</div>}
    </div>
    <div>
      <button onClick = {handleSubmitButton}>Submit</button>
    </div>
    <div>
      {renderedGrid}
    </div>
    <div>
      <button onClick={nextGrid}>Next Iteration</button>
      <button onClick = {handleSubmitButton}>Reset</button>
    </div>
  </div>
      
    )
}
