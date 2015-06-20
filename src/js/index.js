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

element._createDots = require( './create/dots.js' );

element._createAxes = require( './create/axes.js' );

element._createTitle = require( './create/title.js' );

// CLEAR //

element.clear = require( './clear' );

// RESET //

element._resetDots = require( './reset/dots.js' );

// element._resetAnnotations = require( './reset/annotations.js' );

// element._resetLegend = require( './reset/legend.js' );


// LISTENERS

element._addListeners = require( './listeners/add.js' );

element._removeListeners = require( './listeners/remove.js' );

// OBSERVERS //

element._dataChanged = require( './observers/data.js' );

element._xValueChanged = require( './observers/xValue.js' );

element._yValueChanged = require( './observers/yValue.js' );

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

element._xNumTicksChanged = require( './observers/xNumTicks.js' );

element._yNumTicksChanged = require( './observers/yNumTicks.js' );

element._xAxisOrientChanged = require( './observers/xAxisOrient.js' );

element._yAxisOrientChanged = require( './observers/yAxisOrient.js' );

element._autoResizeChanged = require( './observers/autoResize.js' );

element._autoUpdateChanged = require( './observers/autoUpdate.js' );

element._radiusChanged = require( './observers/radius.js' );

element._alphaValueChanged = require( './observers/alphaValue.js' );

element._alphaMinChanged = require( './observers/alphaMin.js' );

element._alphaMaxChanged = require( './observers/alphaMax.js' );


// UTILS //

element.formatData = require( './utils/formatData.js' );

/*
element.formatAnnotations = require( './utils/formatAnnotations.js' );
*/

element._graphWidth = require( './utils/graphWidth.js' );

element._graphHeight = require( './utils/graphHeight.js' );

element._xDomain = require( './utils/xDomain.js' );

element._yDomain = require( './utils/yDomain.js' );

element._alphaDomain = require( './utils/alphaDomain.js' );


// EXPORTS //

module.exports = element;
