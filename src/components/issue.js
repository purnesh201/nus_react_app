import React, {Component} from 'react';
import '../App.css';
import {Container, Navbar, Row, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../store/actions/actions';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';



class Issue extends Component {


	componentDidMount (){
		let issue_id = this.props.match.params.id;
		this.props.getIssueDetails(issue_id);
	}

	render() {
		return (
			<div>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      				<Navbar.Brand href="">Sample Project Issues</Navbar.Brand>
      			</Navbar>
      			<Container className="containerClass border">
      				{
      					!this.props.issue_obj.title ? 
						<h2> Issue Not Found </h2> :
						<div> 
							<Row>
								<h3> {this.props.issue_obj.title + "  #" + this.props.issue_obj.number} </h3>
							</Row>
							<Row>
								{
									this.props.issue_obj.state === 'open' ?
									<Button variant="success" size="lg">Open</Button>:
									<Button variant="danger" size="lg">Closed</Button>

								}
								
								<NavLink to={this.props.issue_obj.user.html_url}> 
									<h4> 
										{this.props.issue_obj.user.login}
									</h4>
								</NavLink>
								<h4>Opened Issue <Moment fromNow ago>{this.props.issue_obj.created_at}</Moment> ago</h4>
							</Row>
						<Row>
							<textarea className="form-control col-xs-12" rows="10" value={this.props.issue_obj.body} readOnly> </textarea>
						</Row>
						</div>
      				}
      			</Container>
			</div>
		);
	}

}

const mapStoreToProps = (store) => {
	return {	
		issue_obj: store.issueObj
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getIssueDetails: (issue_id) => dispatch(actions.getIssueDetails(issue_id))
	}
}


export default connect(mapStoreToProps, mapDispatchToProps)(Issue);



/*

{
  "url": "https://api.github.com/repos/purnesh201/nus_react_app/issues/3",
  "repository_url": "https://api.github.com/repos/purnesh201/nus_react_app",
  "labels_url": "https://api.github.com/repos/purnesh201/nus_react_app/issues/3/labels{/name}",
  "comments_url": "https://api.github.com/repos/purnesh201/nus_react_app/issues/3/comments",
  "events_url": "https://api.github.com/repos/purnesh201/nus_react_app/issues/3/events",
  "html_url": "https://github.com/purnesh201/nus_react_app/issues/3",
  "id": 486685764,
  "node_id": "MDU6SXNzdWU0ODY2ODU3NjQ=",
  "number": 3,
  "title": "Generating a new SSH key",
  "user": {
    "login": "purnesh201",
    "id": 9459885,
    "node_id": "MDQ6VXNlcjk0NTk4ODU=",
    "avatar_url": "https://avatars2.githubusercontent.com/u/9459885?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/purnesh201",
    "html_url": "https://github.com/purnesh201",
    "followers_url": "https://api.github.com/users/purnesh201/followers",
    "following_url": "https://api.github.com/users/purnesh201/following{/other_user}",
    "gists_url": "https://api.github.com/users/purnesh201/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/purnesh201/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/purnesh201/subscriptions",
    "organizations_url": "https://api.github.com/users/purnesh201/orgs",
    "repos_url": "https://api.github.com/users/purnesh201/repos",
    "events_url": "https://api.github.com/users/purnesh201/events{/privacy}",
    "received_events_url": "https://api.github.com/users/purnesh201/received_events",
    "type": "User",
    "site_admin": false
  },
  "labels": [

  ],
  "state": "open",
  "locked": false,
  "assignee": null,
  "assignees": [

  ],
  "milestone": null,
  "comments": 1,
  "created_at": "2019-08-29T01:25:56Z",
  "updated_at": "2019-08-29T01:26:05Z",
  "closed_at": null,
  "author_association": "OWNER",
  "body": "Generating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH keyGenerating a new SSH key",
  "closed_by": null
}

*/