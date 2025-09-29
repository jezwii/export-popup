import "../styles/button.css";

export default function ExportButton({ onClick }) {
  return (
    <button className="export-btn" onClick={onClick}>
      EXPORT CODE
    </button>
  );
}
