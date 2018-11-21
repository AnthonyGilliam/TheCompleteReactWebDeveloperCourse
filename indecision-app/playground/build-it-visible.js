// const details = "These are some details to be toggled from visible to invisible";
// let visible = false;
// const onToggleVisibility = () => {
//     visible = !visible;
//     render();
// }

// const render = () => {
//     const template = (
//         <section id="main">
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggleVisibility}>
//                 {visible ? "Hide details" : "Show details"}
//             </button>
//             {visible && (<p>{details}</p>)}
//         </section>
//     )

//     const appRoot = document.getElementById('app');
//     ReactDOM.render(template, appRoot)
// };

// render();

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.onToggleVisibility = this.onToggleVisibility.bind(this);
        this.state = {
            visible: false,
            details: 'These are some details to be '
                      + 'toggled from visible to invisible'
        }
    }

    onToggleVisibility() {
        this.setState((prevState) => ({
            visible: !prevState.visible
        }));
    }

    render() {
        return (
            <section id="main">
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggleVisibility}>
                    {this.state.visible ? "Hide details" : "Show details"}
                </button>
                {this.state.visible && (<p>{this.state.details}</p>)}
            </section>            
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));