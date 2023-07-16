import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmailCard from "../EmailCard/emailCard";
import { getFilteredData } from "../../utils";
import GeneralComponent from "../GeneralComponent/generalComponent";

function EmailList({ currFilter, showEmailBody, setShowEmailBody }) {
  const dispatch = useDispatch();
  const { allEmails, favorites, readEmails } = useSelector((state) => {
    return state.emailReducer;
  });
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const filteredData = getFilteredData(
      currFilter,
      allEmails,
      readEmails,
      favorites
    );
    setFilteredList(filteredData);
    setLoading(false);
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

  function getContent() {
    if (loading) {
      return <GeneralComponent val="Loading" />;
    }
    if (!Array.isArray(filteredList)) {
      return <GeneralComponent val="Error" />;
    }
    if (filteredList.length === 0) {
      return <GeneralComponent val="NoData" />;
    } else {
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
  }

  return getContent();
}

export default EmailList;
