import {useRef, useState} from 'react'

const Notes = () => {
    const inputRef = useRef("")
    const [notes, setNotes] = useState(localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [])
    const handleAdd = () => {
        const newNote = {
            id: notes.length + 1,
            text: inputRef.current.value
        }
        setNotes([...notes, newNote])
        localStorage.setItem("notes", JSON.stringify([...notes, newNote]))
        inputRef.current.value = ""
    }
  
  return (
    <div className='notesContainer'>
        <input type="text" placeholder='What you need to do? ' className="input" ref={inputRef}  />
        <button className='btn btn-dark' onClick={handleAdd}>Add Note</button>
        <div className='resultContainer'>
            {notes.map((note, index) => (
                <div key={index} className="textareaContainer" >
               
                    <textarea wrap='soft' type="text"  className='list'  value={note.text}  onChange={(e) => {
                        const newNotes = [...notes]
                        newNotes[index].text = e.target.value
                        setNotes(newNotes)
                        localStorage.setItem("notes", JSON.stringify(newNotes))
                    }}  />
                    <button type="button" onClick={(e) => {
                        const newNotes = [...notes]
                        newNotes.splice(index, 1)
                        setNotes(newNotes)
                        localStorage.setItem("notes", JSON.stringify(newNotes))
                    }}  class="btn-close" aria-label="Close"></button>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default Notes