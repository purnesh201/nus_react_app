import React, {Component} from 'react';

import '../App.css';

import {Container, Form, Col, Button} from 'react-bootstrap';


class CreateIssue extends Component {

	constructor(){
		super();
		this.createNewIssue = this.createNewIssue.bind(this);
	}

	createNewIssue(event){
			debugger;
	}

	render() {
		return (
		<div>

      		<Container className="containerClass border">
          		<Form onSubmit={this.createNewIssue}>
				    <Form.Group className="justify-content-start" as={Col} md={6} controlId="validationCustom01">
				    	<Form.Label>Create Issue/Bug</Form.Label>
				   		<Form.Control size="md" type="name"
				   			name="issue_title" 
				   			placeholder="Issue Title"
				   			inputRef = {(input) => this.issueTitle = input } 
				   		/>
				  	</Form.Group>
				  	<Form.Group controlId="exampleForm.ControlTextarea1">
    					<Form.Label>Issue Description</Form.Label>
    					<Form.Control as="textarea" rows="5"
    						name="issue_desc" 
    						inputRef = {(input) => this.issueDesc = input }
    					/>
  					</Form.Group>
  					<Form.Group as={Col} md={1} className="justify-content-end" controlId="validationCustom01">
  						<Button type="submit" size="lg" >Submit</Button>
  					</Form.Group>
          		</Form>


     		</Container>

    	</div>
		);
	}

}

export default CreateIssue;