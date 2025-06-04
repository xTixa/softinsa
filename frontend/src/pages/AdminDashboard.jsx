import { stats, topCourses } from '../data/dashboardData';
import StatsCard from '../components/StatsCard';
import CourseCard from '../components/CourseCard';
import NavBar from '../components/Navbar';
import './AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <div>
      <NavBar />
      <div className="admin-dashboard">
      <h2>Bom-Vindo, Administrador!</h2>

      <div className="stats-container">
        <StatsCard label="Total Utilizadores" value={stats.totalUsers} percentage="8.5%" />
        <StatsCard label="Total Formadores" value={stats.totalInstructors} percentage="1.3%" />
        <StatsCard label="Total Cursos" value={stats.totalCourses} percentage="20%" />
        <StatsCard label="Total Horas" value={stats.totalHours} percentage="20%" />
      </div>

      <h3>Cursos com maior avaliação</h3>

      <div className="courses-container">
        {topCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
    </div>
  );
}
