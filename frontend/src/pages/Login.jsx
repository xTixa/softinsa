import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      const res = await axios.post('/api/auth/login', {
        email,
        password
      });

      const user = res.data;

      // Guarda no localStorage
      localStorage.setItem('user', JSON.stringify(user));

      // Redireciona conforme o tipo
      switch (user.tipo) {
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
          setErro('Tipo de utilizador desconhecido.');
      }
    } catch (err) {
      setErro('Credenciais inválidas');
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
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
      </form>
    </div>
  );
}
