import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmailCard from "../EmailCard/emailCard";
import { getFilteredData } from "../../utils";

function EmailList({ currFilter, showEmailBody, setShowEmailBody }) {
  const dispatch = useDispatch();
  const { allEmails, favorites, readEmails } = useSelector((state) => {
    return state.emailReducer;
  });
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const filteredData = getFilteredData(
      currFilter,
      allEmails,
      readEmails,
      favorites
    );
    setFilteredList(filteredData);
  }, [currFilter, allEmails, favorites, readEmails]);

  function handleCardClick(id, isAlreadyAddedToRead, subject, fromUser, date) {
    if (showEmailBody.isVisible && showEmailBody.selectedEmailId === id) {
      return setShowEmailBody({
        isVisible: false,
        selectedEmailId: "",
        subject: "",
        fromUser: "",
        date: "",
      });
    }
    if (!isAlreadyAddedToRead) {
      dispatch({ type: "MARK_READ", payload: id });
    }
    setShowEmailBody({
      isVisible: true,
      selectedEmailId: id,
      subject,
      fromUser,
      date,
    });
  }

  return (
    <aside className="email-card-list">
      {filteredList &&
        filteredList?.map((curr) => (
          <EmailCard
            key={curr.id}
            emailData={curr}
            handleCardClick={handleCardClick}
            isSelected={
              curr.id === showEmailBody.selectedEmailId &&
              showEmailBody.isVisible
            }
          />
        ))}
    </aside>
  );
}

export default EmailList;
