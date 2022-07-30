import React, { useState } from 'react';
/**
 * EACH RENDER HAS IT's OWN EVENT HANDLERS
 *
 * Try:
 * Increment counter to 3
 * Press Show Alert
 * Increment counter to 5
 *
 * Alert will show : 3
 * In depth explanation : https://overreacted.io/how-are-function-components-different-from-classes/
 *
 * The 'count' value is constant for every particular call to our function. Our function gets called many times but every one of those times, the count value inside of it is *constant* and set to a particular value (state of the render)
 *
 * Inside any particular render, props and state remain the same.
 *
 */
function UniqueHandlers() {
	const [count, setCount] = useState(0);

	function handleAlertClick() {
		setTimeout(() => {
			alert('You clicked on: ' + count);
		}, 3000);
	}
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click Me</button>
			<button onClick={handleAlertClick}>Show alert</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	);
}

export default UniqueHandlers;
