'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive' ),
	isFunction = require( 'validate.io-function' );

// OBSERVER //

/**
* FUNCTION: radiusValueChanged( newVal, oldVal )
*	Event handler invoked when the `radiusValue` property changes.
*
* @param {Number} newVal - new value
* @param {Number} oldVal - old value
*/
function radiusValueChanged( newVal, oldVal ) {
	/* jshint validthis: true */
	var err;

	if ( oldVal === void 0 ) {
		return;
	}
	if ( !isFunction( newVal ) && !isPositive( newVal) )  {
		err = new TypeError( 'radiusValue::invalid assignment. Must be a positive number or accessor function. Value: `' + newVal + '`.' );
		this.fire( 'err', err );
		this.alpha = oldVal;
		return;
	}

	if ( isFunction( newVal ) ) {
			this._radiusScale.domain( this._radiusDomain( this.radiusMin, this.radiusMax ) );
	}
	if ( this.autoUpdate ) {
		// [1] Update the dots:
		this.$.dots.attr( 'r', this._radius );
	}

	this.fire( 'radiusValue', {
		'type': 'change'
	});
	this.fire( 'radiusValue', {
		'attr': 'radiusValue',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION radiusValueChanged()


// EXPORTS //

module.exports = radiusValueChanged;
