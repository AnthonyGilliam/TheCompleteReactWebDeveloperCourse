class IndecisionApp extends React.Component {
    render() {
        return (
            <section id="main">
                <Header />
                <Action />
                <Options />
                <AddOption />
            </section>
        );
    }
}

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

class Options extends React.Component {
    render() {
        return (
            <section id="Options">
                <ul>
                    <Option />
                </ul>
            </section>
        );
    };
}

// Option -> Option component here
class Option extends React.Component {
    render() {
        return (
            <li className="option" key="key">Option</li>
        );
    }
}

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));