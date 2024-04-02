import React, { useState } from "react";
import axios from "axios";

const StoryAdd = () => {
  const [story, setStory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/stories", { story });
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
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder="הכנס סיפור חדש"
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

export default StoryAdd;
