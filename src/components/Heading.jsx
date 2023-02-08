import React from 'react';

// function Heading() {
// 	return <h1>My Favourite Foods</h1>;
// }

function Heading() {
	const date = new Date();
	const time = date.getHours();

	let greeting = '';

	const inlineStyle = {
		color: 'red',
	};

	if (time < 12) {
		greeting = 'Good Morning';
	} else if (time < 18) {
		greeting = 'Good Afternoon';
		inlineStyle.color = 'blue';
	} else {
		greeting = 'Good Night';
		inlineStyle.color = 'pink';
	}

	return (
		<h1 className='heading' style={inlineStyle}>
			{greeting}
		</h1>
	);
}

export default Heading;
