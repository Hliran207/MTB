import { FaHandsHoldingChild } from "react-icons/fa6";
import Features_Lpage from "./Features_Lpage";
import NavBar from "./NavBar";
import ReviewList from '../../parantpage/reviewpage/ReviewList';
import ReviewSelector from '../ReviewSelector';
import SelectedReviews from '../SelectedReviews';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Hero() {
  const [reviews, setReviews] = useState([]);
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReviews();
  }, []);

  const handleSelectReviews = (reviews) => {
    setSelectedReviews(reviews);
  };

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
      <ReviewSelector reviews={reviews} onSelect={handleSelectReviews} />
      <SelectedReviews reviews={selectedReviews} />
    </>
  );
}