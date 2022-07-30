import React, { useEffect, useRef, useState } from 'react';
/**
 * EACH RENDER HAS IT's OWN... EVERYTHING
 *
 * Click several times with a small delay, check the console
 *
 * Result? Series of console logs with the count value of each render
 *
 * NOTE: This behaviour is UNIQUE to FUNCTIONAL components. CLASS components behave differently. 'this.state.whatever' will ALWAYS point to the LATEST value rather than the one belonging to a particular render.
 *
 * EVERY FUNCTION inside the component render (including event handlers, timeouts, or API calls inside them) captures the props and state of the render call that defined it.
 *
 * NOTE: When you DO want to read the LATEST rather than the CAPTURED value inside some callback defined in an effect, the easiest way to do this by using REFS. (https://overreacted.io/how-are-function-components-different-from-classes/)
 *
 *
 * NOTE: Trying of read 'future' props or state from a function in a 'past' render is 'swimming against the tide'. It's not 'wrong' (sometimes even necessary) but it might look less 'clean' to break out of the paradigm.
 */
function UniqueEverything() {
	const [count, setCount] = useState(0);
	const latestCount = useRef(count);
	useEffect(() => {
		//set the mutable latest value
		latestCount.current = count;
		setTimeout(() => {
			console.log(`Count ${count} times`);
			console.log(`Latest Count ${latestCount.current} times`);
		}, 3000);
	});
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click Me</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	);
}

export default UniqueEverything;
