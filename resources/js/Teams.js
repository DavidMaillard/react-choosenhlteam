var React = require('react');

var Teams = React.createClass({
    renderTeam: function(team_index) {
        var team = this.props.teams[team_index];
        return <Team key={team} index={team} chooseTeam={this.props.chooseTeam} conference={this.props.conference} />;
    },
    render: function() {
        return (
            <div className="teams-display">
                {Object.keys(this.props.teams).map(this.renderTeam)}
            </div>
        );
    },
    componentDidUpdate() {
        if ( Object.keys(this.props.teams).length > 0 ) {

            var _gamer = $('.gamer.' + this.props.gamer),
                _teams = _gamer.find('.team');

            setTimeout(function() {

                _gamer.removeClass('loading');

                _teams.each(function(index) {

                    var _team = $(this);

                    setTimeout(function() {

                        _team.fadeIn(800);
                    },parseInt( index * 200 ))
                });
            },1000)
        }
    }
});

var Team = React.createClass({
    handleClick: function() {
        this.props.chooseTeam(this.props.index);
    },
    render: function() {
        var team = this.props.conference.teams[this.props.index];
        return (
            <div className="team" onClick={this.handleClick}>
                <div className="logo" style={{ backgroundImage: "url('./app/images/teams/" + team.logo + "')" }}></div>
                <h3 className="team-name">{ team.name }</h3>
                <div className="team-city">{ team.city }</div>
            </div>
        );
    }
});

module.exports = Teams;