'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );

// RADIUS //

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
	return isFunction( radiusValue) ? radiusScale( radiusValue( d ) ) : radiusValue;
} // end FUNCTION radius()


// EXPORTS //

module.exports = radius;
