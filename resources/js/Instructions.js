var React = require('react');
var classNames = require('classnames');

var Instructions = React.createClass({
    renderInstruction: function(instruction_index) {
        var instructionClasses = classNames({
                'instruction': true,
                'done': this.props.instruction > instruction_index
            }),
            instructionObject = this.props.gameinstructions[instruction_index],
            iconClass = 'icon ';

        iconClass += instructionObject.icon;

        return (
            <div className={instructionClasses} key={instruction_index}>
                <div className="number">{instruction_index}</div>
                <div className={iconClass}></div>
                <div className="text">{instructionObject.text}</div>
            </div>
        );
    },
    render: function() {
        return (
            <div className="instructions-panel">
                <h2 className="instruction-title">Instructions</h2>
                {Object.keys(this.props.gameinstructions).map(this.renderInstruction)}
            </div>
        );
    }
});

module.exports = Instructions;