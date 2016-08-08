var React = require('react');

var Regions = React.createClass({
    renderRegion: function(region_index) {
        return <Region key={region_index} conferences={this.props.conferences} regionkey={region_index} chooseRegion={this.props.chooseRegion} />;
    },
    render: function() {
        return (
            <div className="regions-panel">
                {Object.keys(this.props.conferences).map(this.renderRegion)}
                <div className="region-instruction">Select a region</div>
            </div>
        );
    }
});

var Region = React.createClass({
    handleClick: function() {
        this.props.chooseRegion(this.props.regionkey);
    },
    render: function() {
        var logo = this.props.conferences[this.props.regionkey].logo,
            regionClass = 'region-button ';
        regionClass += this.props.regionkey == 'western' ? 'left' : 'right';

        return <div className={regionClass} style={{ backgroundImage: 'url("./app/images/'+logo+'")' }} onClick={this.handleClick}></div>;
    }
});

module.exports = Regions;