'use strict';

/**
* FUNCTION: alpha( alphaScale )
*	Wraps a scale and returns a function.
*
* @param {Function} alphaScale - alpha-scale
* @returns {Function} function which maps an alpha-value to an opacity on [0,1]
*/
function alpha( alphaScale ) {
	/**
	* FUNCTION: alpha( d )
	*	Maps an alpha-value to an opacity on [0,1]
	*
	* @param {Array} d - datum
	* @returns {Number} opacity value
	*/
	return function alpha( d ) {
		return alphaScale( d.alpha );
	}; // end FUNCTION alpha()
} // end FUNCTION alpha()


// EXPORTS //

module.exports = alpha;
