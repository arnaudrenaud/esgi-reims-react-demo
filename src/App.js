import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Names from "./Names";
import Counter from "./Counter";

function App() {
  return (
    <>
      <nav className="Nav">
        <Link to="/" className="Nav-link">
          Compteur
        </Link>
        <Link to="/names" className="Nav-link">
          Générateur de noms
        </Link>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/names" Component={Names} />
          <Route path="/" Component={Counter} />
        </Routes>
      </div>
    </>
  );
}

export default App;
