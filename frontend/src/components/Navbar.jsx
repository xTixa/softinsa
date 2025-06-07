import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';
import logo from '../assets/logotipo.png'; 

export default function Navbar() {
  const [categorias, setCategorias] = useState([]);
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  useEffect(() => {
    axios.get('/api/categorias')
      .then((res) => setCategorias(res.data))
      .catch((err) => console.error('Erro ao buscar categorias:', err));
  }, []);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const dropdownRef = useRef();

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAberto(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="SOFTINSA" className="logo" />

        <select className="categoria-select">
          <option value="">Categoria</option>
          {categorias.map((cat) => (
            <option key={cat.id_categoria} value={cat.id_categoria}>
              {cat.nome_categoria}
            </option>
          ))}
        </select>

        <input type="text" className="pesquisa-input" placeholder="Pesquisar" />
        <button className="pesquisar-btn">Pesquisar</button>
      </div>

      <div className="navbar-right">
        <div className="dropdown-container" ref={dropdownRef}>
          <button className="round-btn" onClick={toggleDropdown}>˅</button>
          {showDropdown && user?.tipo === 'gestor' && (
            <div className="dropdown-menu">
              <button onClick={() => navigate('/admin')}>🏠 Página Inicial</button>
              <button onClick={() => navigate('/admin/cursos')}>📚 Gestão de Cursos</button>
              <button onClick={() => navigate('/admin/formadores')}>👨‍🏫 Gestão de Formadores</button>
              <button onClick={() => navigate('/admin/formandos')}>👨‍🎓 Gestão de Formandos</button>
            </div>
          )}
        </div>

        <button className="icon-btn">📅 Mensagens</button>
        <button className="icon-btn">💬 Fórum</button>
        <button className="round-btn">🔔</button>

        <div className="user-menu-container" ref={menuRef}>
          <button className="round-btn" onClick={toggleMenu}>👤</button>
          {menuAberto && (
            <div className="user-dropdown">
              <button onClick={() => navigate('/perfil')}>👤 Perfil</button>
              <button onClick={() => navigate('/definicoes')}>⚙️ Definições</button>
              <button onClick={handleLogout}>🔓 Terminar sessão</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
