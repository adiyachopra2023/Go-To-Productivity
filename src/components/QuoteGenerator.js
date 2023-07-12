import React, { useState, useEffect } from 'react';
import './QuoteGenerator.css';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex].text);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quote-generator-container">
      <h2 className="quote-generator-title">Today's Thought</h2>
      {quote && (
        <div className="quote-generator-result">
          <p className="quote-generator-quote">{quote}</p>
        </div>
      )}
    </div>
  );
};

export default QuoteGenerator;
