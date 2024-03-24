export default function Contact() {
    return(
        <div>
            <nav id="mainNavbar" className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
            <a href="http://localhost:5173/about" className="navbar-brand">HOME</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navLinks">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">GAME</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link underline">CONTACT</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="top-margin move-left">
            <h1>Come! Let's Collaborate!</h1>
            <h3>Connect with me!</h3>
          </div>
          <div class="contactInfo move-left">
                <li><a href="mailto:yap.n@northeastern.edu">Email</a></li>
                <li><a href="https://github.com/nathanjy212/PersonalProjects.git">Github</a></li>
                <li><a href="https://www.linkedin.com/in/nathan-yap-833366130/">LinkedIn</a></li>
            </div>
          
        </div>

    );
}