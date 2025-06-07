import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormandoMenuDrop.css';

export default function FormandoMenuDropdown({ onAdd }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

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
    <div className="menu-dropdown" ref={ref}>
      <button className="menu-btn" onClick={() => setOpen(!open)}>⋮</button>
      {open && (
        <div className="menu-options">
          <button onClick={() => navigate('/admin/formandos/novo')}>➕ Adicionar</button>
          <button onClick={() => alert('Exportar CSV')}>⬇️ Exportar CSV</button>
          <button onClick={() => alert('Importar CSV')}>⬆️ Importar CSV</button>
        </div>
      )}
    </div>
  );
}
