import React, { Component } from 'react';

export default class LifecycleA extends Component {
	constructor(props) {
		super(props);
		console.log('ctor');
		this.state = {
			first: 'initialState',
		};
	}
	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps');
		return null;
	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	render() {
		console.log('render');
		return <div>Mount</div>;
	}
}
