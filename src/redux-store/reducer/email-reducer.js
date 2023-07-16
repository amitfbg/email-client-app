const initialState = {
    allEmails: [],
    favorites: {},
    readEmails: {},
};

const EmailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_EMAILS": {
            return {...state,allEmails: action.payload?.data}
        }
        case "MARK_FAVORITE": {
            return { ...state };
        }
        case "UNMARK_FAVORITE": {
            return { ...state };
        }
        case "MARK_READ": {
            return { ...state };
        }
        default:
            return state;
    }
};

export default EmailReducer;
