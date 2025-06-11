import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './perfilFormador.css';
import foto from '../../assets/formadores/formador.jpg'; 
import Navbar from "../../components/Navbar";

export default function PerfilFormador() {
  const { id } = useParams(); 
  const [formador, setFormador] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    // Garantir id_utilizador = id_formador
    const { id_utilizador, id_formador } = user;

    axios
      .get(`/api/formadores/${id_utilizador}/${id_formador}`)
      .then((res) => {
        setFormador(res.data);
      })
      .catch((err) => {
        console.error("Erro ao carregar dados do formador:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>A carregar utilizador...</p>;
  if (!formador) return <p>Formador não encontrado.</p>;

  return (
    <div>
      <Navbar />
      <div className="perfil-formador">
        <div className="topo">
          <div className="info">
            <h2>{formador.nome}</h2>
            <p>{formador.email}</p>
            <div className="stats">
              <div>
                <strong>Total de Formandos</strong>
                <p>{formador.total_formandos}</p>
              </div>
              <div>
                <strong>Cursos</strong>
                <p>{formador.total_cursos}</p>
              </div>
            </div>
          </div>
          <div className="foto-area">
            <img src={foto} alt="Foto Formador" className="foto" />
            <button className="btn-mensagem">Enviar Mensagem</button>
          </div>
        </div>

        <div className="descricao">
          <h3>Descrição</h3>
          <p>{formador.descricao_formador}</p>
        </div>

        <div className="cartao-info">
          <div>
            <h4>Experiência</h4>
            <p>{formador.habilidades_formador}</p>
          </div>
          <div>
            <h4>Certificações</h4>
            <ul>
              {formador.certificacoes_formador
                .split(',')
                .map((c, i) => <li key={i}>{c.trim()}</li>)}
            </ul>
          </div>
          <div>
            <h4>Formação Académica</h4>
            <p>{formador.educacao_formador}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
