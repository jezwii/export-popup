import "../styles/checkbox.css";

export default function Checkbox({ label, checked, onChange }) {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="custom-box">
        {checked && (
          <img src="/public/tick.svg" alt="Checked" className="check-icon" />
        )}
      </span>
      {label}
    </label>
  );
}
