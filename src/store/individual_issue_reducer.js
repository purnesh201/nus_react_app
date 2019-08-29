const initialState = {}

const issueObj = (state = initialState, action) => {
  if (action.type === "UPDATE_A") {
    return {
      ...state,
    };
  }

  return state;
};

export default issueObj;