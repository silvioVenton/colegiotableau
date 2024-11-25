// components/FilterInput.js
export default function FilterInput({ label, value, onChange }) {
    return (
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ fontWeight: "bold", marginRight: "10px" }}>{label}:</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Filtrar por ${label.toLowerCase()}`}
          style={{
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "300px",
          }}
        />
      </div>
    );
  }
  