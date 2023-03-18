function App({ notes }) {
  return (
    <div>
      <h1>notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}> {note.content} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
