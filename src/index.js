import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// const fName = 'JustFidel';
// const lName = 'Adang';
// const date = new Date();
// let year = date.getFullYear();

// ReactDOM.render(
// 	<div>
// 		<p>
// 			Created by {fName} {lName}.
// 		</p>
// 		<p>Copyright {year}.</p>
// 	</div>,
// 	document.getElementById('root')
// );

// const img = 'https://picsum.photos/300';

// ReactDOM.render(
// 	<div>
// 		<h1 className='heading'>My Favourite Foods</h1>
// 		<img src={img} />
// 	</div>,
// 	document.getElementById('root')
// );

// const img = 'https://picsum.photos/300';

// const customStyle = {
// 	color: 'brown',
// 	fontSize: '3em',
// 	border: '1px solid brown',
// 	borderRadius: '5px',
// 	padding: '4px 30px',
// };

// customStyle.color = 'grey';

// ReactDOM.render(
// 	<div>
// 		<h1 className='heading' style={customStyle}>
// 			My Favourite Foods
// 		</h1>
// 		<img src={img} />
// 	</div>,
// 	document.getElementById('root')
// );

// const date = new Date();
// const time = date.getHours();

// let greeting = '';

// const inlineStyle = {
// 	color: 'red',
// };

// if (time < 12) {
// 	greeting = 'Good Morning';
// } else if (time < 18) {
// 	greeting = 'Good Afternoon';
// 	inlineStyle.color = 'blue';
// } else {
// 	greeting = 'Good Night';
// 	inlineStyle.color = 'pink';
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

/////////////////////////////////////////

// function Card(props) {
// 	return (
// 		<div>
// 			<h2>{props.name}</h2>
// 			<img src={props.img} alt='avatar_img' />
// 			<p>{props.tel}</p>
// 			<p>{props.email}</p>
// 		</div>
// 	);
// }

// ReactDOM.render(
// 	<div>
// 		<Card
// 			name='Beyonce'
// 			email='b@beyonce.com'
// 			tel='+123 456 789'
// 			img='https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg'
// 		/>
// 		<Card
// 			name='JustFidel'
// 			email='aaa@jfidel.com'
// 			tel='+123 456 789 123'
// 			img='https://picsum.photos/200'
// 		/>
// 	</div>,
// 	document.getElementById('root'),
// );

///////////////////////////

ReactDOM.render(
	<div>
		<App />
	</div>,
	document.getElementById('root'),
);
