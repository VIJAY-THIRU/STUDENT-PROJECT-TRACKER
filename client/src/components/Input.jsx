import { useState } from 'react';
export default function Input({ addTodo }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text) return;
    addTodo(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit} style={{marginBottom: '15px'}}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="New todo ma" style={{padding: '8px', width: '70%'}} />
      <button type="submit" style={{padding: '8px 12px', marginLeft: '8px'}}>Add</button>
    </form>
  )
}