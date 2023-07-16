import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EmailBodyCard from "../components/EmailBodyCard/emailBodyCard";
import "./emailViewPage.css";
import { fetchEmailList } from "../Api/apiCalls";
import Filters from "../components/Filters/filters";
import EmailList from "../components/EmailList/emailList";

function EmailViewPage() {
  const dispatch = useDispatch();
  const [currFilter, setCurrFilter] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const [showEmailBody, setShowEmailBody] = useState({
    isVisible: false,
    selectedEmailId: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEmailList(currPage)
      .then((data) => {
        if (data.list && Array.isArray(data.list)) {
          dispatch({ type: "FETCH_EMAILS", payload: data.list });
        } else {
          throw new Error("Invalid Response");
        }
      })
      .catch((e) => setError(true))
      .finally(() => setLoading(false));
  }, [currPage]);

  let filtersArray = [
    { id: "unread", name: "Unread" },
    { id: "read", name: "Read" },
    { id: "favorites", name: "Favorites" },
  ];

  function handleFilterChange(filterValue) {
    setCurrFilter(filterValue);
    setShowEmailBody({
      isVisible: false,
      selectedEmailId: "",
    });
  }

  return (
    <div>
      <header className="email-view-page-header">
        <Filters
          filtersArray={filtersArray}
          currFilter={currFilter}
          handleFilterChange={handleFilterChange}
        />
      </header>
      <main
        className={`main-content ${showEmailBody.isVisible ? "wrapper" : ""}`}
      >
        <EmailList
          currFilter={currFilter}
          showEmailBody={showEmailBody}
          setShowEmailBody={setShowEmailBody}
        />
        {showEmailBody.isVisible && (
          <EmailBodyCard emailBodyContent={showEmailBody} />
        )}
      </main>
    </div>
  );
}

export default EmailViewPage;
