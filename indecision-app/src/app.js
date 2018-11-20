class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </header>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <section id="Action">
                <button>What should I do?</button>
            </section>
        );
    }
}

// Options -> Options component here
class Options extends React.Component {
    render() {
        return (
            <section id="Options">
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                </ul>
            </section>
        );
    };
}

// AddOption -> AddOption component here 
class AddOption extends React.Component {
    render() {
        return (
            <section id="AddOption">
                <form>
                    <input type="text" id="add_option_input" />
                    <button id="add_option_button">Add Option</button>
                </form>  
            </section>
        )
    };
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));