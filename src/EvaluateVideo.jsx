import React from "react";
import Navbar from "./Navbar";
import "./EvaluateVideo.css";

export default function EvaluateVideo() {
  return (
    <div className="page-container">
      <div className="layout-container">
        <Navbar />
        <div className="main-content">
          <div className="video-content-container">
            <div className="page-title-container">
              <p className="page-title">Evaluar Video</p>
            </div>
            
            <div className="video-container">
              <div className="video-player">
                <button className="play-button">
                  <div className="play-icon" data-icon="Play" data-size="24px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            
            <h3 className="section-title">Detalles del Video</h3>
            <div className="details-grid">
              <div className="detail-row">
                <p className="detail-label">Nombre del Video</p>
                <p className="detail-value">Video de Presentación del Proyecto</p>
              </div>
              <div className="detail-row">
                <p className="detail-label">Grupo</p>
                <p className="detail-value">Grupo 1</p>
              </div>
              <div className="detail-row">
                <p className="detail-label">Fecha de Subida</p>
                <p className="detail-value">15 de Octubre de 2024</p>
              </div>
            </div>
          </div>
          
          <div className="sidebar-container">
            <h2 className="rubric-title">Rúbrica de Evaluación</h2>
            
            <div className="rubric-item">
              <div className="rubric-info">
                <p className="rubric-name">Contenido</p>
                <p className="rubric-description">Claridad del mensaje (Max: 5)</p>
              </div>
              <div className="score-controls">
                <div className="score-input-group">
                  <button className="score-button">-</button>
                  <input
                    className="score-input"
                    type="number"
                    defaultValue="4"
                  />
                  <button className="score-button">+</button>
                </div>
              </div>
            </div>
            
            <div className="comment-field">
              <label className="comment-label">
                <textarea
                  placeholder="Añadir comentarios"
                  className="comment-textarea"
                ></textarea>
              </label>
            </div>
            
            <div className="rubric-item">
              <div className="rubric-info">
                <p className="rubric-name">Presentación</p>
                <p className="rubric-description">Atractivo visual y participación (Max: 5)</p>
              </div>
              <div className="score-controls">
                <div className="score-input-group">
                  <button className="score-button">-</button>
                  <input
                    className="score-input"
                    type="number"
                    defaultValue="3"
                  />
                  <button className="score-button">+</button>
                </div>
              </div>
            </div>
            
            <div className="comment-field">
              <label className="comment-label">
                <textarea
                  placeholder="Añadir comentarios"
                  className="comment-textarea"
                ></textarea>
              </label>
            </div>
            
            <div className="rubric-item">
              <div className="rubric-info">
                <p className="rubric-name">Organización</p>
                <p className="rubric-description">Estructura y flujo de información (Max: 5)</p>
              </div>
              <div className="score-controls">
                <div className="score-input-group">
                  <button className="score-button">-</button>
                  <input
                    className="score-input"
                    type="number"
                    defaultValue="5"
                  />
                  <button className="score-button">+</button>
                </div>
              </div>
            </div>
            
            <div className="comment-field">
              <label className="comment-label">
                <textarea
                  placeholder="Añadir comentarios"
                  className="comment-textarea"
                ></textarea>
              </label>
            </div>
            
            <h3 className="general-comments-title">Comentarios Generales</h3>
            <div className="comment-field">
              <label className="comment-label">
                <textarea
                  placeholder="Añadir comentarios generales"
                  className="comment-textarea"
                ></textarea>
              </label>
            </div>
            
            <div className="save-button-container">
              <button className="save-button">
                <span className="button-text">Guardar Evaluación</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
