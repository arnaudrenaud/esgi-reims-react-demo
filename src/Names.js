import { useState } from "react";

const Names = () => {
  const [person, setPerson] = useState(null);

  const fetchPerson = async () => {
    const response = await fetch("https://randomuser.me/api");
    const result = await response.json();
    setPerson(result.results[0]);
  };

  return (
    <>
      <h1>Générateur de noms</h1>
      <button onClick={fetchPerson}>Nouveau nom</button>
      <br />
      {person?.name.first} {person?.name.last}
    </>
  );
};

export default Names;
