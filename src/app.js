console.log('App.js is running');

// template

var title = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer.',
	options: ['One', 'Two']
};

var template = (
	<div>
		<h1>{title.title}</h1>
		{title.subtitle && <p>{title.subtitle}</p>}
		<p>{title.options.length > 0 ? 'Here are your options.' : 'You have no options.'}</p>
	</div>
);

// templateTwo

var user = {
	name: 'Eric Andrade',
	age: 46,
	location: 'Edison, NJ'
};

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	} 
}

var templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// EXTRA CODE
// <p><b>Age:</b> {user.age}</p>