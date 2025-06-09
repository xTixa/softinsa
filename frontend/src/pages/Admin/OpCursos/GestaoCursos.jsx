import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../../../components/CourseCard';
import './GestaoCursos.css';
import axios from 'axios';
import NavBar from '../../../components/Navbar';

export default function GestaoCursos() {
  const [cursos, setCursos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/cursos')
      .then(res => setCursos(res.data))
      .catch(err => console.error('Erro ao carregar cursos:', err));
  }, []);

  return (
    <div>
        <NavBar />
        <div className="gestao-cursos">
            <div className="gestao-cursos-header">
                <h2>Gestão de Cursos</h2>
                <button className="add-curso-btn" onClick={() => navigate('/admin/cursos/adicionar')}>+</button>
            </div>

            <div className="gestao-cursos-toolbar">
                <span>Ordenar: </span>
            </div>

            <div className="gestao-cursos-grid">
                {cursos.length > 0 ? (
                cursos.map(curso => (
                    <CourseCard
                    key={curso.id_curso}
                    course={{
                        title: curso.titulo,
                        instructor: curso.nomeFormador || 'Sem Formador',
                        duration: `${curso.duracao} Horas`,
                        score: curso.avaliacao,
                        image: `/assets/cursos/${curso.id_curso}.jpg` 
                    }}
                    />
                ))
                ) : (
                <p>Sem cursos disponíveis.</p>
                )}
            </div>
        </div>
    </div>
  );
}
