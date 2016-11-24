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

	'use strict';

	window.ReactSimpleTimePicker = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var DayPicker = React.createClass({
	  displayName: "DayPicker",

	  getInitialState: function getInitialState(e) {
	    return { day: 0 };
	  },

	  onChange: function onChange(e) {

	    var value = e.target.value;

	    if (value >= 0 && value <= this.props.days) {
	      this.setState({ day: e.target.value });

	      this.props.updateDate({ day: value });
	    }
	  },

	  render: function render(e) {
	    return React.createElement("input", { type: "number", name: "day", required: true, className: "form-control", onChange: this.onChange, value: this.state.day });
	  }
	});

	var HourPicker = React.createClass({
	  displayName: "HourPicker",

	  getInitialState: function getInitialState(e) {
	    return { hour: 0 };
	  },

	  onChange: function onChange(e) {

	    var value = e.target.value;

	    if (value >= 0 && value <= 23) {
	      this.setState({ hour: e.target.value });

	      this.props.updateDate({ hour: value });
	    }
	  },

	  render: function render() {
	    return React.createElement("input", { type: "number", name: "hour", required: true, className: "form-control", onChange: this.onChange, value: this.state.hour });
	  }
	});

	var MinutePicker = React.createClass({
	  displayName: "MinutePicker",

	  getInitialState: function getInitialState(e) {
	    return { minute: 0 };
	  },

	  onChange: function onChange(e) {

	    var value = e.target.value;

	    if (value >= 0 && value <= 59) {
	      this.setState({ minute: e.target.value });

	      this.props.updateDate({ minute: value });
	    }
	  },

	  render: function render() {

	    return React.createElement("input", { type: "number", name: "minutes", required: true, className: "form-control", onChange: this.onChange, value: this.state.minute });
	  }
	});

	var SimpleTimePicker = React.createClass({
	  displayName: "SimpleTimePicker",

	  getInitialState: function getInitialState(e) {
	    return { date: new Date() };
	  },

	  updateDate: function updateDate(date) {

	    var day = date.day;
	    var hour = date.hour;
	    var minute = date.minute;

	    if (day > 0) {
	      // if it's a day multiply by 24 * 60
	      day *= 24 * 60;
	      this.onChange(day);
	    }

	    if (hour > 0) {
	      // multiply by 60
	      hour *= 60;
	      this.onChange(hour);
	    }

	    if (minute > 0) {
	      this.onChange(minute);
	    }
	  },

	  onChange: function onChange(time_var) {

	    var now = new Date(this.state.date.getTime() + time_var * 60000 - this.state.date.getTime());

	    this.setState({ date: now });

	    this.props.onChange(now);
	  },

	  render: function render() {

	    return React.createElement(
	      "div",
	      { className: "input-group" },
	      React.createElement(
	        "span",
	        { className: "input-group-addon" },
	        "Day"
	      ),
	      React.createElement(DayPicker, { days: this.props.days, updateDate: this.updateDate }),
	      React.createElement(
	        "span",
	        { className: "input-group-addon" },
	        "Hour"
	      ),
	      React.createElement(HourPicker, { updateDate: this.updateDate }),
	      React.createElement(
	        "span",
	        { className: "input-group-addon" },
	        "Min"
	      ),
	      React.createElement(MinutePicker, { updateDate: this.updateDate })
	    );
	  }
	});

	module.exports = {
	  SimpleTimePicker: SimpleTimePicker
	};

/***/ }
/******/ ]);