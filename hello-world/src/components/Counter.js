import React, { Component } from 'react';

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
		};
	}
	handleIncrementCount() {
		this.setState({
			counter: this.state.counter + 1,
		});
	}
	render() {
		return (
			<div>
				<h1 onClick={() => this.handleIncrementCount()}>Counter</h1>
				{this.state.counter}
			</div>
		);
	}
}

export default Counter;
