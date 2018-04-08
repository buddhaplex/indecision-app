console.log('App.js is running');

// template

const title = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer.',
	options: ['One', 'Two']
};

const template = (
	<div>
		<h1>{title.title}</h1>
		{title.subtitle && <p>{title.subtitle}</p>}
		<p>{title.options.length > 0 ? 'Here are your options.' : 'You have no options.'}</p>
	</div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
