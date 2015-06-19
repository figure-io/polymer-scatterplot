'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive' );



// OBSERVER //

/**
* FUNCTION: radiusChanged( newVal, oldVal )
*	Event handler invoked when the `radius` property changes.
*
* @param {Number} newVal - new value
* @param {Number} oldVal - old value
*/
function radiusChanged( newVal, oldVal ) {
	/* jshint validthis: true */
	var err;

	if ( oldVal === void 0 ) {
		return;
	}
	if ( !isPositive( newVal ) ) {
		err = new TypeError( 'radius::invalid assignment. Must be a positive number or an . Value: `' + newVal + '`.' );
		this.fire( 'err', err );
		this.radius = oldVal;
		return;
	}

	if ( this.autoUpdate ) {
		// [1] Update the dots:
		this.$.dots.attr( 'r', this.radius );
	}

	this.fire( 'radius', {
		'type': 'change'
	});
	this.fire( 'radius', {
		'attr': 'radius',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION radiusChanged()


// EXPORTS //

module.exports = radiusChanged;
