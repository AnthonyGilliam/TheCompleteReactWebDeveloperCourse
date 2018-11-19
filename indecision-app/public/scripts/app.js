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

// Crate a temlate2 var JSX expression
var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne, className: 'button' },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne, className: 'button' },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset, className: 'button' },
            'reset'
        )
    );

    ReactDOM.render(template2, appRoot);
};

renderCounterApp();