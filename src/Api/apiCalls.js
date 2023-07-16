export const fetchEmailBody = (emailItemId) => {
    return fetch(`https://flipkart-email-mock.now.sh/?id=${emailItemId}`).then((resp) => {
      if (resp.status === 200) return resp.json();
      else throw new Error("Invalid response");
    });
}

export const fetchEmailList = (pageNumber) => {
    return fetch(`https://flipkart-email-mock.now.sh/?page=${pageNumber}`).then((resp) => {
      if (resp.status === 200) return resp.json();
      else throw new Error("Invalid response");
    });
}