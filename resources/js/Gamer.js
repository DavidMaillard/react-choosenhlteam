var React = require('react');

var Regions = require('./Regions');
var Instructions = require('./Instructions');
var Teams = require('./Teams');
var Selected = require('./Selected');

var Gamer = React.createClass({
    getInitialState: function() {
        return {
            'conference': null,
            'team': false,
            'instruction': 1,
            'teams': {}
        };
    },
    random: function (obj) {
        var result;
        var count = 0;
        for (var prop in obj)
            if (Math.random() < 1/++count)
                result = prop;
        return result;
    },
    chooseRegion: function(region_index) {
        var teams = this.props.conferences[region_index].teams;
        // Select two random teams
        var team1 = this.random(teams),
            team2 = this.random(teams);

        while ( team1 == team2 ) {
            team2 = this.random(teams);
        }

        this.setState({
            'conference': region_index,
            'instruction': 2,
            'teams': {
                'left': team1,
                'right': team2
            }
        });

    },
    chooseTeam: function(team) {
        this.setState({
            'team': team,
            'instruction': 4
        });
    },
    render: function() {
        var classes = 'gamer ' + this.props.gamer,
            number = this.props.gamer == 'left' ? 1 : 2;

        if ( this.state.team ) {
            var selected = <Selected team={this.props.conferences[this.state.conference].teams[this.state.team]} />;
        } else {
            var selected = false;
        }

        return (
            <div className={classes}>
                <h1 className="title">Player {number}</h1>

                <div className="teams-panel">
                    <div className="loader">Please wait a moment...</div>

                    <Teams teams={this.state.teams} gamer={this.props.gamer} chooseTeam={this.chooseTeam} conference={this.props.conferences[this.state.conference]} />
                    <Regions conferences={this.props.conferences} chooseRegion={this.chooseRegion} />
                </div>

                <Instructions instruction={this.state.instruction} gameinstructions={this.props.gameinstructions} />

                {selected}
            </div>
        );
    },
    componentDidUpdate: function() {
        var _gamer = $('.gamer.' + this.props.gamer);

        console.log( this.state.instruction );

        if ( this.state.instruction == 2 ) {

            var _regions = _gamer.find('.regions-panel');

            // Displays
            _gamer.addClass('loading');
            _regions.fadeOut(400);
        } else if ( this.state.instruction == 4 ) {

            var _selected = _gamer.find('.selected-panel');

            setTimeout(function() {
                _selected.addClass('active');
            },10);
        }
    }
});

module.exports = Gamer;