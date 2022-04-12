import React, { Component } from 'react';

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			comments: '',
			topic: 'react',
		};
	}
	handleUsernameChange = (e) => {
		this.setState({
			username: e.target.value,
		});
	};
	handleCommentsChange = (e) => {
		this.setState({
			comments: e.target.value,
		});
	};
	handleTopicChange = (e) => {
		this.setState({
			topic: e.target.value,
		});
	};

	hamdleSubmit = (e) => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
		e.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.hamdleSubmit}>
				<div>
					<label>Username</label>
					<input
						type='text'
						value={this.state.username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<div>
					<label>Comments</label>
					<textarea
						type='text'
						value={this.state.comments}
						onChange={this.handleCommentsChange}></textarea>
				</div>
				<div>
					<label>Topics</label>
					<select value={this.state.topic} onChange={this.handleTopicChange}>
						<option value='react'>React</option>
						<option value='angular'>Angular</option>
						<option value='vue'>Vue</option>
					</select>
				</div>
				<button type='submit'>Submit</button>
			</form>
		);
	}
}
