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

let count = 0;
const addOne = () => {
	count++;
	renderCounterApp();
};

const minusOne = () => {
	console.log('minusOne');
};

const resetButton = () => {
	console.log('reset');
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={resetButton}>reset</button>
		</div>
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();