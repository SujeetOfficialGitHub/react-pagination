import React, { useState, useEffect } from 'react';

function Pagination({ pages = 10, setCurrentPage }) {
  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    const generatePageNumbers = () => {
      const numberOfPages = Array.from({ length: pages }, (_, i) => i + 1);
      let tempNumberOfPages = [];

      if (numberOfPages.length <= 5) {
        tempNumberOfPages = numberOfPages;
      } else if (currentButton <= 3) {
        tempNumberOfPages = [...numberOfPages.slice(0, 4), '...', numberOfPages.length];
      } else if (currentButton > 3 && currentButton < numberOfPages.length - 2) {
        const start = currentButton - 2;
        const end = currentButton + 1;
        tempNumberOfPages = [1, '...', ...numberOfPages.slice(start, end), '...', numberOfPages.length];
      } else {
        tempNumberOfPages = [1, '...', ...numberOfPages.slice(numberOfPages.length - 4)];
      }

      setArrOfCurrButtons(tempNumberOfPages);
      setCurrentPage(currentButton);
    };

    generatePageNumbers();
  }, [currentButton, pages, setCurrentPage]);

  return (
    <div className="pagination-container">
      <button
        href="#"
        className={`pagination-button ${currentButton === 1 ? 'disabled' : ''}`}
        onClick={() => setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))}
      >
        Prev
      </button>

      {arrOfCurrButtons.map((item, index) => (
        <button
          href="#"
          key={index}
          className={`pagination-button ${currentButton === item ? 'active-page' : ''}`}
          onClick={() => setCurrentButton(item)}
        >
          {item}
        </button>
      ))}

      <button
        href="#"
        className={`pagination-button ${currentButton === pages ? 'disabled' : ''}`}
        onClick={() => setCurrentButton((prev) => (prev >= pages ? prev : prev + 1))}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
