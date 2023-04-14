import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

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
        Compte :{" "}
        <span className={count > 5 ? "Count-too-high" : ""}>{count}</span>
        <br />
        <button onClick={increment}>Incrémenter</button>
        <button onClick={decrement}>Décrémenter</button>
      </div>
    </>
  );
}

export default App;
