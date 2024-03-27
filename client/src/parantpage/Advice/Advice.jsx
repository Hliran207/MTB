/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarParent from '../Navbarparant';
import AddAdvice from "./AddAdvices";

function Advice() {
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
      <NavbarParent />
      <div className="advices">
        <h1>:מאגר עצות</h1>
        <div className="advices-list">
          {displayAdvices.map((advice) => (
            <div key={advice._id} className="advice-item">
              <p>{advice.advice}</p>
            </div>
          ))}
        </div>
        {showAddAdvice && <AddAdvice />}
      </div>
    </div>
  );
}

export default Advice;
