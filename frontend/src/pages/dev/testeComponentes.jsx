import CriarAula from "../Aulas/criarAula";
import CriarQuizz from "../Quizzes/criarQuizz";

export default function TestesComponentes() {
  return (
    <div className="p-4">
      <h1>Zona de Testes</h1>
      <hr />
      <CriarAula />
      <hr />
      <CriarQuizz />
    </div>
  );
}
