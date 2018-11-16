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

const user = {
    name: 'Anthony',
    age: 35,
    location: 'Atlanta'
}

const getLocation = (location) => {
                            if (location)
                                return <p>Location: {location}</p>
                        }

// Crate a temlate2 var JSX expression
const template2 = (
    <div>
        <h1>{user.name || 'Anonymous'}</h1>
        {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);