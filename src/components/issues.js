import React, {Component} from 'react';

import '../App.css';
import {Navbar, Container, Row, Col} from 'react-bootstrap';

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
          {this.props.issuesList.map((issue, index) => {
          		return (
          			<Row  className="issuesRow" key={index}>
          				<Col md={1}> <i className="fa fa-user-happy"></i> </Col> 
          				<Col md={11}> <NavLink to={"/issue/" + issue.number}> {issue.title}</NavLink> </Col> 
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