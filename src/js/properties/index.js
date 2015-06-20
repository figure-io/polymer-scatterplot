'use strict';

// MODULES //

var EVENTS = require( './../events' ),
	xValue = require( './../utils/xValue.js' ),
	yValue = require( './../utils/yValue.js' );

// PROPERTIES //

var props = {};

/**
* Chart data.
*
* @type {Array}
* @default []
*/
props.data = {
	'observer': '_dataChanged',
	'type': Array,
	'value': function data() {
		return [];
	}
};

/**
* x-value accessor.
*
* @type {Function}
*/
props.xValue = {
	'observer': '_xValueChanged',
	'type': Function,
	'value': function getFcn() {
		return xValue;
	}
};

/**
* y-value accessor.
*
* @type {Function}
*/
props.yValue = {
	'observer': '_yValueChanged',
	'type': Function,
	'value': function getFcn() {
		return yValue;
	}
};

/**
* Chart canvas width. If not explicitly set, defaults to the width of the parent node.
*
* @type {Number}
* @default null
*/
props.width = {
	'observer': '_widthChanged',
	'type': Number,
	'value': null
};

/**
* Chart canvas height. If not explicitly set, defaults to the height of the parent node.
*
* @type {Number}
* @default null
*/
props.height = {
	'observer': '_heightChanged',
	'type': Number,
	'value': null
};

/**
* Chart canvas left padding.
*
* @type {Number}
* @default 90px
*/
props.paddingLeft = {
	'observer': '_paddingLeftChanged',
	'type': Number,
	'value': 90
};

/**
* Chart canvas right padding.
*
* @type {Number}
* @default 20px
*/
props.paddingRight = {
	'observer': '_paddingRightChanged',
	'type': Number,
	'value': 20
};

/**
* Chart canvas top padding.
*
* @type {Number}
* @default 80px
*/
props.paddingTop = {
	'observer': '_paddingTopChanged',
	'type': Number,
	'value': 80
};

/**
* Chart canvas bottom padding.
*
* @type {Number}
* @default 80px
*/
props.paddingBottom = {
	'observer': '_paddingBottomChanged',
	'type': Number,
	'value': 80
};

/**
* Chart title.
*
* @type {String}
* @default ''
*/
props.title = {
	'observer': '_titleChanged',
	'type': String,
	'value': ''
};

/**
* x-axis label.
*
* @type {String}
* @default 'time'
*/
props.xLabel = {
	'observer': '_xLabelChanged',
	'type': String,
	'value': 'x'
};

/**
* y-axis label.
*
* @type {String}
* @default 'y'
*/
props.yLabel = {
	'observer': '_yLabelChanged',
	'type': String,
	'value': 'y'
};

/**
* x-limit minimum value. If `null`, the limit is computed from the data.
*
* @type {Null|Number}
* @default null
*/
props.xMin = {
	'observer': '_xMinChanged',
	'type': Number,
	'value': null
};

/**
* x-limit maximum value. If `null`, the limit is computed from the data.
*
* @type {Null|Number}
* @default null
*/
props.xMax = {
	'observer': '_xMaxChanged',
	'type': Number,
	'value': null
};

/**
* y-limit minimum value. If `null`, the limit is computed from the data.
*
* @type {Null|Number}
* @default null
*/
props.yMin = {
	'observer': '_yMinChanged',
	'type': Number,
	'value': null
};

/**
* y-limit maximum value. If `null`, the limit is computed from the data.
*
* @type {Null|Number}
* @default null
*/
props.yMax = {
	'observer': '_yMaxChanged',
	'type': Number,
	'value': null
};

/**
* Number of tick marks on the x-axis. See [D3 documentation]{@link https://github.com/mbostock/d3/wiki/SVG-Axes#ticks}.
*
* @type {Number|Null}
* @default null
*/
props.xNumTicks = {
	'observer': '_xNumTicksChanged',
	'type': Number,
	'value': null
};

/**
* Number of tick marks on the y-axis. See [D3 documentation]{@link https://github.com/mbostock/d3/wiki/SVG-Axes#ticks}.
*
* @type {Number|Null}
* @default null
*/
props.yNumTicks = {
	'observer': '_yNumTicksChanged',
	'type': Number,
	'value': null
};

/**
* x-axis orientation. See [D3 documentation]{@link https://github.com/mbostock/d3/wiki/SVG-Axes#orient}.
*
* @type {String}
* @default 'bottom'
*/
props.xAxisOrient = {
	'observer': '_xAxisOrientChanged',
	'type': String,
	'value': 'bottom'
};

/**
* y-axis orientation. See [D3 documentation]{@link https://github.com/mbostock/d3/wiki/SVG-Axes#orient}.
*
* @type {String}
* @default 'left'
*/
props.yAxisOrient = {
	'observer': '_yAxisOrientChanged',
	'type': String,
	'value': 'left'
};

/**
* Boolean flag indicating whether a chart should auto update DOM elements whenever an attribute changes.
*
* @type {Boolean}
* @default true
*/
props.autoUpdate = {
	'observer': '_autoUpdateChanged',
	'type': Boolean,
	'value': true
};

/**
* Boolean flag indicating whether a chart should auto resize when the window resizes.
*
* @type {Boolean}
* @default true
*/
props.autoResize = {
	'observer': '_autoResizeChanged',
	'type': Boolean,
	'value': true
};

/**
* Public event names.
*
* @type {String[]}
*/
props.events = {
	'readOnly': true,
	'value': function events() {
		return EVENTS.slice();
	}
};

/**
* Radii for plotted points
*
* @type {Number|Number[]}
*/
props.radius = {
	'observer': '_radiusChanged',
	'value': 3
};

/**
* Color(s) for plotted points
*
* @type {Number|Number[]}
*/
props.colors = {
	'observer': '_colorsChanged',
	'value': 'category10'
};

/**
* Alpha values (opacity) for plotted points
*
* @type {Number|Number[]}
*/
props.alphaValue = {
	'observer': '_alphaValueChanged',
	'value': 1
};

/**
* alpha-limit minimum value. If `null`, the limit is computed from the data.
*
* @type {Null|Number}
* @default null
*/
props.alphaMin = {
	'observer': '_alphaMinChanged',
	'type': Number,
	'value': null
};

/**
* x-limit maximum value. If `null`, the limit is computed from the data.
*
* @type {Null|Number}
* @default null
*/
props.alphaMax = {
	'observer': '_alphaMaxChanged',
	'type': Number,
	'value': null
};




// EXPORTS //

module.exports = props;
