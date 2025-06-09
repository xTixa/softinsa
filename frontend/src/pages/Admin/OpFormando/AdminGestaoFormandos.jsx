import { useEffect, useState } from 'react';
import axios from 'axios';
import FormandoCard from '../../../components/FormandoCard';
import FormandoList from '../../../components/FormandoList';
import FormandoMenuDropdown from '../../../components/FormandoMenuDrop';
import './AdminGestaoFormandos.css';
import NavBar from '../../../components/Navbar';
import FormandoModal from '../../../components/FormandoModal';

export default function AdminGestaoFormandos() {
  const [formandos, setFormandos] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [formandoAtual, setFormandoAtual] = useState(null);
  const [view, setView] = useState('grid'); // 'grid' ou 'list'

  useEffect(() => {
    carregarFormandos();
  }, []);

  const carregarFormandos = () => {
    axios.get('/api/formandos')
      .then(res => setFormandos(res.data))
      .catch(err => console.error('Erro ao buscar formandos:', err));
  };

  const abrirModalAdicionar = () => {
    const hoje = new Date().toISOString().slice(0, 10);

    setFormandoAtual({
      id_utilizador: 1,
      id_formando: Date.now(),
      nome: '',
      email: '',
      palavra_passe: '',
      telemovel: '',
      data_nascimento: '',
      genero: '',
      n_cursosacabados: 0,
      n_cursosinscritos: 0,
      descricao_formando: '',
      educacao_formando: '',
      habilidades_formando: '',
      certificacoes_formando: '',
      foto_perfil: null,
      data_inscricao: hoje
    });

    setModalAberto(true);
  };

  const abrirModalEditar = (formando) => {
    setFormandoAtual(formando);
    setModalAberto(true);
  };

  const guardarFormando = async (dados) => {
    try {
      if (formandoAtual && formandoAtual.id_utilizador && formandoAtual.id_formando) {
        await axios.put(`/api/formandos/${dados.id_utilizador}/${dados.id_formando}`, dados);
      } else {
        await axios.post('/api/formandos', dados);
      }
      carregarFormandos();
      setModalAberto(false);
    } catch (err) {
      console.error('Erro ao guardar formando:', err);
      alert('Erro ao guardar formando. Verifica os campos e tenta novamente.');
    }
  };

  const eliminarFormando = async (formando) => {
    if (window.confirm(`Deseja eliminar ${formando.nome}?`)) {
      try {
        await axios.delete(`/api/formandos/${formando.id_utilizador}/${formando.id_formando}`);
        carregarFormandos();
      } catch (err) {
        console.error('Erro ao eliminar formando:', err);
        alert('Erro ao eliminar formando.');
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="gestao-formandos">
        <div className="top-bar">
          <h2>Gestão de Formandos</h2>
          <div className="top-bar-right">
            <button onClick={() => setView('list')}>📃</button>
            <button onClick={() => setView('grid')}>🔲</button>
            <FormandoMenuDropdown onAdd={abrirModalAdicionar} />
          </div>
        </div>

        <div className={view === 'grid' ? 'formando-grid' : 'formando-list'}>
          {formandos.map(f => (
            view === 'grid'
              ? <FormandoCard
                  key={f.id_utilizador + '-' + f.id_formando}
                  formando={f}
                  onEdit={() => abrirModalEditar(f)}
                  onDelete={() => eliminarFormando(f)}
                />
              : <FormandoList
                  key={f.id_utilizador + '-' + f.id_formando}
                  formando={f}
                  onEdit={() => abrirModalEditar(f)}
                  onDelete={() => eliminarFormando(f)}
                />
          ))}
        </div>

        <FormandoModal
          open={modalAberto}
          onClose={() => setModalAberto(false)}
          onSave={guardarFormando}
          formando={formandoAtual}
        />
      </div>
    </div>
  );
}
