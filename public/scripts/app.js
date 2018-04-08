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

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
