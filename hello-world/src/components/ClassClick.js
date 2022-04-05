import React, { Component } from 'react';

class ClassClick extends Component {
	clickHandler() {
		console.log('class clciked');
	}
	render() {
		return (
			<div>
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default ClassClick;
