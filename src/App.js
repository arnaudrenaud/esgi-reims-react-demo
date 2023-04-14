import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Names from "./Names";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

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
          <Route
            path="/"
            element={<Counter count={count} setCount={setCount} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
