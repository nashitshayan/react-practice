import React, { Component } from 'react';

class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: 'Hello',
		};
	}
	handleClick() {
		// this.setState({
		// 	message: 'Goodbye!',
		// });
		console.log(this);
	}
	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				<button onClick={this.handleClick}>Click</button>
			</div>
		);
	}
}

export default EventBind;
