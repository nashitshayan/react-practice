import React, { useCallback, useState } from 'react';

function MeasureDOM() {
	const [height, setHeight] = useState(0);
	const measuredRef = useCallback((node) => {
		if (node !== null) setHeight(node.getBoundingClientRect().height);
	}, []);
	return (
		<div>
			MeasureDOM
			<h1 ref={measuredRef}>
				Hello, Let's measure this header! Now let's change the text and see what
				happens!
			</h1>
			<h2>The above header is {Math.round(height)} px tall</h2>
		</div>
	);
}

export default MeasureDOM;
