import React, { useState } from "react";
import axios from "axios";

const AddAdvice = () => {
  const [advice, setAdvice] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/advice", { advice });
      setSubmitted(true);
      setAdvice("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="add-advice-container">
      {submitted ? (
        <div className="success-message">העצה נוספה למאגר בהצלחה</div>
      ) : (
        <form onSubmit={handleSubmit} className="add-advice-form">
          <textarea
            value={advice}
            onChange={(e) => setAdvice(e.target.value)}
            placeholder="הכנס את העצה החדשה"
            className="advice-textarea"
          />
          <button type="submit" className="add-button">
            הוסף
          </button>
        </form>
      )}
    </div>
  );
};

export default AddAdvice;
