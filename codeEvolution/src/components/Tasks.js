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
			numberOfTasks: 0,
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
			numberOfTasks: this.state.numberOfTasks + 1,
		});
		e.preventDefault();
	};

	handleDeleteTask = (id) => {
		this.setState({
			tasks: this.state.tasks.filter((task) => task.id !== id),
		});
	};
	// componentDidUpdate() {
	// 	// console.log(this.state.tasks.filter((task) => task.id !== '"l22rdf9d"'));
	// }
	render() {
		const { task, tasks, numberOfTasks } = this.state;
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
				<Overview
					tasks={tasks}
					numberOfTasks={numberOfTasks}
					deleteTask={this.handleDeleteTask}
				/>
			</div>
		);
	}
}

export default Tasks;
