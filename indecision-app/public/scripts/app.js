'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

// only render subtitle and p tag if subtitle exists - logical and operator
// render new p tag - if options has any elements else "No options"

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length ? 'Here are your options' : 'No options'
    )
);

var user = {
    name: 'Anthony',
    age: 35,
    location: 'Atlanta'
};

var getLocation = function getLocation(location) {
    if (location) return React.createElement(
        'p',
        null,
        'Location: ',
        location
    );
};

// Crate a temlate2 var JSX expression
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name || 'Anonymous'
    ),
    user.age && user.age > 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);