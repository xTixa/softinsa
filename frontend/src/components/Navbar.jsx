import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';
import logo from '../assets/logotipo.png';

export default function Navbar() {
  const [categorias, setCategorias] = useState([]);
  const [menuAberto, setMenuAberto] = useState(false);
  const [submenuDefinicoes, setSubmenuDefinicoes] = useState(false);
  const [submenuAjuda, setSubmenuAjuda] = useState(false);
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);
  const [showNotificacoes, setShowNotificacoes] = useState(false);
  const notificacoesRef = useRef();

  const navigate = useNavigate();
  const menuRef = useRef();
  const dropdownRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get('/api/categorias')
      .then((res) => setCategorias(res.data))
      .catch((err) => console.error('Erro ao buscar categorias:', err));
  }, []);

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleLogoClick = () => {
    switch (user?.tipo) {
      case 'gestor':
        navigate('/admin');
        break;
      case 'formador':
        navigate('/formador');
        break;
      case 'formando':
        navigate('/formando');
        break;
      default:
        navigate('/');
    }
  };

  // Fecha dropdowns ao clicar fora
  useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      menuRef.current && !menuRef.current.contains(e.target) &&
      dropdownRef.current && !dropdownRef.current.contains(e.target) &&
      notificacoesRef.current && !notificacoesRef.current.contains(e.target)
    ) {
      setMenuAberto(false);
      setShowDropdown(false);
      setSubmenuDefinicoes(false);
      setSubmenuAjuda(false);
      setShowNotificacoes(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={logo}
          alt="SOFTINSA"
          className="logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />

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
        <div className="notificacoes-container" ref={notificacoesRef}>
          <button className="round-btn" onClick={() => setShowNotificacoes(!showNotificacoes)}>🔔</button>
          {showNotificacoes && (
            <div className="notificacoes-dropdown">
              <p><strong>Notificações</strong></p>
              <ul>
                <li>@import</li>
                <li>@import</li>
                <li>@import</li>
              </ul>
            </div>
          )}
        </div>


        <div className="user-menu-container" ref={menuRef}>
          <button className="round-btn" onClick={toggleMenu}>👤</button>
          {menuAberto && (
            <div className="user-dropdown">
              <button onClick={() => {
                const user = JSON.parse(localStorage.getItem('user'));

                if (!user) return navigate('/login'); 

                switch (user.tipo) {
                  case 'admin':
                    navigate(`/admin/perfil/${user.id}`);
                    break;
                  case 'gestor':
                    navigate(`/gestor/perfil/${user.id}`);
                    break;
                  case 'formador':
                    navigate(`/formador/perfil/${user.id}`);
                    break;
                  case 'formando':
                    navigate(`/formando/perfil`);
                    break;
                  default:
                    navigate('/login');
                }
              }}>👤 Perfil</button>

              <button onClick={() => navigate('/conta')}>🗂️ Conta</button>

              <div className="submenu">
                <button onClick={() => setSubmenuDefinicoes(!submenuDefinicoes)}>
                  ⚙️ Definições {submenuDefinicoes ? '▲' : '▼'}
                </button>
                {submenuDefinicoes && (
                  <div className="submenu-items">
                    <button onClick={() => setNotificacoesAtivas(!notificacoesAtivas)}>
                      🔔 Notificações: {notificacoesAtivas ? 'Enable' : 'Disable'}
                    </button>
                    <button onClick={() => navigate('/alterar-password')}>Alterar Password</button>
                  </div>
                )}
              </div>

              <div className="submenu">
                <button onClick={() => setSubmenuAjuda(!submenuAjuda)}>
                  ❓ Ajuda {submenuAjuda ? '▲' : '▼'}
                </button>
                {submenuAjuda && (
                  <div className="submenu-items">
                    <button onClick={() => navigate('/ajuda')}>Ajuda</button>
                    <button onClick={() => navigate('/contactar-gestor')}>Contactar Administrador</button>
                  </div>
                )}
              </div>

              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
