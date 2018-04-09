console.log('App.js is running...yo!');

// template

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer.',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = ' ';
		renderOptions();
		}
	};

	const resetOptions = () => {
		app.options = [];
		renderOptions();
	}

	const appRoot = document.getElementById('app');

	const renderOptions = () => {
		const template = (
			<div>
				<h1>{app.title}</h1>
				{app.subtitle && <p>{app.subtitle}</p>}
				<p>{app.options.length > 0 ? 'Here are your options.' : 'You have no options.'}</p>
				<p>{app.options.length}</p>
				<button onClick={resetOptions}>Remove All</button>
				<ol>
					<li>Item one</li>
					<li>Item two</li>
				</ol>
				<form onSubmit={onFormSubmit}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
	);
	ReactDOM.render(template, appRoot);
};

renderOptions();





// create render functin that renders new jsx
// call to initialize
// then call after options array is added to it.