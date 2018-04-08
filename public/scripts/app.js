'use strict';

console.log('App.js is running');

// template

var title = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer.',
	options: ['One', 'Two']
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		title.title
	),
	title.subtitle && React.createElement(
		'p',
		null,
		title.subtitle
	),
	React.createElement(
		'p',
		null,
		title.options.length > 0 ? 'Here are your options.' : 'You have no options.'
	)
);

// templateTwo

var user = {
	name: 'Eric Andrade',
	age: 46,
	location: 'Edison, NJ'
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	}
}

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// EXTRA CODE
// <p><b>Age:</b> {user.age}</p>
