'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' ),
	isNumber = require( 'validate.io-number-primitive' );

// ALPHA DOMAIN //

/**
* FUNCTION: alphaDomain( min, max )
*	Computes the alpha-domain.
*
* @param {Null|Number} min - minimum value
* @param {Null|Number} max - maximum value
* @returns {Array} domain
*/
function alphaDomain( min, max ) {
	/* jslint validthis:true */
	var d3 = this._d3,
		data = this.data,
		alphaValue = this.alphaValue,
		err;

	if ( !isFunction( alphaValue) ) {
		return [ this.alphaMin, this.alphaMax ];
	}
	if ( min !== null && !isNumber(min) ) {
		err = new TypeError( 'alphaDomain()::invalid input argument. Minimum value must be numeric or `null`. Value: `' + min + '`.' );
		this.fire( 'err', err );
		return;
	}
	if ( max !== null && !isNumber(max) ) {
		err = new TypeError( 'alphaDomain()::invalid input argument. Maximum value must be numeric or `null`. Value: `' + max + '`.' );
		this.fire( 'err', err );
		return;
	}
	if ( min === null ) {
		min = d3.min( data, alphaValue );
	}
	if ( max === null ) {
		max = d3.max( data, alphaValue );
	}
	return [ min, max ];
} // end FUNCTION alphaDomain()


// EXPORTS //

module.exports = alphaDomain;
