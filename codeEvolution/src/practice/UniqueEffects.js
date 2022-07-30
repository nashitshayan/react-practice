import React, { useEffect, useState } from 'react';
/**
 * EACH RENDER HAS IT's OWN EVENT EFFECTS
 * 
 * How does the effect read the latest count state?
 * It is same as event handlers. Count is a constant within a particular component 'render'. Event handlers 'see' the count state from the render that they 'belong' to because count is a variabe in their scope.
 * 
 * It is not that count variable somehow changes inside an 'unchanging' effect. It's the effect function itself that is different on every render.

 *
 *
 */
function UniqueEffects() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `${count} times`;
	});
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click Me</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	);
}

export default UniqueEffects;
