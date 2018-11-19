console.log('App.js is running!');

// JSX - JavaScript XML
// only render subtitle and p tag if subtitle exists - logical and operator
// render new p tag - if options has any elements else "No options"
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        <p>{(app.options && app.options.length) ? 'Here are your options' : 'No options'}</p>
    </div>
);

// Crate a temlate2 var JSX expression
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => { 
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={minusOne} className="button">-1</button>
            <button onClick={reset} className="button">reset</button>
        </div>
    );

    ReactDOM.render(template2, appRoot);
};

renderCounterApp();