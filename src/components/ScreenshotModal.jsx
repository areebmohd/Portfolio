import { useState, useEffect, useCallback } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ScreenshotModal.css";

const ScreenshotModal = ({ isOpen, onClose, images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    if (images?.length) {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }
  }, [images]);

  const handlePrev = useCallback(() => {
    if (images?.length) {
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-screenshots-container">
          {images.map((img, index) => {
            let className = "modal-screenshot-img";
            if (index === activeIndex) className += " active";
            else if (
              index ===
              (activeIndex - 1 + images.length) % images.length
            )
              className += " prev";
            else if (index === (activeIndex + 1) % images.length)
              className += " next";

            return (
              <img
                key={index}
                src={img}
                alt={`Screenshot ${index + 1}`}
                className={className}
                onClick={() => setActiveIndex(index)}
                loading="lazy"
              />
            );
          })}
        </div>

        <button
          className="modal-control-btn icon-only nav-btn prev"
          onClick={handlePrev}
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          className="modal-control-btn icon-only close-btn"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        <button
          className="modal-control-btn icon-only nav-btn next"
          onClick={handleNext}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ScreenshotModal;
