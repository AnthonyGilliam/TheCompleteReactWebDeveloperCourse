const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
}

const getName = obj.getName.bind(obj);

console.log(getName());

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
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <section id="Action">
                <button onClick={this.handlePick}>What should I do?</button>
            </section>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        // Methods consuming props must manually bind this to keep proper context
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        // If no constructor, the this binding is lost, this is now null
        console.log(this.props.options);
        alert('handleRemoveAll');
    }
    render() {
        return (
            <section id="Options">
                <button onClick={this.handleRemoveAll}>Remove All</button>
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