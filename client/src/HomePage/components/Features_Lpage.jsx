import React, { useState } from "react";

function Features_Lpage() {
  const features_list = [
    {
      name: "תרגילי נשימות",
      description:
        "פיצר הכולל סדרה של תרגולים נשימה שמיועדים להפחית את רמות החרדה ולקדם רוגע פנימי. התרגולים כוללים נשימה עמוקה, נשימת בטן, וטכניקות נשימה",
    },
    {
      name: "סיפורים מרגיעים",
      description:
        "פיצר של סיפורים מרגיעים ומרגשים שמיועדים להקל על הרגשת החרדה ולסייע בהרגעת הנפש. הסיפורים נכתבים בצורה מכוונת לפיזור הרגשות של חרדה וליצירת תחושת רוגע.",
    },
    {
      name: "משחקים",
      description:
        "פיצר של משחקים מיועד להפעלת הדמיון והיצירתיות, ולסייע בהקל על מצבי רוגע ואי-נוחות רגשית. המשחקים מיועדים להעסקת הדמיון והתרגשות.",
    },
    {
      name: "מוזיקה מרגיעה",
      description:
        "מוזיקה מרגיעה היא סוג של מוזיקה שמיועדת לעזור להרפות ולהרגיע את הרוח והנפש. היא נעשית באמצעות שימוש בקטעי מוזיקה עם קצב איטי, רך ומתמיד, עם צלילים נעימים ומנגינות שקטות. מוזיקה מרגיעה נחשבת לכלי יעיל להקלה על עצבים, להפחתת עקביות, וליציבת מצב רוח חיובי.",
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
export default Features_Lpage;
