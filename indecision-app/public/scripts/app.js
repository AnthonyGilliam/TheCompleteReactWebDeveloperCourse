'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var numbers = [55, 101, 1000];

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
    }
    render();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    console.log(app.options);
    render();
};

// Create a render function that renders the new JSX
// Call it right away
// Call it after item added to options array 
var render = function render() {
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
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (opt, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    opt
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();