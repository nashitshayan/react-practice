import React, { useEffect, useState } from 'react';
const customStyles = {
	margin: '18rem auto',
	fontSize: '3rem',
};
const useDataApi = (initUrl, initData) => {
	const [data, setData] = useState(initData);
	const [url, setUrl] = useState(initUrl);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		async function fetchData() {
			setIsError(false);
			setIsLoading(true);
			try {
				const res = await fetch(url);
				const data = await res.json();
				setData(data);
				console.log('fetch');
			} catch (err) {
				setIsError(true);
			}
			setIsLoading(false);
		}
		fetchData();
	}, [url]);
	return [{ data, isLoading, isError }, setUrl];
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
