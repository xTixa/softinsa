import './FormandoList.css';
import FormandoActionsMenu from './FormandoActionsMenu';

export default function FormandoList({ formando, onEdit, onDelete }) {
  return (
    <div className="formando-list">
      <img
        src={formando.foto_perfil || '/default-avatar.png'}
        alt={formando.nome}
        className="formando-avatar"
      />
      <div className="formando-info">
        <strong>{formando.nome}</strong>
        <div>{formando.email}</div>
      </div>
      <div className="list-actions">
        <FormandoActionsMenu onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
}
