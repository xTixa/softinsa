/*export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h4>{course.title}</h4>
      <p><strong>Formador:</strong> {course.instructor || 'Sem Formador'}</p>
      <p><strong>Duração:</strong> {course.duration} Horas</p>
      <p><strong>Avaliação:</strong> {course.score}</p>
    </div>
  );
}*/

import './CourseCard.css';
import { FaClock, FaUserAlt } from 'react-icons/fa';

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-image" style={{ backgroundImage: `url(${course.image})` }}></div>

      <div className="course-content">
        <h4>{course.title}</h4>
        <div className="stars">★ {course.score}</div>
        <p>{course.instructor}</p>

        <div className="course-meta">
          <span><FaClock /> {course.duration}</span>
          <span><FaUserAlt /> {course.rating}</span>
        </div>
      </div>
    </div>
  );
}
