import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBarChildPage from "../components/NavBarChildPage";
import AddStory from "./Addstory";

function Stories() {
  const [showAddStory, setShowAddStory] = useState(false);
  const [displayStories, setDisplayStories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((response) => setDisplayStories(response.data))
      .catch((err) => console.log(err));
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
      <NavBarChildPage />
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

export default Stories;
