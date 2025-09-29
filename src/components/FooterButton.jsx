export default function FooterButton({ activeTab }) {
  return (
    <button className="export-footer-btn">
      {activeTab === "HTML"
        ? "Download HTML CSS Project"
        : "Download NextJS Project"}
    </button>
  );
}
