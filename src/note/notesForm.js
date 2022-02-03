import React from "react"
import { useNotesStore } from "./notesContext"

export const NewNoteForm = () => {
    const [noteText, setNoteText] = React.useState('')
    const notesStore = useNotesStore()

    const addNote = () => {
        notesStore.addNote(noteText)
        setNoteText('')
    }

    return (
        <>
            <input
                type="text"
                value={noteText}
                onChange={e => setNoteText(e.target.value)}
            />
            <button
                onClick={addNote}
            >
                Add a new note
            </button>
        </>
    )
}