// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Breath.css';

const BreathingExercise = () => {
  const [time, setTime] = useState(5);
  const [inhale, setInhale] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [totalTime, setTotalTime] = useState(120);
  const [, setIsRestarted] = useState(false);
  const [showRestartButton, setShowRestartButton] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(interval);

      return () => clearInterval(interval);
    }
  }, [started]);

  useEffect(() => {
    if (time === 0) {
      setTime(5);
      setInhale((prevInhale) => !prevInhale);
      setTotalTime((prevTotalTime) => prevTotalTime - 5);
    }

    if (totalTime === 0) {
      clearInterval(intervalId);
      setShowCongratulations(true);
      setShowRestartButton(true);
      setShowFeedback(true);
    }
  }, [time, intervalId, totalTime]);

  const restartExercise = () => {
    clearInterval(intervalId);
    setTime(5);
    setInhale(true);
    setTotalTime(60);
    setIsRestarted((prevState) => !prevState);
    setShowRestartButton(false);
    setShowCongratulations(false);
    setShowFeedback(false);
    setFeedback(null);
    setStarted(true); // Set started to true to resume the exercise immediately
    
    // Start interval again
    const newInterval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    setIntervalId(newInterval);
  };
  
  

  const handleYes = () => {
    // Handle feedback for "Yes"
    setFeedback('כן');
    setShowFeedback(false); // hide feedback form
  };

  const handleNo = () => {
    // Handle feedback for "No"
    setFeedback('לא');
    setShowFeedback(false); // hide feedback form
  };

  return (
    <div>
      <h1>נשימות מרגיעות</h1>
      {!started && <button onClick={() => setStarted(true)}>התחלה</button>}
      {started && (
        <>
          <h1 className="breath-text">{inhale ? 'שואף' : 'נושף'}</h1>
          <div className="clock">{time}</div>
          <p className='remainingTime'>זמן נותר: {Math.floor(totalTime / 60)}:{(totalTime % 60).toString().padStart(2, '0')}</p>
          {showCongratulations && <div className='remainingTime'>כל הכבוד! סיימנו את הנשימות המרגיעות</div>}
          {showRestartButton && <button onClick={restartExercise}>התחל מחדש</button>}
          {showFeedback && (
            <div>
              <p className='remainingTime'>האם תרגיל הנשימות עזר לך להרגע?</p>
              <button onClick={handleYes}>כן</button>
              <button onClick={handleNo}>לא</button>
            </div>
          )}
          {feedback && <p className='remainingTime'>תודה על המשוב: {feedback}</p>}
        </>
      )}
    </div>
  );
};

export default BreathingExercise;
