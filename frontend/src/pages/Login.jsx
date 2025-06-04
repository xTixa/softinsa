import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/users';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.username === email && u.password === password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));

      switch (user.role) {
        case 'admin':
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
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Iniciar Sessão</h2>
        <p>Insira o seu Email e Palavra-Passe para continuar</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="formando@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password-section">
          <label>Palavra-Passe</label>
          <a href="#">Esqueci-me da Palavra-Passe</a>
        </div>
        <input
          type="password"
          placeholder="**********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
