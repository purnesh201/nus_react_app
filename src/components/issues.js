import React, {Component} from 'react';

import '../App.css';
import {Navbar, Container, Row, Col, Button} from 'react-bootstrap';

import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';


import * as actions from '../store/actions/actions';


class Issues extends Component {

	getIssuesList = () => {
		fetch ("https://api.github.com/repos/purnesh201/nus_react_app/issues")
		.then(response => response.json())
		.then(response => {
			console.log(response);
			return response;
		});

	}

	// async componentDidMount (){
	// 	try {
	// 		const newIssues = await fetch ("https://api.github.com/repos/purnesh201/nus_react_app/issues");
	// 		if (!newIssues){
	// 			console.log("Error throwing");
	// 			throw Error("Error in getting issues");
	// 		}
	// 		const json = await newIssues.json();
	// 		console.log("received the new json");
	// 		this.setState({
	// 			issues: json
	// 		});
	// 	} catch (error){
	// 		console.log(error);
	// 	}
	// }

	componentDidMount() {
		this.props.getIssues();
	}

	render() {
		return (

	<div>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      	<Navbar.Brand href="">Sample Project Issues</Navbar.Brand>
      	</Navbar>

      <Container className="containerClass border">
      		<Row>
      			<h3> Issues open for the repo </h3> 
      		</Row>        
      		<Row>
      			<h4>  https://api.github.com/repos/purnesh201/nus_react_app/issues </h4>
      			<Button variant="success" size="lg"> 
      				<NavLink to="/create_issue"> New Issue</NavLink>
      			</Button>
      		</Row>
          {this.props.issuesList.map((issue, index) => {
          		return (
          			<Row  className="issuesRow" key={index}>
          				<span class="tooltipped tooltipped-e" aria-label="Open issue">
        					<svg class="octicon octicon-issue-opened open" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
      					</span>
          				<Col md={4}> <NavLink to={"/issue/" + issue.number}> {issue.title}</NavLink> </Col> 
          			</Row>
          			)
          })}
      </Container>
    </div>
		);
	}

}

const mapStoreToProps = (store) => {
	return {	
		issuesList: store.issuesList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getIssues: () => dispatch(actions.getAllIssues())
	}
}


export default connect(mapStoreToProps, mapDispatchToProps)(Issues);