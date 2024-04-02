import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarChildPage from "../components/NavBarChildPage";
import AddStory from "./StoryAdd";

function Story() {
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

  return (
    <div>
      <NavbarChildPage />
      <div className="stories">
        <h1>:מאגר סיפורים</h1>
        <div className="stories-list">
          {displayStories.map((story) => (
            <div key={story._id} className="story-item">
              <p>{story.story}</p>
            </div>
          ))}
        </div>

        {showAddStory && <AddStory />}
      </div>
    </div>
  );
}

export default Story;
