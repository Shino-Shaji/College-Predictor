import React, { useState, useEffect } from 'react';
import './AboutUsstyles.css'; 
const App = () => {
  const [isPredicting, setIsPredicting] = useState(false);

  const startPrediction = () => {
    setIsPredicting(true);
  };

  useEffect(() => {
    if (isPredicting) {
      const interval = setInterval(() => {
        clearInterval(interval);
        setIsPredicting(false);
      }, 2000); 
    }
  }, [isPredicting]);

  return (
    <div className="App">
      <button
        className="predictButton"
        onClick={!isPredicting ? startPrediction : null}
        disabled={isPredicting}
      >
        <span className={`progress ${isPredicting ? 'filled' : ''}`}></span>
        {isPredicting ? 'Predicting...' : 'Predict'}
      </button>
    </div>
  );
};

export default App;
