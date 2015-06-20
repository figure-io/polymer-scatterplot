'use strict';

/**
* FUNCTION: y( yScale )
*	Wraps a scale and returns a function.
*
* @param {Function} yScale - y-scale
* @returns {Function} function which maps a y-value to a pixel value
*/
function y( d ) {
	/* jslint validthis:true */
	var yScale = this._yScale,
		yValue = this.yValue;
	return yScale( yValue( d ) );
} // end FUNCTION y()


// EXPORTS //

module.exports = y;
