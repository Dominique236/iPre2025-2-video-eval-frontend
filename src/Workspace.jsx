import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./Workspace.css";

export default function WorkspaceForm({ mode = "create", workspace = {} }) {
  const isCreateMode = mode === "create";
  const location = useLocation();
  // If in view mode, get workspace from location.state
  const workspaceData = isCreateMode ? workspace : (location.state?.workspace || workspace);

  return (
    <div className="page-container">
      <div className="layout-container">
        <Navbar />
        <div className="main-content">
          <div className="content-container">
            <div className="page-title-container">
              <p className="page-title">
                {isCreateMode ? "Create a new workspace" : "Workspace details"}
              </p>
            </div>

            {/* Campo nombre */}
            <div className="form-field">
              <label className="label-container">
                <p className="field-label">Workspace Name</p>
                <input
                  placeholder="Enter workspace name"
                  className="text-input"
                  defaultValue={workspaceData.name || ""}
                  readOnly={!isCreateMode}
                />
              </label>
            </div>

            {/* Campo descripción */}
            <div className="form-field">
              <label className="label-container">
                <p className="field-label">Description</p>
                <textarea
                  placeholder="Enter a brief description of the workspace"
                  className="textarea-input"
                  defaultValue={workspaceData.description || ""}
                  readOnly={!isCreateMode}
                ></textarea>
              </label>
            </div>

            {/* Botón solo en modo crear */}
            {isCreateMode && (
              <div className="save-section">
                <button className="uploadvideo-upload-btn">
                  <span className="button-text">Create</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}