/* eslint-disable no-unused-vars */
import React from 'react';
import ReviewForm from './ReviewForm';
import NavbarParent from '../Navbarparant';

const ReviewPage = () => {
    return (
      <div>
        <NavbarParent />
        <h2>הוספת ביקורת לאתר</h2>
        <ReviewForm />
      </div>
    );
  };

export default ReviewPage;