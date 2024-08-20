import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the icon from react-icons

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the visibility of the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This enables smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} style={buttonStyle}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '40px',
  right: '40px',
  backgroundColor: '#F97316',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  padding: '10px',
  cursor: 'pointer',
  zIndex: 1000,
};

export default BackToTopButton;
