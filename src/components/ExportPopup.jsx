import { useState } from "react";
import Checkbox from "./Checkboxes";
import PopupHeader from "./PopupHeader";
import FooterButton from "./FooterButton";
import Tabs from "./Tabs";

export default function ExportPop({ onClose }) {
  const [activeTab, setActiveTab] = useState("HTML");
  const [options, setOptions] = useState({
    project: true,
    assets: true,
    code: true,
  });

  const toggleOptions = (key) => {
    setOptions({ ...options, [key]: !options[key] });
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <PopupHeader onClose={onClose} />

        <div className="popup-body">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "HTML" ? (
            <>
              <div className="export-options">
                <div className="export-left">
                  <img
                    src="/public/Vector.svg"
                    alt="HTML5"
                    className="export-icon"
                  />
                  <span>Export as HTML & CSS</span>
                </div>

                <span className="badge">Zipped</span>
              </div>

              <Checkbox
                label="Include assets (images, styles, fonts)"
                checked={options.assets}
                onChange={() => toggleOptions("assets")}
              />
              <Checkbox
                label="Include custom code"
                checked={options.code}
                onChange={() => toggleOptions("code")}
              />
            </>
          ) : (
            <>
              <div className="export-options">
                <div className="export-left">
                  <img
                    src="/public/brand-react-native.svg"
                    alt="NextJS"
                    className="export-icon"
                  />
                  <span>Export as NextJs Project</span>
                </div>

                <span className="badge">Zipped</span>
              </div>
              <Checkbox
                label="Use `app` directory(NextJS v13+)"
                checked={options.project}
                onChange={() => toggleOptions("project")}
              />
              <Checkbox
                label="Include assets locally (images, styles, fonts)"
                checked={options.assets}
                onChange={() => toggleOptions("assets")}
              />
              <Checkbox
                label="Include custom code"
                checked={options.code}
                onChange={() => toggleOptions("code")}
              />
            </>
          )}
        </div>
        <FooterButton activeTab={activeTab} />
      </div>
    </div>
  );
}
