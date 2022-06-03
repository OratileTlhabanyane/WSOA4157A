import React, {useState, useEffect} from 'react';
import {FaAngleDoubleUp} from 'react-icons/fa'

function ScrollToHome() {
  const [showScrollHomeButton, setShowScrollHomeButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        setShowScrollHomeButton(true);
      }
      else {
        setShowScrollHomeButton(false);
      }
    });

  }, []);

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {showScrollHomeButton &&
        (<FaAngleDoubleUp className="top-btn-position top-btn-style" onClick={scrollToHome} />
        )}

    </div>
  );

}

export default ScrollToHome;