import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from "../Navbaradmin";
import AddStory from "./AddStories";

function Stories() {
  const [showAddStory, setShowAddStory] = useState(false);
  const [displayStories, setDisplayStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get("/api/stories");
        setDisplayStories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStories();
  }, []);

  const toggleAddStory = () => {
    setShowAddStory(!showAddStory);
  };

  const handleRemoveStory = (id) => {
    axios
      .delete("http://localhost:8000/deleteStory/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="stories">
        <h1>:מאגר סיפורים</h1>
        <div className="stories-list">
          {displayStories.map((story) => (
            <div key={story._id} className="story-item">
              <p>{story.story}</p>
              {/* Add the 'Remove' button for removing story */}
              <button
                className="remove-story-button"
                onClick={(e) => handleRemoveStory(story._id)}
              >
                הסר
              </button>
            </div>
          ))}
        </div>
        <div className="add-story-button">
          <button onClick={toggleAddStory}>הוסף סיפור</button>
        </div>
        {showAddStory && <AddStory />}
      </div>
    </div>
  );
}

export default Stories;
