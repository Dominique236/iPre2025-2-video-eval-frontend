import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import "./UploadVideo.css";

export default function UploadVideo() {
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(60); // Demo value
  const inputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileSize((file.size / (1024 * 1024)).toFixed(2) + " MB");
      setUploading(true);
      setProgress(60); // Demo value
    }
  };

  const handleSelectFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="uploadvideo-root">
        <div className="uploadvideo-layout-container">
        <Navbar />
        <div className="uploadvideo-content-wrapper">
          <div className="uploadvideo-content-container">
            <div className="uploadvideo-title-row">
              <p className="uploadvideo-title-main">Upload Video</p>
            </div>
            <div className="uploadvideo-upload-area">
              <div className="uploadvideo-upload-box">
                <div className="uploadvideo-upload-texts">
                  <p className="uploadvideo-upload-title">Drag and drop a video file here</p>
                  <p className="uploadvideo-upload-desc">Or select a file from your computer</p>
                </div>
                <button className="uploadvideo-select-btn" onClick={handleSelectFile}>
                  <span className="truncate">Select File</span>
                </button>
                <input type="file" ref={inputRef} style={{display: 'none'}} onChange={handleFileChange} />
              </div>
            </div>
            <div className="uploadvideo-file-row">
              <label className="uploadvideo-file-label">
                <p className="uploadvideo-file-label-title">File Name</p>
                <input className="uploadvideo-file-input" value={fileName} readOnly placeholder="No file selected" />
              </label>
            </div>
            <div className="uploadvideo-file-row">
              <label className="uploadvideo-file-label">
                <p className="uploadvideo-file-label-title">File Size</p>
                <input className="uploadvideo-file-input" value={fileSize} readOnly placeholder="-" />
              </label>
            </div>
            {uploading && (
            <div>
                <div className="uploadvideo-progress-row">
                    <div className="uploadvideo-progress-info">
                        <p className="uploadvideo-progress-label">Uploading...</p>
                        <p className="uploadvideo-progress-percent">{progress}%</p>
                    </div>
                    <div className="uploadvideo-progress-bar-bg">
                        <div className="uploadvideo-progress-bar" style={{width: `${progress}%`}}></div>
                    </div>
                </div>
                <div className="save-section">
                    <button className="uploadvideo-upload-btn">
                        <span className="button-text">Upload to Workspace</span>
                    </button>
                </div>
            </div>
            )}
          </div>
        </div>
        </div>
    </div>
  );
}
