import React, {Component} from 'react';

import '../App.css';
import {Nav, Navbar, NavDropdown, Container, Row, Col, Table, ListGroup, Tabs, Tab} from 'react-bootstrap';


class Issues extends Component {

	constructor(){
		super();
		this.state = {
			issues : [
				{
					id: 1,
					title: "Hot reload is not working with CSS modules, starting in 3.1.0",
					created_date : "08-05-19 22:12:10",
					status : "open"
				},
				{
					id: 2,
					title: "There might be a problem with the project dependency tree. Can't deploy to Heroku.",
					created_date : "08-05-19 22:12:10",
					status : "open"
				},
				{
					id: 3,
					title: "Jest fails when importing a 3rd party non TS module",
					created_date : "08-05-19 22:12:10",
					status : "open"
				},
				{
					id: 4,
					title: "node_modules Mocks are not picked up by jest with latest react-scripts ",
					created_date : "08-05-19 22:12:10",
					status : "open"
				},

			]
		}
	}



	render() {
		return (

	<div>
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      	<Navbar.Brand href="">Sample Project Issues</Navbar.Brand>
      	</Navbar>

      <Container className="containerClass border">
          
        

          {this.state.issues.map((issue, index) => {
          		return (
          			<Row  className="issuesRow" key="{index}">
          				<Col md={1}> <i class="fa fa-user-happy"></i> </Col> 
          				<Col md={11}> {issue.title} </Col> 
          			</Row>
          			)
          })}

      </Container>

    </div>
		);
	}

}

export default Issues;