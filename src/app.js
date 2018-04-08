console.log('App.js is running');

var title = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer.'
}
var template = (
    <div>
        <h1>{title.title}</h1>
        <p>{title.subtitle}</p>
    </div>
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