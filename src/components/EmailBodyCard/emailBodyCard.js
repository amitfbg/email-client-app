import React, { useEffect, useState } from "react";
import "./emailBodyCard.css";
import { fetchEmailBody } from "../../Api/apiCalls";

function EmailBodyCard({ selectedEmailId }) {
  const [emails, setEmails] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEmailBody(selectedEmailId)
      .then((data) => {
        if (data) {
          console.log(data);
          setEmails(data);
        } else {
          throw new Error("Invalid post");
        }
      })
      .catch((e) => setError(true))
      .finally(() => setLoading(false));

    // dispatch();
  }, [selectedEmailId]);

  function createMarkup() {
    return { __html: emails.body };
  }

  return (
    <div className="email-body-wrapper">
      <div className="email-body-card-logo">N</div>
      <section className="email-body-content">
        <header className="email-body-header">
          <h1 className="email-body-subject">Hello</h1>
          <button
            className="email-body-btn"
            // onClick={() => dispatch(removeFromFavorites(id))}
          >
            Remove from favorite
          </button>
        </header>
        <p>11/11/11 10:11am</p>
        <article
          className="email-body-main-content"
          dangerouslySetInnerHTML={createMarkup()}
        ></article>
      </section>
    </div>
  );
}

export default EmailBodyCard;
