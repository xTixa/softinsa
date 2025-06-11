import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import CursoCard from "../../components/CourseCard";
import axios from "axios";
import "./DashboardFormando.css";

export default function DashboardFormando() {
  const [formando, setFormando] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("todos"); 
  const [filtro, setFiltro] = useState("tudo"); // "tudo", "inscrito", "completos"

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFormando(user);
      fetchCursos(user.id_formando);
    }
  }, []);

  const fetchCursos = async (idFormando) => {
    try {
      const res = await axios.get(`/api/formandos/${idFormando}/cursos`);
      setCursos(res.data); 
    } catch (err) {
      console.error("Erro ao buscar cursos:", err);
    } finally {
      setLoading(false);
    }
  };

  const cursosFiltrados = cursos.filter((curso) => {
    if (tab === "todos") return true;
    if (filtro === "inscrito") return curso.estado === "inscrito";
    if (filtro === "completos") return curso.estado === "completo";
    return true;
  });

  if (!formando) return <div className="dashboard-loader">A carregar utilizador...</div>;
  if (loading) return <div className="dashboard-loader">A carregar cursos...</div>;

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <h1 className="dashboard-title">Olá, {formando.nome}!</h1>

        {/* Painel */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <p className="stat-label">Cursos Completos</p>
              <p className="stat-value">{cursos.filter(c => c.estado === "completo").length}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-info">
              <p className="stat-label">Horas Gastas</p>
              <p className="stat-value">
                {cursos.reduce((total, c) => total + (c.estado === "completo" ? c.duracao : 0), 0)}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs principais */}
        <div className="tabs">
          <button className={tab === "todos" ? "active" : ""} onClick={() => setTab("todos")}>Todos os Cursos</button>
          <button className={tab === "meus" ? "active" : ""} onClick={() => setTab("meus")}>Os meus Cursos</button>
        </div>

        {/* Filtros internos */}
        <div className="filtros">
          <div className="filtros-botoes">
            <button className={filtro === "tudo" ? "filtro-ativo" : ""} onClick={() => setFiltro("tudo")}>Tudo</button>
            <button className={filtro === "inscrito" ? "filtro-ativo" : ""} onClick={() => setFiltro("inscrito")}>Inscrito</button>
            <button className={filtro === "completos" ? "filtro-ativo" : ""} onClick={() => setFiltro("completos")}>Completos</button>
          </div>
          <div className="filtros-label">Filtros: <span></span></div>
        </div>

        {/* Grelha de cursos */}
        <div className="course-grid">
          {cursosFiltrados.map((curso) => (
            <CursoCard key={curso.id_curso} curso={curso} nomeFormador={curso.nome_formador} />
          ))}
        </div>
      </div>
    </div>
  );
}
// 