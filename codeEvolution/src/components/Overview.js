import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrash,
	faEdit,
	faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

export default function Overview(props) {
	const { tasks, deleteTask, isEditing, editTask, saveTask, taskInput } = props;

	const handleTaskInput = (e) => {
		// taskInput(e);
	};
	const handleDeleteTask = (e) => {
		let id = e.target.closest('.icon').dataset.id;
		deleteTask(id);
	};

	const handleEditTask = (e) => {
		let id = e.target.closest('.icon').dataset.id;
		let text = e.target.closest('.icon').parentElement.firstChild;
		console.log('edit', text);
		// editTask(id, text);
	};
	const handleSaveTask = (e) => {
		let id = e.target.closest('.icon').dataset.id;
		let text = e.target.closest('.icon').parentElement.firstChild;
		console.log('save', text);
		//saveTask();
	};
	const taskList = tasks.map((task) => {
		if (isEditing) {
			return (
				<p>
					<input
						type='text'
						placeholder='type'
						onChange={handleTaskInput}
						value={task.text}
					/>
					<FontAwesomeIcon
						icon={faCircleCheck}
						onClick={handleSaveTask}
						className='icon'
						data-id={task.id}
					/>
				</p>
			);
		} else {
			return (
				<li key={task.id}>
					{task.text}{' '}
					<FontAwesomeIcon
						icon={faTrash}
						onClick={handleDeleteTask}
						className='icon'
						data-id={task.id}
					/>{' '}
					<FontAwesomeIcon
						icon={faEdit}
						onClick={handleEditTask}
						className='icon'
						data-id={task.id}
					/>
				</li>
			);
		}
	});
	return (
		<>
			{/* <span>{numberOfTasks}</span> */}
			<ul>{taskList}</ul>
		</>
	);
}
