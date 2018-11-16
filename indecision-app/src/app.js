console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Anthony</h1>
        <p>This is some info</p>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>
    </div>
);

// Crate a temlate2 var JSX expression
var template2 = (
    <div>
        <h1>Anthony Gilliam</h1>
        <p>Age: 35</p>
        <p>Location: Atlanta</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);