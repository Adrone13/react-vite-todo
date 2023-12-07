import { useState } from 'react';

export function TodoListItem(props) {
  const { todo, onDoneChange, onEdit, onDelete } = props;

  const [isEdited, setIsEdited] = useState(false);
  const [editedNote, setEditedNote] = useState('');

  const handleEditStart = () => {
    setIsEdited(true);
    setEditedNote(todo.text);
  };
  const handleEditChange = (text) => {
    setEditedNote(text);
  };
  const handleEditConfirm = () => {
    if (todo.text !== editedNote) {
      onEdit(editedNote);
    }

    setEditedNote('');
    setIsEdited(false);
  }
  const handleEditReject = () => {
    setEditedNote('');
    setIsEdited(false);
  }
  

  return (
    <li className='notes-list-item'>
      <input 
        className='notes-list-item-checkbox'
        type="checkbox"
        checked={todo.isDone} 
        onChange={(e) => onDoneChange(e.target.checked)}
      />
      {isEdited
        ? <input 
            className='input' 
            type="text" 
            value={editedNote}
            onChange={(e) => handleEditChange(e.target.value)} 
          />
        : <p className='notes-list-item-text'>{todo.text}</p>
      }
      {!isEdited && <button 
        className='button notes-list-item-button'
        onClick={handleEditStart}
      >
        ✏️
      </button>}
      {isEdited && <button 
        className='button notes-list-item-button'
        onClick={() => handleEditConfirm(todo.id)}
        disabled={todo.text === editedNote}
      >
        ✅
      </button>}
      {isEdited && <button 
        className='button notes-list-item-button'
        onClick={() => handleEditReject(todo.id)}
      >
        ❌
      </button>}
      {!isEdited && <button 
        className='button notes-list-item-button'
        onClick={onDelete}
      >
        🗑️
      </button>}
    </li>
  );
}