export default function FormField({ label, type = "text", placeholder = "", options = [] }) {
  return (
    <div className="campo-formulario">
      <label>{label}</label>
      {type === "select" ? (
        <select>
          <option>-- Selecionar --</option>
          {options.map((opt, i) => (
            <option key={i}>{opt}</option>
          ))}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} />
      )}
    </div>
  );
}
