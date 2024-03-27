import React, { useState, useEffect } from "react";
import { MdAir } from "react-icons/md";
import { FaHandsHoldingChild } from "react-icons/fa6";
import Features_Lpage from "./Features_Lpage";
import NavBar from "./NavBar";
import AboutUs from "./AboutUs";
import SelectedReviews from "../../adminpage/reviews/SelectedReviews";
import axios from 'axios';

const Hero = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const fetchSelectedReviews = async () => {
      try {
        const response = await axios.get('/api/reviews/selected');
        setSelectedReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSelectedReviews();
  }, []);

  return (
    <>
      <NavBar />
      <div className="hero">
        <h1 className="primary-heading">
          <FaHandsHoldingChild /> רגע לנשום
        </h1>
        <p className="primary-text">המענה הראשוני לטיפול בלחץ נפשי בקרב ילדים</p>
      </div>
      <div>
        <Features_Lpage></Features_Lpage>
      </div>
      <SelectedReviews reviews={selectedReviews} />
    </>
  );
};

export default Hero;