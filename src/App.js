import { Route, HashRouter, Link, Routes  } from "react-router-dom";
import Home from "./routes/FrontPage.js";
import About from "./routes/AboutMe.js";
import "./App.css"

function Navigation() {
    return (
      <nav>
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/about">About</Link>
      </nav>
    );
  }

const App = () => {
    return (
        <HashRouter>
        <div>
            <Navigation />
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            </Routes>
        </div>
      </HashRouter>
    )
}

export default App;
