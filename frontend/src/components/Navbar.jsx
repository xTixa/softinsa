import './Navbar.css';
import logo from '../assets/logotipo.png'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="SOFTINSA" className="logo" />

        <select className="categoria-select">
          <option>Categoria</option>
        </select>

        <input type="text" className="pesquisa-input" placeholder="Pesquisar" />
        <button className="pesquisar-btn">Pesquisar</button>
      </div>

      <div className="navbar-right">
        <button className="round-btn">˅</button>
        <button className="icon-btn">📅 Mensagens</button>
        <button className="icon-btn">💬 Fórum</button>
        <button className="round-btn">🔔</button>
        <button className="round-btn">👤</button>
      </div>
    </nav>
  );
}
