import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import CursoCard from "../../components/CourseCard";
import "./perfilFormando.css";
import fotoDefault from "../../assets/formandos/formando.jpg"; 

export default function PerfilFormando() {
  const [formando, setFormando] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const { id_utilizador, id_formando } = user;

    axios
      .get(`/api/formandos/${id_utilizador}/${id_formando}`)
      .then((res) => setFormando(res.data))
      .catch((err) => console.error("Erro ao buscar formando:", err));

    axios
      .get(`/api/formandos/${id_formando}/cursos`)
      .then((res) => setCursos(res.data.filter(c => c.estado === "completo")))
      .catch((err) => console.error("Erro ao buscar cursos:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="perfil-loader">A carregar perfil...</p>;
  if (!formando) return <p className="perfil-loader">Formando não encontrado.</p>;

  const cursosConcluidos = cursos.length;
  const cursosInscritos = cursos.filter(c => c.estado === "inscrito").length;
  const horas = cursos.reduce((acc, c) => acc + c.duracao, 0);

  return (
    <div className="perfil-formando">
      <Navbar />
      <div className="perfil-header">
        <div className="perfil-info">
          <h1>{formando.nome}</h1>
          <p>{formando.email}</p>
          <div className="perfil-stats">
            <div><strong>Cursos acabados</strong><p>{cursosConcluidos}</p></div>
            <div><strong>Cursos inscritos</strong><p>{cursosInscritos}</p></div>
            <div><strong>Horas Gastas</strong><p>{horas}h</p></div>
          </div>
        </div>
        <div className="perfil-foto">
          <img src={fotoDefault} alt="Foto do Formando" />
        </div>
      </div>

      <div className="perfil-cursos">
        <h2>Cursos Concluídos</h2>
        <div className="curso-grid">
          {cursos.map((curso) => (
            <CursoCard key={curso.id_curso} curso={curso} nomeFormador={curso.nome_formador} />
          ))}
        </div>
      </div>
    </div>
  );
}
