import React, { useState } from "react";
import axios from "axios";

const AddStory = () => {
  const [stories, setStory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/stories", { stories });
      setSubmitted(true);
      setStory("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="add-story-container">
      {submitted ? (
        <div className="success-message">הסיפור התווסף למאגר בהצלחה</div>
      ) : (
        <form onSubmit={handleSubmit} className="add-story-form">
          <textarea
            value={stories}
            onChange={(e) => setStory(e.target.value)}
            placeholder="הכנס את הסיפור החדש"
            className="story-textarea"
          />
          <button type="submit" className="add-button">
            הוסף
          </button>
        </form>
      )}
    </div>
  );
};

export default AddStory;
