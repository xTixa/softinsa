import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './EditarFormando.css';
import NavBar from '../../../components/Navbar';

export default function EditarFormando() {
  const { id_utilizador, id_formando } = useParams();
  const navigate = useNavigate();

  const [formando, setFormando] = useState(null);

  useEffect(() => {
    axios.get(`/api/formandos/${id_utilizador}/${id_formando}`)
      .then(res => setFormando(res.data))
      .catch(err => console.error('Erro ao carregar formando:', err));
  }, [id_utilizador, id_formando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormando(prev => ({ ...prev, [name]: value }));
  };

  const handleGuardar = () => {
    axios.put(`/api/formandos/${id_utilizador}/${id_formando}`, formando)
      .then(() => navigate('/admin/formandos'))
      .catch(err => console.error('Erro ao guardar:', err));
  };

  const handleRemover = () => {
    if (window.confirm('Tem a certeza que deseja remover este formando?')) {
      axios.delete(`/api/formandos/${id_utilizador}/${id_formando}`)
        .then(() => navigate('/admin/formandos'))
        .catch(err => console.error('Erro ao remover:', err));
    }
  };

  if (!formando) return <p>A carregar formando...</p>;

  return (
    <div>
      <NavBar />
      <div className="editar-container">
        <h2>Editar Formando</h2>
        <hr />

        <div className="editar-foto">
          <img
            src={formando.foto_perfil || '/default-avatar.png'}
            alt="foto"
            className="foto-circular"
          />
        </div>

        <div className="form-linha">
          <input name="nome" value={formando.nome} onChange={handleChange} placeholder="Nome Próprio" />
          <input name="apelido" value={formando.apelido || ''} onChange={handleChange} placeholder="Apelido" />
        </div>
        <div className="form-linha">
          <input name="email" value={formando.email} onChange={handleChange} placeholder="Email" />
          <input name="telemovel" value={formando.telemovel} onChange={handleChange} placeholder="Telemóvel" />
        </div>
        <div className="form-linha">
          <input name="data_nascimento" type="date" value={formando.data_nascimento?.split('T')[0]} onChange={handleChange} />
          <select name="genero" value={formando.genero || ''} onChange={handleChange}>
            <option value="">Género</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
        </div>

        <div className="botoes-acao">
          <button className="cancelar-btn" onClick={() => navigate('/admin/formandos')}>Cancelar</button>
          <button className="guardar-btn" onClick={handleGuardar}>Guardar</button>
          <button className="remover-btn" onClick={handleRemover}>Remover</button>
        </div>
      </div>
    </div>
  );
}
