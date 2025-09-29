import "../styles/tabs.css";

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        className={activeTab === "HTML" ? "tab active" : "tab"}
        onClick={() => setActiveTab("HTML")}
      >
        HTML & CSS
      </button>
      <button
        className={activeTab === "NextJS" ? "tab active" : "tab"}
        onClick={() => setActiveTab("NextJS")}
      >
        NextJS
      </button>
    </div>
  );
}
