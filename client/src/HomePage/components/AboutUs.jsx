import React from "react";

export default function AboutUs() {
  return (
    <div className="AboutUsContainer">
      <div className="aboutus-content">
        <h1>
          <span>about us</span>
          <p className="aboutus-p">
            אנו סטודנטים להנדסת תכנה בשנתנו השניה לתואר. את הרעיון שלנו שאבנו
            לנוכח התקופה שפגשה אותנו לאחרונה (אירועי השביעי לאוקטובר) וניסינו
            לחשוב על מה נבצע את הפרוייקט שלנו כך שנוכל להפיק ממנו תועלת אמיתית
            ומשעותית. לכן, החלטנו שאנו רוצים לייצר ממשק אשר ייתן מענה ראשוני
            חינמי לילדים שמתמודדים עם מצבי לחץ נפשיים בין אם זה בשגרה או בחירום.
          </p>
        </h1>
      </div>
      <div className="aboutus-images">
        <div className="our_pics">
          <img src="/sapir.jpg" alt="Sapir" className="round-image" />
          <p className="image-name">sapir</p>
        </div>
        <div className="our_pics">
          <img src="/etai.jpg" alt="Etai" className="round-image" />
          <p className="image-name">etai</p>
        </div>
        <div className="our_pics">
          <img src="/lucas.jpg" alt="Lucas" className="round-image" />
          <p className="image-name">lucas</p>
        </div>
        <div className="our_pics">
          <img src="/liran.jpg" alt="Liran" className="round-image" />
          <p className="image-name">liran-מצטיין רקטור נשיא ווועד דריקטוריון</p>
        </div>
      </div>
    </div>
  );
}
