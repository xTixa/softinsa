import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddFormando.css';
import NavBar from '../../../components/Navbar';

export default function AdicionarFormando() {
  const [formando, setFormando] = useState({
    nome: '',
    email: '',
    palavra_passe: '',
    telemovel: '',
    data_nascimento: '',
    genero: '',
    descricao_formando: '',
    educacao_formando: '',
    habilidades_formando: '',
    certificacoes_formando: '',
    n_cursosacabados: 0,
    n_cursosinscritos: 0,
    data_inscricao: new Date().toISOString(),
    id_utilizador: Math.floor(Math.random() * 100000), // Exemplo temporário
    id_formando: Math.floor(Math.random() * 100000),   // Exemplo temporário
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormando({ ...formando, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/formandos', formando);
      navigate('/admin/formandos');
    } catch (err) {
      console.error('Erro ao adicionar formando:', err);
    }
  };

  return (
    <div>
        <NavBar />
        <div className="adicionar-formando">
            <h2>Adicionar Formando</h2>
            <form onSubmit={handleSubmit}>
                <div className="foto-preview">
                    <div className="circle">Foto</div>
                </div>

                <div className="form-row">
                    <input name="nome" placeholder="Nome próprio" onChange={handleChange} required />
                    <input name="apelido" placeholder="Apelido" onChange={handleChange} />
                </div>

                <div className="form-row">
                    <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                    <input name="telemovel" placeholder="Telemóvel" onChange={handleChange} required />
                </div>

                <div className="form-row">
                    <input name="data_nascimento" type="date" onChange={handleChange} required />
                    <select name="genero" onChange={handleChange}>
                        <option value="">Género</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                </div>

                <div className="form-buttons">
                    <button type="button" onClick={() => navigate('/admin/formandos')}>Cancelar</button>
                    <button type="submit">Guardar</button>
                </div>
            </form>
        </div>
    </div>
  );
}
