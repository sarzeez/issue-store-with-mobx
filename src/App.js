import { useObserver } from "mobx-react";
import { NewNoteForm } from "./note/notesForm";
import { useNotesStore } from "./note/notesContext";

const App = () => {
  const notesStore = useNotesStore()
  return useObserver(() => (
    <div>
      <NewNoteForm />
      <ul>
        {
          notesStore.notes.map(note => (
            <li key={note.id}>{note.text}</li>
          ))
        }
      </ul>
    </div>
  ))
}

export default App;
