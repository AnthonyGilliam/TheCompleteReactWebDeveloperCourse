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