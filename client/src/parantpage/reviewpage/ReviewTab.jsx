
const ReviewTab = () => {
  const handleReviewClick = () => {
    window.location.replace('/Review');
  };

  return (
    <div className="tab-container-item " onClick={handleReviewClick}>
      הוספת ביקורת לאתר
    </div>
  );
};

export default ReviewTab;