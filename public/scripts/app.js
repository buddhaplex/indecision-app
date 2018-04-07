'use strict';
console.log('App.js is running');
// JSX - JavaScript XML
var template = <h1>Indecision App</h1><p>This is some info.</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
