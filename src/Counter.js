import "./App.css";

function Counter({ count, setCount }) {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Compteur</h1>
      Compte :{" "}
      <span className={count > 5 ? "Count-too-high" : ""}>{count}</span>
      <br />
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </>
  );
}

export default Counter;
