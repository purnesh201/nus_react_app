

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




export const getIssueDetails = (issue_id) => {
	return dispatch => {
		fetch ("https://api.github.com/repos/purnesh201/nus_react_app/issues/" + issue_id)
		.then(response => response.json())
		.then(data => dispatch({
			type: "ISSUE_DETAILS",
			payload : data
		}))
		.catch(error => dispatch({
			type: "ISSUES_LIST_FAILED",
			payload: error
		}));

	}
}