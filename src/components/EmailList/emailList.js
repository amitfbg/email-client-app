import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmailCard from "../EmailCard/emailCard";

function EmailList({ handleCardClick, currFilter = "" }) {
  const { allEmails, favorites, readEmails } = useSelector((state) => {
    return state.emailReducer;
  });
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const filteredData = getFilteredData(currFilter);
    setFilteredList(filteredData);
  }, [currFilter, allEmails, favorites, readEmails]);

  function getFilteredData(currFilter) {
    switch (currFilter) {
      case "Unread":
        return allEmails.filter((item) => !readEmails.hasOwnProperty(item.id));

      case "Read":
        return allEmails.filter((item) => readEmails.hasOwnProperty(item.id));

      case "Favorites":
        return allEmails.filter((item) => favorites.hasOwnProperty(item.id));

      default:
        return allEmails;
    }
  }

  return (
    <aside className="email-card-list">
      {filteredList &&
        filteredList?.map((curr) => (
          <EmailCard
            key={curr.id}
            emailData={curr}
            handleCardClick={handleCardClick}
          />
        ))}
    </aside>
  );
}

export default EmailList;
