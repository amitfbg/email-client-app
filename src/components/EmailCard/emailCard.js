import React from "react";
import "./emailCard.css";
import { useSelector } from "react-redux";

function EmailCard({ emailData, selected, handleCardClick }) {
  const {
    id,
    from: { email, name },
    date,
    subject,
    short_description,
  } = emailData;
  const { favorites, readEmails } = useSelector((state) => {
    return state.emailReducer;
  });

  return (
    <div
      className={`email-card-wrapper ${
        readEmails.hasOwnProperty(id) ? "email-card-read" : ""
      }`}
      onClick={() => handleCardClick(id, readEmails.hasOwnProperty(id))}
    >
      <div className="email-card-logo">N</div>
      <section className="email-card-content">
        <div>
          From:{" "}
          <strong>
            {name} &lt;{email}&gt;
          </strong>
        </div>
        <div>
          Subject: <strong>{subject}</strong>
        </div>
        <p>{short_description}</p>
        <div className="email-card-time-button-wrapper">
          <span>{date}</span>
          {favorites.hasOwnProperty(id) && (
            <span className="email-card-time-favorite">Favorite</span>
          )}
        </div>
      </section>
    </div>
  );
}

export default EmailCard;
