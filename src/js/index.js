'use strict';

// ELEMENT //

var element = {};


// NAME //

element.is = require( './name' );

// PROPERTIES //

element.properties = require( './properties' );

// LIFECYCLE //

element.created = require( './lifecycle/created.js' );

element.ready = require( './lifecycle/ready.js' );

element.attached = require( './lifecycle/attached.js' );

element.detached = require( './lifecycle/detached.js' );

// INIT //

element._init = require( './init' );

// CHART CREATION //

element._create = require( './create' );

element._createBase = require( './create/base.js' );

element._createBackground = require( './create/background.js' );

element._createAxes = require( './create/axes.js' );

element._createTitle = require( './create/title.js' );

// LISTENERS

element._addListeners = require( './listeners/add.js' );

element._removeListeners = require( './listeners/remove.js' );

// OBSERVERS //

element._widthChanged = require( './observers/width.js' );

element._heightChanged = require( './observers/height.js' );

element._paddingLeftChanged = require( './observers/paddingLeft.js' );

element._paddingRightChanged = require( './observers/paddingRight.js' );

element._paddingTopChanged = require( './observers/paddingTop.js' );

element._paddingBottomChanged = require( './observers/paddingBottom.js' );

element._titleChanged = require( './observers/title.js' );

element._xLabelChanged = require( './observers/xLabel.js' );

element._yLabelChanged = require( './observers/yLabel.js' );

element._xMinChanged = require( './observers/xMin.js' );

element._xMaxChanged = require( './observers/xMax.js' );

element._yMinChanged = require( './observers/yMin.js' );

element._yMaxChanged = require( './observers/yMax.js' );

// UTILS //

/*
element.formatData = require( './utils/formatData.js' );

element.formatAnnotations = require( './utils/formatAnnotations.js' );
*/

element._graphWidth = require( './utils/graphWidth.js' );

element._graphHeight = require( './utils/graphHeight.js' );

element._xDomain = require( './utils/xDomain.js' );

element._yDomain = require( './utils/yDomain.js' );


// EXPORTS //

module.exports = element;
