"use strict";

var details = "These are some details to be toggled from visible to invisible";
var visible = false;
var onToggleVisibility = function onToggleVisibility() {
    visible = !visible;
    render();
};

var render = function render() {
    var template = React.createElement(
        "section",
        { id: "main" },
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onToggleVisibility },
            visible ? "Hide details" : "Show details"
        ),
        visible && React.createElement(
            "p",
            null,
            details
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();
