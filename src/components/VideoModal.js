// src/components/VideoModal.js
import React from "react";

function VideoModal({ videoUrl, onClose }) {
  const openYouTubeLink = () => {
    window.open(videoUrl, "_blank");
  };

  return (
    <div className="video-modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <button onClick={openYouTubeLink} className="watch-button">
          Watch Video
        </button>
      </div>
    </div>
  );
}

export default VideoModal;
