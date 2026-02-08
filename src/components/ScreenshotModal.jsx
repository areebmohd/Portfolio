import { useRef } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ScreenshotModal.css';

const ScreenshotModal = ({ isOpen, onClose, images }) => {
  const scrollRef = useRef(null);

  if (!isOpen) return null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 600; // Adjust as needed
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <FaTimes size={24} />
        </button>

        <div className="modal-screenshots-container" ref={scrollRef}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Screenshot ${index + 1}`} className="modal-screenshot-img" />
          ))}
        </div>

        <div className="modal-controls">
          <button className="modal-control-btn" onClick={() => scroll('left')}>
            <FaChevronLeft size={20} /> Move Left
          </button>
          <button className="modal-control-btn" onClick={onClose}>
            Close
          </button>
          <button className="modal-control-btn" onClick={() => scroll('right')}>
            Move Right <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotModal;
