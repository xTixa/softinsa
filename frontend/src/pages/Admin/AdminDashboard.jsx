import { useEffect, useState } from 'react';
import StatsCard from '../../components/StatsCard';
import CourseCard from '../../components/CourseCard';
import NavBar from '../../components/Navbar';
import './AdminDashboard.css';
import axios from 'axios';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get('/api/dashboard/stats')
      .then((res) => setStats(res.data))
      .catch((err) => console.error('Erro ao buscar estatísticas:', err));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="admin-dashboard">
        <h2>Bom-Vindo, Administrador!</h2>

        {stats ? (
          <>
            <div className="stats-container">
              <StatsCard label="Total Utilizadores" value={stats.totalUsers} percentage="8.5%" />
              <StatsCard label="Total Formadores" value={stats.totalFormadores} percentage="1.3%" />
              <StatsCard label="Total Cursos" value={stats.totalCursos} percentage="20%" />
              <StatsCard label="Duração Total (dias)" value={stats.totalDias} percentage="20%" />
            </div>

            <h3>Cursos com maior avaliação</h3>
            <div className="courses-container">
              {/* Aqui manténs o que já tinhas para topCourses se quiseres */}
            </div>
          </>
        ) : (
          <p>A carregar estatísticas...</p>
        )}
      </div>
    </div>
  );
}
