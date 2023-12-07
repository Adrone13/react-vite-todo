import { useState } from 'react';

import { Header, AddNote, TodoList, TodoListItem } from './components';

import { todos as todosMock } from './todos.mock';

import './App.css';

function App() {
  const [todos, setNotes] = useState(todosMock);

  const handleAddNote = (text) => {
    if (!text) {
      return;
    }

    const createdAt = new Date();
    const note = {
      id: Date.now(),
      text: text,
      isDone: false,
    };

    setNotes([note, ...todos]);
  }
  const handleNoteDoneChange = (noteId, isDone) => {
    setNotes(todos.map(note => {
      if (note.id !== noteId) {
        return note;
      }

      return Object.assign(note, { isDone });
    }));
  };
  const handleDelete = (noteId) => {
    setNotes(todos.filter(note => note.id !== noteId));
  }
  const handleNoteEdited = (noteId, editedText) => {
    console.log(noteId, editedText);

    if (!editedText) {
      handleDelete(noteId);
      
      return;
    }

    setNotes(todos.map(note => {
      if (note.id !== noteId) {
        return note;
      }

      return Object.assign(note, { text: editedText, isEdited: false });
    }));
  }

  return (
    <>
      <div className='container'>
        <Header />
        <AddNote onAdd={handleAddNote} />
        <TodoList>
          {todos.map(item => (
            <TodoListItem
              key={item.id}
              todo={item}
              onDoneChange={(isDone) => handleNoteDoneChange(item.id, isDone)}
              onEdit={(editedText) => handleNoteEdited(item.id, editedText)}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </TodoList>
      </div>
    </>
  )
}

export default App
