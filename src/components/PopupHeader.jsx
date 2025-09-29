import "../styles/popup.css";

export default function PopupHeader({ onClose }) {
  return (
    <div className="popup-header">
      <div className="header-text">
        <h3>Code Export</h3>
        <p className="subtext">Manage how you download your website code</p>
      </div>

      <button className="close-btn" onClick={onClose}>
        <img src="/icons/x.svg" alt="x-btn" className="x-icon" />
      </button>
    </div>
  );
}
