import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Overview(props) {
	const { tasks, numberOfTasks, deleteTask } = props;
	const handleDeleteTask = (e) => {
		let id = e.target.closest('.icon').dataset.id;
		deleteTask(id);
	};
	return (
		<>
			{/* <span>{numberOfTasks}</span> */}
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						{task.text}{' '}
						<FontAwesomeIcon
							icon={faTrash}
							onClick={handleDeleteTask}
							className='icon'
							data-id={task.id}
						/>
					</li>
				))}
			</ul>
		</>
	);
}
