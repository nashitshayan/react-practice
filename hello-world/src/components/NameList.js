import React from 'react';
import Person from './Person';
function NameList() {
	// const names = ['Nashit', 'Tanish', 'Saif'];

	// return (
	// 	<div>
	// 		{names.map((name) => (
	// 			<h1>{name}</h1>
	// 		))}
	// 	</div>
	// );
	const persons = [
		{
			id: 1,
			name: 'Nashit',
			age: 22,
			skill: 'React',
		},
		{
			id: 2,
			name: 'Tanish',
			age: 12,
			skill: 'Gaming',
		},
		{
			id: 3,
			name: 'AbdulHaseeb',
			age: 48,
			skill: 'Telecom',
		},
		{
			id: 4,
			name: 'Qamar',
			age: 38,
			skill: 'Cooking',
		},
	];
	const personList = persons.map((person) => <Person person={person} />);
	return <div>{personList}</div>;
}

export default NameList;
