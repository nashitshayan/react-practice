import React, { Component } from 'react';
import Overview from './Overview';
import uniqid from 'uniqid';
class Tasks extends Component {
	constructor(props) {
		super(props);

		this.state = {
			task: {
				text: '',
				id: uniqid(),
			},
			tasks: [],
		};
	}
	handleTaskInput = (e) => {
		this.setState({
			task: {
				text: e.target.value,
				id: this.state.task.id,
			},
		});
	};
	addTask = (e) => {
		this.setState({
			tasks: [...this.state.tasks, this.state.task],
			task: {
				text: '',
				id: uniqid(),
			},
		});
		e.preventDefault();
	};

	render() {
		const { task, tasks } = this.state;
		const box = {
			border: '1px solid black',
			backgroundColor: 'beige',
			padding: '3rem',
		};
		return (
			<div style={box}>
				<form onSubmit={this.addTask}>
					<input
						type='text'
						placeholder='type'
						onChange={this.handleTaskInput}
						value={task.text}
					/>
					<button type='submit'>Submit</button>
				</form>
				<Overview tasks={tasks} />
			</div>
		);
	}
}

export default Tasks;
