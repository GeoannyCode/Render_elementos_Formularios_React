import "./styles.css";
import { useEffect, useState } from "react";
import { Note } from "./Note";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  //obtener datos de la web
  useEffect(() => {
    console.log("UseEffect");
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setNotes(json);
        setLoading(false);
      });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
    };

    setNotes([...notes, noteToAddToState]);
    setNewNote("");
  };

  return (
    <>
      <navbar className="nav">
        <form onSubmit={handleSubmit} className="form">
          <input type="text" onChange={handleChange} value={newNote} />
          <button>Crear nota</button>
        </form>
      </navbar>

      <h1>Notes</h1>
      {loading ? "Cargando..." : ""}
      <div className="container">
        {notes.map((note) => (
          <div className="card">
            <div className="content">
              <Note key={note.id} {...note} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
