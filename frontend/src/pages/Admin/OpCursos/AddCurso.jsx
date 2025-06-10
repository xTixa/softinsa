import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormField from '../../../components/FormField';
import Navbar from '../../../components/Navbar';
import '../OpCursos/AddCurso.css'; 

export default function AdicionarCurso() {
  const [formadores, setFormadores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [areas, setAreas] = useState([]);
  const [topicos, setTopicos] = useState([]);
  const [imagem, setImagem] = useState(null);
  const navigate = useNavigate();

  const [curso, setCurso] = useState({
    titulo: '',
    descricao: '',
    dataFim: '',
    duracao: '',
    formador: '',
    dataInicio: '',
    dataLimiteInscricao: '',
    maxVagas: '',
    categoria: '',
    area: '',
    topico: '',
    tipo: ''
  });

  useEffect(() => {
    axios.get('/api/formadores').then(res => setFormadores(res.data)).catch(err => console.error(err));
    axios.get('/api/categorias').then(res => setCategorias(res.data)).catch(err => console.error(err));
    axios.get('/api/areas').then(res => setAreas(res.data)).catch(err => console.error(err));
    axios.get('/api/topicos').then(res => setTopicos(res.data)).catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in curso) {
        formData.append(key, curso[key]);
      }
      if (imagem) {
        formData.append('imagem', imagem);
      }

      await axios.post('/api/cursos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      navigate('/admin/cursos');
    } catch (err) {
      console.error('Erro ao criar curso:', err);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="adicionar-curso-container">
        <h2 className="titulo-principal">Criar Curso</h2>

        <form className="formulario-curso" onSubmit={handleSubmit}>
          <div className="grupo-colunas">

            {/* Coluna Esquerda */}
            <div className="coluna-esquerda">
              <label className="etiqueta-secao" htmlFor="titulo">Título</label>
              <input
                id="titulo"
                name="titulo"
                className="input-grande"
                type="text"
                placeholder="Introdução"
                value={curso.titulo}
                onChange={handleChange}
                required
              />

              <label className="etiqueta-secao" htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                name="descricao"
                className="input-descricao"
                placeholder="Descrição do curso"
                value={curso.descricao}
                onChange={handleChange}
                required
              />

              <div className="grupo-duplo">
                <FormField
                  label="Data Fim"
                  type="date"
                  name="dataFim"
                  value={curso.dataFim}
                  onChange={handleChange}
                />
                <FormField
                  label="Duração"
                  placeholder="X horas"
                  name="duracao"
                  value={curso.duracao}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="coluna-direita">
              <div className="caixa-foto">
                <div className="icone-foto">📷</div>
                <p>Adicionar foto</p>
                <input type="file" accept="image/*" onChange={e => setImagem(e.target.files[0])} />
              </div>

              <FormField
                label="Formador"
                type="select"
                name="formador"
                value={curso.formador}
                onChange={handleChange}
                options={formadores.map(f => ({
                  label: f.utilizador?.nome || f.nome || 'Formador',
                  value: f.id_utilizador || f.id
                }))}
              />

              <FormField
                label="Data Início"
                type="date"
                name="dataInicio"
                value={curso.dataInicio}
                onChange={handleChange}
              />
              <FormField
                label="Data Limite Inscrição"
                type="date"
                name="dataLimiteInscricao"
                value={curso.dataLimiteInscricao}
                onChange={handleChange}
              />
              <FormField
                label="Máx Vagas"
                name="maxVagas"
                type="number"
                value={curso.maxVagas}
                onChange={handleChange}
              />

              <FormField
                label="Categoria"
                type="select"
                name="categoria"
                value={curso.categoria}
                onChange={handleChange}
                options={categorias.map(c => ({ label: c.nome_categoria, value: c.id_categoria }))}
              />

              <FormField
                label="Área"
                type="select"
                name="area"
                value={curso.area}
                onChange={handleChange}
                options={areas.map(a => ({ label: a.nome_area, value: a.id_area }))}
              />

              <FormField
                label="Tópico"
                type="select"
                name="topico"
                value={curso.topico}
                onChange={handleChange}
                options={topicos.map(t => ({ label: t.nome_topico, value: t.id_topico }))}
              />

              <FormField
                label="Tipo"
                type="select"
                name="tipo"
                value={curso.tipo}
                onChange={handleChange}
                options={[
                  { label: 'Assíncrono', value: 'Assincrono' },
                  { label: 'Síncrono', value: 'Sincrono' }
                ]}
              />
            </div>
            <div className="botoes-acao">
              <button type="button" className="botao-cancelar" onClick={() => navigate('/admin/cursos')}>
                Cancelar
              </button>
              <button type="submit" className="botao-criar" form="curso-formulario">
                Criar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
