import React from "react";
import "./emailCard.css";
import { useSelector } from "react-redux";
import { getDateTimeFormat } from "../../utils";

function EmailCard({ emailData, isSelected, handleCardClick }) {
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
      }
      ${isSelected ? "email-card-selected" : ""}
      
      `}
      onClick={() =>
        handleCardClick(id, readEmails.hasOwnProperty(id), subject, name, date)
      }
    >
      <div className="email-card-logo">{name?.[0].toUpperCase()}</div>
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
          <span>{getDateTimeFormat(date)}</span>
          {favorites.hasOwnProperty(id) && (
            <span className="email-card-time-favorite">Favorite</span>
          )}
        </div>
      </section>
    </div>
  );
}

export default EmailCard;
