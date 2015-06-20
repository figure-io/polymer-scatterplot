'use strict';

/**
* FUNCTION: x( xScale )
*	Wraps a scale and returns a function.
*
* @param {Function} xScale - x-scale
* @returns {Function} function which maps an x-value to a pixel value
*/
function x( d ) {
	/* jslint validthis:true */
	var xScale = this._xScale,
		xValue = this.xValue;
	return xScale( xValue( d ) );
} // end FUNCTION x()


// EXPORTS //

module.exports = x;
