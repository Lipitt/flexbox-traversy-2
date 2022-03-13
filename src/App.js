import "./style.css";

import { FaArrowsAlt, FaArrowsAltV, FaMobile } from "react-icons/fa";

// function App() {
//   return (
//     <div className="flex-container">
//       <div className="item">Item 1</div>
//       <div className="item">Item 2</div>
//       <div className="item">Item 3</div>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">Flexbox</div>
          <ul className="nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="header">
        <div className="container">
          <div>
            <h1>Flexbox crash course</h1>
            <p>
              This crash course was created by Brad Traversy to help you learn
              the basics of flexbox. Flexbox is a very important and useful tool
              in CSS.
            </p>
          </div>
          <img src="https://traversymedia.com/images/grid.svg" alt="" />
        </div>
      </header>

      <section className="boxes">
        <div className="container">
          <div className="box">
            <h2>
              <FaArrowsAltV />
              Alignment and Space
            </h2>
            <p>
              A more efficient way to lay out, align and distribute space among
              items in a container
            </p>
          </div>
          <div className="box">
            <h2>
              <FaArrowsAlt />
              Tricky Positioning
            </h2>
            <p>
              Flexbox usually solves tricky problems including how to position
              or dynamically resize element on a page
            </p>
          </div>
          <div className="box">
            <h2>
              <FaMobile />
              Responsive Design
            </h2>
            <p>
              Flexbox makes building a website layout (and making it
              responsive!) much much easier
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
