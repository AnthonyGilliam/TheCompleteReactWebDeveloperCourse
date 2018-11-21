class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
       }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return { options: [] };
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!'
        return (
            <section id="main">
                <Header id="home_header" title={title} subtitle={subtitle} />
                <Action
                    hasOptions={!!this.state.options.length}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
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
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </section>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <section id="Options">
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.length
                        ? this.props.options.map((opt, i) => {
                            return (<Option name={opt} key={i} />);
                            })
                        : <p>No options currently available</p>
                }
            </section>
        );
    };
}

class Option extends React.Component {
    render() {
        return (
            <div className="option">{this.props.name}</div>
        );
    }
}

class AddOption extends React.Component {
    // Argument e holds the target property which refers to the form and its inputs
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.option.value.trim();
        console.log(option);
        if (option)
            alert('handleAddOption');
    }
    render() {
        return (
            <section id="AddOption">
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button id="add_option_button">Add Option</button>
                </form>  
            </section>
        )
    };
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));