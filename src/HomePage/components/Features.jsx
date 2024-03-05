import React, { useState } from "react";

function Features() {
  const features_list = [
    {
      name: "תרגילי נשימות",
      description: "Description for תרגילי נשימות...",
    },
    {
      name: "סיפורים מרגיעים",
      description: "Description for סיפורים מרגיעים...",
    },
    {
      name: "משחקים",
      description: "Description for משחקים...",
    },
    {
      name: "מוזיקה מרגיעה",
      description: "Description for מוזיקה מרגיעה...",
    },
    {
      name: "מעקב שימוש",
      description: "Description for מעקב שימוש...",
    },
  ];
  const [selectedFeature, setSelctedFeature] = useState(null);
  function handleButtonClick(selectedButton) {
    setSelctedFeature(
      selectedButton === selectedFeature ? null : selectedButton
    );
  }

  return (
    <>
      <div className="Features">
        <h1 className="features-headline">
          <span role="img" aria-label="question-mark">
            ❓
          </span>
          <span>מה האתר שלנו מציע</span>
        </h1>
        <div className="featureslist">
          {features_list.map((feature, index) => (
            <div key={index} className="feature-item">
              <button onClick={() => handleButtonClick(index)}>
                {feature.name}
              </button>
            </div>
          ))}
        </div>
        {selectedFeature !== null && (
          <div className="description">
            <p>{features_list[selectedFeature].description}</p>
          </div>
        )}
      </div>
    </>
  );
}
export default Features;
