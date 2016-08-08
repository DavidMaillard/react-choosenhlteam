var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var conferences = require('./data/data-teams');
var instructions = require('./data/data-instructions');

var Gamer = require('./Gamer');

var App = React.createClass({
    getInitialState: function() {
        return {
            'conferences': {},
            'instructions': {},
            'gamers': ['left', 'right']
        };
    },
    componentWillMount: function() {
        this.setState(conferences);
        this.setState(instructions);
    },
    renderGamer: function(gamer) {
        return <Gamer key={gamer}
                      gamer={gamer}
                      gameinstructions={this.state.instructions}
                      conferences={this.state.conferences}
        />
    },
    render: function() {
        return (
            <div className="gamers">
                {this.state.gamers.map(this.renderGamer)}
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);