import React, { useEffect, useState } from "react";
import "./emailBodyCard.css";
import { fetchEmailBody } from "../../Api/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { getDateTimeFormat } from "../../utils";

function EmailBodyCard({ emailBodyContent }) {
  const { selectedEmailId, subject, fromUser, date } = emailBodyContent;
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => {
    return state.emailReducer;
  });
  const [emails, setEmails] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEmailBody(selectedEmailId)
      .then((data) => {
        if (data) {
          setEmails(data);
        } else {
          throw new Error("Invalid Email");
        }
      })
      .catch((e) => setError(true))
      .finally(() => setLoading(false));
  }, [selectedEmailId]);

  function createMarkup() {
    return { __html: emails.body };
  }

  return (
    <div className="email-body-wrapper">
      <div className="email-body-card-logo">{fromUser?.[0].toUpperCase()}</div>
      <section className="email-body-content">
        <header className="email-body-header">
          <h1 className="email-body-subject">{subject}</h1>
          <button
            className="email-body-btn"
            onClick={() =>
              dispatch({
                type: favorites.hasOwnProperty(selectedEmailId)
                  ? "UNMARK_FAVORITE"
                  : "MARK_FAVORITE",
                payload: selectedEmailId,
              })
            }
          >
            {favorites.hasOwnProperty(selectedEmailId)
              ? "Remove from favorite"
              : "Mark as Favorite"}
          </button>
        </header>
        <p>{getDateTimeFormat(date)}</p>
        <article
          className="email-body-main-content"
          dangerouslySetInnerHTML={createMarkup()}
        ></article>
      </section>
    </div>
  );
}

export default EmailBodyCard;
