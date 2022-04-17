import React from 'react';

export default function Overview(props) {
	const { tasks } = props;
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>{task.text}</li>
			))}
		</ul>
	);
}
