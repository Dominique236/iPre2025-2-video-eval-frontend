import Navbar from "./Navbar";
import "./MyWorkspaces.css";
import { useNavigate } from "react-router-dom";

export default function MyWorkspaces() {
  const navigate = useNavigate();
  return (
    <div className="myworkspaces-root">
      <div className="myworkspaces-layout-container">
        <Navbar />
        <div className="myworkspaces-content-wrapper">
          <div className="myworkspaces-content-container">
            <div className="myworkspaces-title-row">
              <p className="myworkspaces-title">My Workspaces</p>
              <button className="myworkspaces-new-btn" onClick={() => navigate('/create-workspace')}>
                <span className="truncate">New Workspace</span>
              </button>
            </div>
            <div className="myworkspaces-list">
              <div className="myworkspaces-item" onClick={() => navigate('/workspace', { state: { workspace: { name: 'Marketing Videos', description: 'Workspace for marketing video evaluations' } } })} style={{cursor: 'pointer'}}>
                <div className="myworkspaces-icon">
                  {/* Folder SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z" />
                  </svg>
                </div>
                <div className="myworkspaces-info">
                  <p className="myworkspaces-name">Marketing Videos</p>
                  <p className="myworkspaces-desc">Workspace for marketing video evaluations</p>
                </div>
              </div>
              <div className="myworkspaces-item" onClick={() => navigate('/workspace', { state: { workspace: { name: 'Product Demos', description: 'Workspace for product demo video evaluations' } } })} style={{cursor: 'pointer'}}>
                <div className="myworkspaces-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z" />
                  </svg>
                </div>
                <div className="myworkspaces-info">
                  <p className="myworkspaces-name">Product Demos</p>
                  <p className="myworkspaces-desc">Workspace for product demo video evaluations</p>
                </div>
              </div>
              <div className="myworkspaces-item" onClick={() => navigate('/workspace', { state: { workspace: { name: 'Training Videos', description: 'Workspace for training video evaluations' } } })} style={{cursor: 'pointer'}}>
                <div className="myworkspaces-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z" />
                  </svg>
                </div>
                <div className="myworkspaces-info">
                  <p className="myworkspaces-name">Training Videos</p>
                  <p className="myworkspaces-desc">Workspace for training video evaluations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
