

export const getAllIssues = () => {
	return dispatch => {
		fetch ("https://api.github.com/repos/purnesh201/nus_react_app/issues")
		.then(response => response.json())
		.then(data => dispatch({
			type: "ISSUES_LIST",
			payload : data
		}))
		.catch(error => dispatch({
			type: "ISSUES_LIST_FAILED",
			payload: error
		}));

	}
}