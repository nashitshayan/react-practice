import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
	}
	handleIncrementCount() {
		// this.setState({
		// 	counter: this.state.counter + 1,
		// });
		this.setState((prevState) => ({
			counter: prevState.counter + 1,
		}));
	}
	handleIncrementFive() {
		this.handleIncrementCount();
		this.handleIncrementCount();
		this.handleIncrementCount();
		this.handleIncrementCount();
		this.handleIncrementCount();
	}
	render() {
		return (
			<div>
				<h1 onClick={() => this.handleIncrementFive()}>Counter</h1>
				{this.state.counter}
			</div>
		);
	}
}

export default Counter;
