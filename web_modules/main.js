var React = require('react');
var CitiesSelector = require('cities');

var cities = [];
React.render(<CitiesSelector {...__APP_DATA} />, document.querySelector('main'));

