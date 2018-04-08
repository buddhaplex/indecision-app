'use strict';

console.log('App.js is running');

var title = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        title.title
    ),
    React.createElement(
        'p',
        null,
        title.subtitle
    )
);

// var user = {
// 	name: 'Eric',
// 	age: 45,
// 	location: 'Edison, NJ'
// };
// var templateTwo = (
// 	<div>
// 		<h1>{user.name}</h1>
// 		<p><b>Age:</b> {user.age}</p>
// 		<p><b>Location:</b> {user.location}</p>
// 	</div>
// );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
