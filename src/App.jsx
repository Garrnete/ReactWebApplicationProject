import CharacterCard from "./components/CharacterCard";

function App() {
  return (
    <div>
      <h1>Sorting Hat Portal</h1>
      <CharacterCard name="Harry Potter" house="Gryffindor" />
      <CharacterCard name="Draco Malfoy" house="Slytherin" />
    </div>
  );
}

export default App;