
const initialState = []

const issuesReducer = (state = initialState, action) => {
  if (action.type === "ISSUES_LIST") {
  	const newState = [...state, ...action.payload];
    return newState;
  }

  return state;
};

export default issuesReducer;