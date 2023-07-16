const initialState = {
  allEmails: [],
  favorites: {},
  readEmails: {},
};

const EmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EMAILS": {
      return { ...state, allEmails: action.payload };
    }
    case "MARK_FAVORITE": {
      return {
        ...state,
        favorites: { ...state.favorites, [action.payload]: 1 },
      };
    }
    case "UNMARK_FAVORITE": {
      let updatedValues = { ...state.favorites };
      delete updatedValues[action.payload];
      return { ...state, favorites: updatedValues };
    }
    case "MARK_READ": {
      return {
        ...state,
        readEmails: { ...state.readEmails, [action.payload]: 1 },
      };
    }
    default:
      return state;
  }
};

export default EmailReducer;
