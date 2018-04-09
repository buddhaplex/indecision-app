'use strict';

console.log('App.js is running...yo!');

// template

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer.',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = ' ';
		renderOptions();
	}
};

var resetOptions = function resetOptions() {
	app.options = [];
	renderOptions();
};

var appRoot = document.getElementById('app');

var renderOptions = function renderOptions() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subtitle && React.createElement(
			'p',
			null,
			app.subtitle
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Here are your options.' : 'You have no options.'
		),
		React.createElement(
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'button',
			{ onClick: resetOptions },
			'Remove All'
		),
		React.createElement(
			'ol',
			null,
			React.createElement(
				'li',
				null,
				'Item one'
			),
			React.createElement(
				'li',
				null,
				'Item two'
			)
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

renderOptions();

// create render functin that renders new jsx
// call to initialize
// then call after options array is added to it.
