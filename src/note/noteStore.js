import { nanoid } from "nanoid"

export function createNotesStore() {
    return {
        notes: [],
        addNote(text) {
            this.notes.push({
                id: nanoid(),
                text         
            })
        },
        removeNote(id) {
            this.notes = this.notes.filter(item => item.id !== id)
        }
    }
}