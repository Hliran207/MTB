import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from "../Navbaradmin";
import AddAdvice from "./AddAdvices";

function Advices() {
  const [showAddAdvice, setShowAddAdvice] = useState(false);
  const [displayAdvices, setDisplayAdvices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((response) => setDisplayAdvices(response.data))
      .catch((err) => console.log(err));
  }, []);

  const toggleAddAdvice = () => {
    setShowAddAdvice(!showAddAdvice);
  };

  const handleRemoveAdvice = (id) => {
    axios
      .delete("http://localhost:8000/deleteAdvice/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="advices">
        <h1>:מאגר עצות</h1>
        <div className="advices-list">
          {displayAdvices.map((advice) => (
            <div key={advice._id} className="advice-item">
              <p>{advice.advice}</p>
              {/* Add the 'Remove' button for removing advice */}
              <button
                className="remove-advice-button"
                onClick={(e) => handleRemoveAdvice(advice._id)}
              >
                הסר
              </button>
            </div>
          ))}
        </div>
        <div className="add-advice-button">
          <button onClick={toggleAddAdvice}>הוסף עצה</button>
        </div>
        {showAddAdvice && <AddAdvice />}
      </div>
    </div>
  );
}

export default Advices;
