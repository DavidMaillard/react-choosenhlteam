var React = require('react');

var Selected = React.createClass({
    render: function() {
        return (
            <div className="selected-panel">
                <TeamPanel team={this.props.team} />
                {/*<PlayersPanel players={this.props.team.players} />*/}
            </div>
        );
    }
});

var TeamPanel = React.createClass({
    render: function() {
        return (
            <div className="selected-team-panel">
                <div className="team-logo" style={{ backgroundImage: "url('./app/images/teams/" + this.props.team.logo + "')" }}></div>
                <div className="team-name">{this.props.team.name}</div>
                <div className="team-city">{this.props.team.city}</div>
                <div className="team-rank">{this.props.team.rank}</div>
            </div>
        );
    }
});

var PlayersPanel = React.createClass({
    renderPlayer: function(player_index) {
        var player = this.props.players[player_index];

        return (
            <tr key={player_index}>
                <td className="photo"><img src={player.photo} /></td>
                <td className="name">#{player.number} - {player.firstname}<span>{player.lastname}</span></td>
                <td className="position">{player.position}</td>
            </tr>
        );
    },
    render: function() {
        return (
            <div className="selected-players-panel">
                <table className="selected-player">
                    <tbody>
                        {Object.keys(this.props.players).map(this.renderPlayer)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Selected;