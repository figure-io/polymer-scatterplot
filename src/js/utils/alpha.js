'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );

// ALPHA //

/**
* FUNCTION: alpha( alphaScale )
*	Wraps a scale and returns a function.
*
* @param {Function} alphaScale - alpha-scale
* @returns {Function} function which maps an alpha-value to an opacity on [0,1]
*/
function alpha( d ) {
	/* jslint validthis:true */
	var alphaValue = this.alphaValue,
		alphaScale = this._alphaScale;
	return isFunction( alphaValue) ? alphaScale( alphaValue( d ) ) : alphaValue;
} // end FUNCTION alpha()


// EXPORTS //

module.exports = alpha;
