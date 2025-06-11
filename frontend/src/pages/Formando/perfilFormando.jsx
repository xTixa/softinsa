import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PerfilFormando() {
  const { id } = useParams();
  const [formando, setFormando] = useState(null);

  useEffect(() => {
    // Simulação de fetch
    setFormando({
      id,
      nome: "Joana Ferreira",
      email: "joana.ferreira@softinsa.pt",
      curso: "Frontend Avançado",
    });
  }, [id]);

  if (!formando) return <p>A carregar...</p>;

  return (
    <div className="perfil-container">
      <h2>Perfil do Formando</h2>
      <p><strong>ID:</strong> {formando.id}</p>
      <p><strong>Nome:</strong> {formando.nome}</p>
      <p><strong>Email:</strong> {formando.email}</p>
      <p><strong>Curso:</strong> {formando.curso}</p>
    </div>
  );
}
