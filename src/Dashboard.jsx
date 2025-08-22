import React from "react";
import Navbar from "./Navbar";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-root">
      <div className="dashboard-layout-container">
        <Navbar />
        <div className="dashboard-content-wrapper">
          <div className="dashboard-content-container">
            <div className="dashboard-summary-row">
              <div className="dashboard-summary-title-group">
                <p className="dashboard-summary-title">Panel de Control del Espacio de Trabajo</p>
                <p className="dashboard-summary-desc">Resumen de evaluaciones y progreso</p>
              </div>
            </div>
            <div className="dashboard-summary-cards-row">
              <div className="dashboard-summary-card">
                <p className="dashboard-summary-card-title">Evaluaciones Completadas</p>
                <p className="dashboard-summary-card-value">150</p>
              </div>
              <div className="dashboard-summary-card">
                <p className="dashboard-summary-card-title">Puntuación Promedio</p>
                <p className="dashboard-summary-card-value">4.2/7</p>
              </div>
              <div className="dashboard-summary-card">
                <p className="dashboard-summary-card-title">Puntuación promedio por criterio</p>
                <p className="dashboard-summary-card-value">4.3/7</p>
              </div>
            </div>
            <h2 className="dashboard-section-title">Distribución de Puntaje</h2>
            <div className="dashboard-distribution-row">
              <div className="dashboard-distribution-card">
                <p className="dashboard-distribution-card-title">Distribución de Puntaje Total</p>
                {(() => {
                  const values = [5,20,15,20,20,15,5];
                  const max = Math.max(...values);
                  return (
                    <div className="dashboard-distribution-bar-group-flex">
                      {values.map((value, i) => {
                        const percent = (value / max) * 100;
                        return (
                          <div key={i} className="dashboard-distribution-bar-flex">
                            <div className="dashboard-distribution-bar" style={{height: `${percent}%`}}></div>
                            <span className="dashboard-distribution-label">{i+1}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
              <div className="dashboard-distribution-card">
                <p className="dashboard-distribution-card-title">Distribución de Puntaje por Criterio de la Rúbrica</p>
                {(() => {
                  const values = [40,80,30,20,80];
                  const max = Math.max(...values);
                  return (
                    <div className="dashboard-distribution-bar-group-flex">
                      {values.map((value, i) => {
                        const percent = (value / max) * 100;
                        return (
                          <div key={i} className="dashboard-distribution-bar-flex">
                            <div className="dashboard-distribution-bar" style={{height: `${percent}%`}}></div>
                            <span className="dashboard-distribution-label">{`Criterio ${i+1}`}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
            </div>
            <h2 className="dashboard-section-title">Evaluaciones Recientes</h2>
            <div className="dashboard-recent-evals-wrapper">
              <div className="dashboard-recent-evals-table-container">
                <table className="dashboard-recent-evals-table">
                  <thead>
                    <tr>
                      <th className="dashboard-table-col-title">Título del Video</th>
                      <th className="dashboard-table-col-evaluator">Evaluador</th>
                      <th className="dashboard-table-col-score">Puntuación</th>
                      <th className="dashboard-table-col-date">Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="dashboard-table-col-title">Presentación del Proyecto Alfa</td>
                      <td className="dashboard-table-col-evaluator">Sofía Rodríguez</td>
                      <td className="dashboard-table-col-score"><button className="dashboard-score-btn"><span>4.5</span></button></td>
                      <td className="dashboard-table-col-date">2024-07-26</td>
                    </tr>
                    <tr>
                      <td className="dashboard-table-col-title">Demostración del Producto - Versión Beta</td>
                      <td className="dashboard-table-col-evaluator">Carlos García</td>
                      <td className="dashboard-table-col-score"><button className="dashboard-score-btn"><span>3.8</span></button></td>
                      <td className="dashboard-table-col-date">2024-07-25</td>
                    </tr>
                    <tr>
                      <td className="dashboard-table-col-title">Revisión de la Campaña de Marketing</td>
                      <td className="dashboard-table-col-evaluator">Ana López</td>
                      <td className="dashboard-table-col-score"><button className="dashboard-score-btn"><span>4.9</span></button></td>
                      <td className="dashboard-table-col-date">2024-07-24</td>
                    </tr>
                    <tr>
                      <td className="dashboard-table-col-title">Presentación de Ventas - Estrategia del Q3</td>
                      <td className="dashboard-table-col-evaluator">Diego Martínez</td>
                      <td className="dashboard-table-col-score"><button className="dashboard-score-btn"><span>4.2</span></button></td>
                      <td className="dashboard-table-col-date">2024-07-23</td>
                    </tr>
                    <tr>
                      <td className="dashboard-table-col-title">Módulo de Capacitación - Incorporación</td>
                      <td className="dashboard-table-col-evaluator">Laura Pérez</td>
                      <td className="dashboard-table-col-score"><button className="dashboard-score-btn"><span>4.0</span></button></td>
                      <td className="dashboard-table-col-date">2024-07-22</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
