const initialState = {}

const issueObj = (state = initialState, action) => {
  if (action.type === "ISSUE_DETAILS") {
  	console.log("received ISSUE_DETAILS");
    return {
      ...state,
      ...action.payload
    };
  }

  return state;
};

export default issueObj;