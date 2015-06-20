'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' ),
	isNumber = require( 'validate.io-number-primitive' );

// RADIUS DOMAIN //

/**
* FUNCTION: radiusDomain( min, max )
*	Computes the radius-domain.
*
* @param {Null|Number} min - minimum value
* @param {Null|Number} max - maximum value
* @returns {Array} domain
*/
function radiusDomain( min, max ) {
	/* jslint validthis:true */
	var d3 = this._d3,
		data = this.data,
		radiusValue = this.radiusValue,
		err;

	if ( !isFunction( radiusValue) ) {
		return [ this.radiusMin, this.radiusMax ];
	}
	if ( min !== null && !isNumber(min) ) {
		err = new TypeError( 'radiusDomain()::invalid input argument. Minimum value must be numeric or `null`. Value: `' + min + '`.' );
		this.fire( 'err', err );
		return;
	}
	if ( max !== null && !isNumber(max) ) {
		err = new TypeError( 'radiusDomain()::invalid input argument. Maximum value must be numeric or `null`. Value: `' + max + '`.' );
		this.fire( 'err', err );
		return;
	}
	if ( min === null ) {
		min = d3.min( data, radiusValue );
	}
	if ( max === null ) {
		max = d3.max( data, radiusValue );
	}
	return [ min, max ];
} // end FUNCTION radiusDomain()


// EXPORTS //

module.exports = radiusDomain;
