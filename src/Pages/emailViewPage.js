import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EmailBodyCard from "../components/EmailBodyCard/emailBodyCard";
import EmailCard from "../components/EmailCard/emailCard";
import "./emailViewPage.css";
import { fetchEmailList, getEmailList } from "../Api/apiCalls";

function EmailViewPage() {
  const dispatch = useDispatch();
  const [currFilter, setCurrFilter] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const [showEmailBody, setShowEmailBody] = useState({
    isVisible: false,
    selectedEmailId: "",
  });
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEmailList(currPage)
      .then((data) => {
        if (data.list && Array.isArray(data.list)) {
          console.log(data.list);
          setEmails(data.list);
        } else {
          throw new Error("Invalid post");
        }
      })
      .catch((e) => setError(true))
      .finally(() => setLoading(false));

    // dispatch();
  }, [currPage]);

  function handleCardClick(id) {
    if (showEmailBody.isVisible && showEmailBody.selectedEmailId === id) {
      return setShowEmailBody({
        isVisible: false,
        selectedEmailId: "",
      });
    }
    setShowEmailBody({
      isVisible: true,
      selectedEmailId: id,
    });
  }

  return (
    <div>
      <header>Header</header>
      <main
        className={`main-content ${showEmailBody.isVisible ? "wrapper" : ""}`}
      >
        <aside className="email-card-list">
          {emails &&
            emails?.map((curr) => (
              <EmailCard
                key={curr.id}
                emailData={curr}
                handleCardClick={handleCardClick}
              />
            ))}
        </aside>
        {showEmailBody.isVisible && (
          <EmailBodyCard selectedEmailId={showEmailBody.selectedEmailId} />
        )}
      </main>
    </div>
  );
}

export default EmailViewPage;
