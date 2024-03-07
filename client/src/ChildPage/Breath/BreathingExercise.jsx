// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Breath.css'
const BreathingExercise = () => {
  const [time, setTime] = useState(5);
  const [inhale, setInhale] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [totalTime, setTotalTime] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    setIntervalId(interval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setTime(5);
      setInhale((prevInhale) => !prevInhale);
      setTotalTime((prevTotalTime) => prevTotalTime - 5);
    }

    if (totalTime === 0) {
      clearInterval(intervalId);
      alert('כל הכבוד! סיימנו את הנשימות המרגיעות');
    }
  }, [time, intervalId, totalTime]);

  return (
    <div>
      <h1>נשימות מרגיעות</h1>
      <p>{inhale ? 'לשאוף' : 'לנשוף'}</p>
      <p>{time}</p>
      <p>זמן נותר: {Math.floor(totalTime / 60)}:{(totalTime % 60).toString().padStart(2, '0')}</p>
    </div>
  );
};

export default BreathingExercise;