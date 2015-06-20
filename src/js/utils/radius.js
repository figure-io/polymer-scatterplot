'use strict';

/**
* FUNCTION: radius( radiusScale )
*	Wraps a scale and returns a function.
*
* @param {Function} radiusScale - radius-scale
* @returns {Function} function which maps a radius-value to a circle radius
*/
function radius( d ) {
	/* jslint validthis:true */
	var radiusScale = this._radiusScale,
		radiusValue = this.radiusValue;
	return radiusScale( radiusValue( d ) );
} // end FUNCTION radius()


// EXPORTS //

module.exports = radius;
