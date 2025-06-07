import './FormandoCard.css';
import FormandoActionsMenu from './FormandoActionsMenu';

export default function FormandoCard({ formando, onEdit, onDelete }) {
  return (
    <div className="formando-card">
      <img
        src={formando.foto_perfil || '/default-avatar.png'}
        alt={formando.nome}
        className="formando-avatar"
      />
      <h4>{formando.nome}</h4>
      <p>{formando.email}</p>

      <div className="card-actions">
        <FormandoActionsMenu onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
}
