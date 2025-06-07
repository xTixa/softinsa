import { useState, useRef, useEffect } from 'react';
import './FormandoActionsMenu.css';

export default function FormandoActionsMenu({ onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="actions-menu" ref={ref}>
      <button className="menu-btn" onClick={() => setOpen(!open)}>⋮</button>
      {open && (
        <div className="menu-options">
          <button onClick={onEdit}>✏️ Editar</button>
          <button onClick={onDelete}>🗑️ Remover</button>
        </div>
      )}
    </div>
  );
}
