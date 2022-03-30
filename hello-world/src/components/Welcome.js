import React, { Component } from 'react';

class Welcome extends Component {
	constructor() {
		super();
		this.state = {
			message: 'welcome visitor',
		};
	}
	render() {
		return <h1>{this.state.message}Nashit from CLass</h1>;
	}
}

export default Welcome;
