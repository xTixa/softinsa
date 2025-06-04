export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h4>{course.title}</h4>
      <p><strong>Formador:</strong> {course.instructor || 'Sem Formador'}</p>
      <p><strong>Duração:</strong> {course.duration} Horas</p>
      <p><strong>Avaliação:</strong> {course.score}</p>
    </div>
  );
}
