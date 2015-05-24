var React = require('react');
var _ = require('underscore');

var CitiesSelector = React.createClass({
        getInitialState: function() {
            return { activeIndex: 0 }
        },
        clicked: function(index) {
            this.setState({ activeIndex: index });
        },
        renderCity: function(city, index) {
            var cls = (index === this.state.activeIndex) ? "cityButton active" : "cityButton";
            return <li className={cls} onClick={this.clicked.bind(this, index)}>
        <a>{city.name}</a>
    </li>
},
render: function() {
    return <div>
    <h2>Pick a city to see its picture</h2>
    <ul>
    {_.map(this.props.cities, this.renderCity)}
</ul>
<img src={this.props.cities[this.state.activeIndex].img} alt="City image" />
    </div>
}
});

module.exports = CitiesSelector;
