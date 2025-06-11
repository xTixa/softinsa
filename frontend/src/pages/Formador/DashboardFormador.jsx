import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import CursoCard from "../../components/CourseCard";
import axios from "axios";
import "./DashboardFormador.css"; 

export default function DashboardFormador() {
  const [formador, setFormador] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFormador(user);
      fetchCursos(user.id_formador);
    }
  }, []);

  const fetchCursos = async (idFormador) => {
    try {
      const res = await axios.get(`/api/formadores/${idFormador}/cursos`);
      setCursos(res.data);
    } catch (err) {
      console.error("Erro ao buscar cursos:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!formador) return <div className="dashboard-loader">A carregar utilizador...</div>;
  if (loading) return <div className="dashboard-loader">A carregar cursos...</div>;

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <h1 className="dashboard-title">Olá, {formador.nome}!</h1>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <p className="stat-label">Cursos</p>
              <p className="stat-value">{cursos.length}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-info">
              <p className="stat-label">Horas Ministradas</p>
              <p className="stat-value">
                {cursos.reduce((total, curso) => total + curso.duracao, 0)}
              </p>
            </div>
          </div>
        </div>

        <h2 className="section-title">Os meus Cursos</h2>
        <div className="course-grid">
          {cursos.map((curso) => (
            <CursoCard key={curso.id_curso} curso={curso} nomeFormador={formador.nome} />
          ))}
        </div>
      </div>
    </div>
  );
}