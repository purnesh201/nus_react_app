import React, {Component} from 'react';

import '../App.css';


class Issue extends Component {

	render() {
		return (
			<div>Hello World Issue  {this.props.match.params.id}</div>
		);
	}

}

export default Issue;