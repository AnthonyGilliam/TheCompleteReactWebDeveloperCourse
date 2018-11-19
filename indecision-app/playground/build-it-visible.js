const details = "These are some details to be toggled from visible to invisible";
let visible = false;
const onToggleVisibility = () => {
    visible = !visible;
    render();
}

const render = () => {
    const template = (
        <section id="main">
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleVisibility}>
                {visible ? "Hide details" : "Show details"}
            </button>
            {visible && (<p>{details}</p>)}
        </section>
    )

    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot)
};

render();