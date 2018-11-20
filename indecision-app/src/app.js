class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!'
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <section id="main">
                <Header id="home_header" title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
            </section>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <header id={this.props.id}>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                    {
                        this.props.options.length
                            ? this.props.options.map((opt, i) => {
                                return (<Option name={opt} key={i} />);
                            })
                            : <p>No options currently available</p>
                    }
                </ul>
            </section>
        );
    };
}4

// Option -> Option component here
class Option extends React.Component {
    render() {
        return (
            <li className="option">{this.props.name}</li>
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