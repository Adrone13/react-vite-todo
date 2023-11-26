import { useState } from 'react';

export function AddNote(props) {
  const { onAdd } = props;

  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
  const handleAdd = () => {
    onAdd(text);
    setText('');
  };

  return (
    <div className='new-note-section'>
      <input 
        className='input' 
        type="text" 
        placeholder='New Note'
        value={text}
        onChange={handleChange}
      />
      <button 
        className='button'
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}