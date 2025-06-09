import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormField from '../../../components/FormField';
import Navbar from '../../../components/Navbar';
import '../OpCursos/AddCurso.css'; 

export default function AdicionarCurso() {
  const [formadores, setFormadores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [areas, setAreas] = useState([]);
  const [topicos, setTopicos] = useState([]);
  //const navigate = useNavigate();

  useEffect(() => {
    // Buscar todos os dados em paralelo
    axios.get('/api/formadores')
      .then(res => setFormadores(res.data))
      .catch(err => console.error('Erro ao buscar formadores:', err));

    axios.get('/api/categorias')
      .then(res => setCategorias(res.data))
      .catch(err => console.error('Erro ao buscar categorias:', err));

    axios.get('/api/areas')
      .then(res => setAreas(res.data))
      .catch(err => console.error('Erro ao buscar áreas:', err));

    axios.get('/api/topicos')
      .then(res => setTopicos(res.data))
      .catch(err => console.error('Erro ao buscar tópicos:', err));
  }, []);

  return (
    <div>
      <Navbar />

      <div className="adicionar-curso-container">
        <h2 className="titulo-principal">Criar Curso</h2>

        <div className="formulario-curso">
          {/* Coluna Esquerda */}
          <div className="coluna-esquerda">
            <label className="etiqueta-secao">Título</label>
            <input className="input-grande" type="text" placeholder="Introdução" />

            <label className="etiqueta-secao">Descrição</label>
            <textarea className="input-descricao" placeholder="Descrição do curso" />

            <div className="grupo-duplo">
              <FormField label="Data Fim" type="date" />
              <FormField label="Duração" placeholder="X horas" />
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="coluna-direita">
            <div className="caixa-foto">
              <div className="icone-foto">📷</div>
              <p>Adicionar foto</p>
            </div>

            <FormField
              label="Formador"
              type="select"
              options={formadores.map(f => f.utilizador?.nome || f.nome || 'Formador')}
            />
            <FormField label="Data Início" type="date" />
            <FormField label="Data Limite Inscrição" type="date" />
            <FormField label="Máx Vagas" placeholder="" />
            <FormField
              label="Categoria"
              type="select"
              options={categorias.map(c => c.nome_categoria)}
            />
            <FormField
              label="Área"
              type="select"
              options={areas.map(a => a.nome_area)}
            />
            <FormField
              label="Tópico"
              type="select"
              options={topicos.map(t => t.nome_topico)}
            />
            <FormField
              label="Tipo"
              type="select"
              options={['Assincrono', 'Sincrono']}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
