console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const numbers = [55, 101, 1000];

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
    }
    render();
};

const onRemoveAll = () => {
    app.options = [];
    console.log(app.options);
    render();
};

// Create a render function that renders the new JSX
// Call it right away
// Call it after item added to options array 
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{(app.options && app.options.length) ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {/*Arrays are fully supported by JSX*/}
                {/*As with any JSX expression; nulls, undefined, and booleans do not render at all*/}
                {app.options.map((opt, i) => <li key={i}>{opt}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );    

    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();