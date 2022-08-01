import React, { useEffect, useReducer, useState } from 'react';
const customStyles = {
	margin: '18rem auto',
	fontSize: '3rem',
};
const dataFetchReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_INIT':
			return { ...state, isError: false, isLoading: true };
		case 'FETCH_SUCCESS':
			return {
				...state,
				isError: false,
				isLoading: false,
				data: action.payload,
			};
		case 'FETCH_FAILURE':
			return { ...state, isLoading: false, isError: true };
		default:
			throw new Error();
	}
};
const useDataApi = (initUrl, initData) => {
	const [url, setUrl] = useState(initUrl);
	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		data: initData,
	});
	useEffect(() => {
		async function fetchData() {
			dispatch({ type: 'FETCH_INIT' });

			try {
				const res = await fetch(url);
				const data = await res.json();
				dispatch({ type: 'FETCH_SUCCESS', payload: data });

				console.log('fetch');
			} catch (err) {
				dispatch({ type: 'FETCH_FAILURE' });
			}
		}
		fetchData();
	}, [url]);
	return [state, setUrl];
};
function FetchData() {
	const [query, setQuery] = useState('redux');
	const [{ data, isLoading, isError }, doFetch] = useDataApi(
		'https://hn.algolia.com/api/v1/search?query=redux',
		{ hits: [] },
	);
	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
				}}>
				<input
					type='text'
					onChange={(e) => setQuery(e.target.value)}
					value={query}
				/>
				<button type='submit'>Search</button>
			</form>
			{isError && <div style={customStyles}>Something went wrong...</div>}
			{isLoading ? (
				<div style={customStyles}>Loading...</div>
			) : (
				<ul>
					{data.hits.map((item) => (
						<li key={item.objectID}>
							<a href={item.url}>{item.title}</a>
						</li>
					))}
				</ul>
			)}
		</>
	);
}

export default FetchData;
