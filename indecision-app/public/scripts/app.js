'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Anthony'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item 1'
        ),
        React.createElement(
            'li',
            null,
            'item 2'
        )
    )
);

// Crate a temlate2 var JSX expression
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Anthony Gilliam'
    ),
    React.createElement(
        'p',
        null,
        'Age: 35'
    ),
    React.createElement(
        'p',
        null,
        'Location: Atlanta'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);