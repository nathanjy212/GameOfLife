import './About.css'



export default function About() {
    return (
        <div>
          <nav id="mainNavbar" className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
            <a href="https://nathan-yap-project2-gameoflife.onrender.com/about" className="navbar-brand">HOME</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navLinks">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="https://nathan-yap-project2-gameoflife.onrender.com/about" className="nav-link underline">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a href="https://nathan-yap-project2-gameoflife.onrender.com/" className="nav-link">GAME</a>
                </li>
                <li className="nav-item">
                  <a href="https://nathan-yap-project2-gameoflife.onrender.com/contact" className="nav-link">CONTACT</a>
                </li>
              </ul>
            </div>
          </nav>
          <section className="container-fluid top-margin">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="text-center">Welcome to Conway's Game of Life!</h2>
                <p>The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells,
                    each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively).
                    Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, 
                    or diagonally adjacent. At each step in time, the following transitions occur:</p>
                <ol>
                    <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
                    <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
                    <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
                    <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
                </ol>
                <p>The initial pattern constitutes the seed of the system. The first generation is created by applying 
                    the above rules simultaneously to every cell in the seed, live or dead; births and deaths occur 
                    simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation
                     is a pure function of the preceding one. The rules continue to be applied repeatedly to create 
                     further generations.</p>
              </div>
              <div className="col-lg-6">
                <div className="d-none d-lg-block">
                  <img className="img-fluid" src="assets/imgs/GameOfLife1.gif" alt="Game of Life animation"/>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}
