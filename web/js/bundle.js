/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var CitiesSelector = __webpack_require__(2);

	var cities = [];
	React.render(React.createElement(CitiesSelector, React.__spread({},  __APP_DATA)), document.querySelector('main'));



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var _ = __webpack_require__(3);

	var CitiesSelector = React.createClass({displayName: "CitiesSelector",
	        getInitialState: function() {
	            return { activeIndex: 0 }
	        },
	        clicked: function(index) {
	            this.setState({ activeIndex: index });
	        },
	        renderCity: function(city, index) {
	            var cls = (index === this.state.activeIndex) ? "cityButton active" : "cityButton";
	            return React.createElement("li", {className: cls, onClick: this.clicked.bind(this, index)}, 
	        React.createElement("a", null, city.name)
	    )
	},
	render: function() {
	    return React.createElement("div", null, 
	    React.createElement("h2", null, "Pick a city to see its picture"), 
	    React.createElement("ul", null, 
	    _.map(this.props.cities, this.renderCity)
	), 
	React.createElement("img", {src: this.props.cities[this.state.activeIndex].img, alt: "City image"})
	    )
	}
	});

	module.exports = CitiesSelector;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = _;

/***/ }
/******/ ]);