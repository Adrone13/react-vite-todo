import { useState } from 'react';

export function TodoListItem(props) {
  const { todo, onDoneChange, onEdit, onDelete } = props;

  const [isEdited, setIsEdited] = useState(false);
  const [editedNote, setEditedNote] = useState(null);

  const handleEditStart = () => {
    setIsEdited(true);
  };
  const handleEditChange = (text) => {
    setEditedNote(text);
  };
  const handleEditConfirm = () => {
    onEdit(editedNote);
    setEditedNote(null);
    setIsEdited(false);
  }
  const handleEditReject = () => {
    setIsEdited(false);
    setEditedNote(null);
  }
  

  return (
    <li className='notes-list-item'>
      <input 
        className='notes-list-item-checkbox'
        type="checkbox"
        checked={todo.isDone} 
        onChange={onDoneChange}
      />
      {isEdited
        ? <input 
            className='input' 
            type="text" 
            defaultValue={todo.text}
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