export const getDateTimeFormat = (dateTime) => {
  let currDateTime = new Date(dateTime);
  let date =
    currDateTime.getDate() < 10
      ? `0${currDateTime.getDate()}`
      : currDateTime.getDate();
  let month =
    currDateTime.getMonth() + 1 < 10
      ? `0${currDateTime.getMonth() + 1}`
      : currDateTime.getMonth() + 1;
  let year = currDateTime.getFullYear();

  let hours = currDateTime.getHours();
  let ampm = hours < 12 ? "am" : "pm";
  hours = hours > 12 ? hours % 12 : hours;
  hours = hours < 10 ? `0${hours}` : hours;
  let minutes =
    currDateTime.getMinutes() < 10
      ? `0${currDateTime.getMinutes()}`
      : currDateTime.getMinutes();

  return `${date}/${month}/${year} ${hours}:${minutes}${ampm}`;
};

export const getFilteredData = (
  currFilter,
  allEmails,
  readEmails,
  favorites
) => {
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
};
