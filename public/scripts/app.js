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

var count = 0;
var addOne = function addOne() {
	count++;
	renderCounterApp();
};

var minusOne = function minusOne() {
	console.log('minusOne');
};

var resetButton = function resetButton() {
	console.log('reset');
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
	var templateTwo = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Count: ',
			count
		),
		React.createElement(
			'button',
			{ onClick: addOne },
			'+1'
		),
		React.createElement(
			'button',
			{ onClick: minusOne },
			'-1'
		),
		React.createElement(
			'button',
			{ onClick: resetButton },
			'reset'
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
