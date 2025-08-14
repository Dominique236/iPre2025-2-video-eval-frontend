import React from "react";
import Navbar from "./Navbar";
import "./CreateWorkspace.css";

export default function CreateWorkspace() {
  return (
    <div className="page-container">
      <div className="layout-container">
        <Navbar />
        <div className="main-content">
          <div className="content-container">
            <div className="page-title-container">
              <p className="page-title">Create a new workspace</p>
            </div>
            <div className="form-field">
              <label className="label-container">
                <p className="field-label">Workspace Name</p>
                <input
                  placeholder="Enter workspace name"
                  className="text-input"
                  defaultValue=""
                />
              </label>
            </div>
            <div className="form-field">
              <label className="label-container">
                <p className="field-label">Description</p>
                <textarea
                  placeholder="Enter a brief description of the workspace"
                  className="textarea-input"
                ></textarea>
              </label>
            </div>
            <div className="button-container">
              <button className="create-button">
                <span className="button-text">Create</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}