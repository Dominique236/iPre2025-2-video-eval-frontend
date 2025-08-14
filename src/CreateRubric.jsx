import React, { useState } from "react";
import Navbar from "./Navbar";
import "./CreateRubric.css";

export default function CreateRubric() {
  const [aspects, setAspects] = useState([]);
  const [currentAspect, setCurrentAspect] = useState({
    name: "",
    description: "",
    weight: "",
    ratingScale: ""
  });

  const handleInputChange = (field, value) => {
    setCurrentAspect(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddAspect = () => {
    if (currentAspect.name.trim()) {
      setAspects(prev => [...prev, { ...currentAspect, id: Date.now() }]);
      setCurrentAspect({
        name: "",
        description: "",
        weight: "",
        ratingScale: ""
      });
    }
  };

  const handleRemoveAspect = (id) => {
    setAspects(prev => prev.filter(aspect => aspect.id !== id));
  };
  return (
    <div className="page-container">
      <div className="layout-container">
        <Navbar />
        <div className="main-content">
          <div className="content-container">
            <div className="page-title-container">
              <p className="page-title">Rubric</p>
            </div>
            
            <div className="form-field">
              <label className="label-container">
                <p className="field-label">Rubric Name</p>
                <input
                  className="text-input"
                  defaultValue=""
                />
              </label>
            </div>
            
            <div className="form-field">
              <label className="label-container">
                <p className="field-label">Description</p>
                <input
                  className="text-input"
                  defaultValue=""
                />
              </label>
            </div>
            
            <h2 className="section-title">Upload Rubric</h2>
            <div className="upload-container">
              <div className="upload-area">
                <div className="upload-content">
                  <p className="upload-title">Drag and drop or browse to upload</p>
                  <p className="upload-subtitle">Supported formats: PDF, DOCX</p>
                </div>
                <button className="browse-button">
                  <span className="button-text">Browse Files</span>
                </button>
              </div>
            </div>
            
            <h2 className="section-title">Evaluation Criteria</h2>
            
            {/* Show added aspects */}
            {aspects.length > 0 && (
              <div className="added-aspects-list">
                {aspects.map((aspect) => (
                  <div key={aspect.id} className="aspect-row">
                    <div className="aspect-info">
                      <div className="aspect-name">{aspect.name}</div>
                      <div className="aspect-details">
                        <span className="aspect-detail">{aspect.description}</span>
                        <span className="aspect-detail">Weight: {aspect.weight}%</span>
                        <span className="aspect-detail">Scale: {aspect.ratingScale}</span>
                      </div>
                    </div>
                    <button 
                      className="remove-aspect-button"
                      onClick={() => handleRemoveAspect(aspect.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            <div className="form-field">
              <label className="label-container">
                <p className="field-label">Aspect Name</p>
                <input
                  placeholder="Enter aspect name"
                  className="text-input"
                  value={currentAspect.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </label>
            </div>
            
            <div className="form-field">
              <label className="label-container">
                <p className="field-label">Description</p>
                <input
                  placeholder="Enter description"
                  className="text-input"
                  value={currentAspect.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
              </label>
            </div>
            
            <div className="form-field">
              <label className="label-container">
                <p className="field-label">Weight (%)</p>
                <input
                  placeholder="Enter weight"
                  className="text-input"
                  value={currentAspect.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                />
              </label>
            </div>
            
            <div className="form-field">
              <label className="label-container">
                <p className="field-label">Rating Scale (e.g., 0-10)</p>
                <input
                  placeholder="Enter rating scale"
                  className="text-input"
                  value={currentAspect.ratingScale}
                  onChange={(e) => handleInputChange('ratingScale', e.target.value)}
                />
              </label>
            </div>
            
            <div className="criteria-button-container">
              <button className="add-button" onClick={handleAddAspect}>
                <span className="button-text">Add Aspect</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Save button positioned at the bottom as main action */}
        <div className="save-section">
          <button className="save-button">
            <span className="button-text">Save Rubric</span>
          </button>
        </div>
      </div>
    </div>
  );
}
