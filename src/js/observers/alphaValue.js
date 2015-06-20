'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' ),
	isFunction = require( 'validate.io-function' );


// OBSERVER //

/**
* FUNCTION: alphaValueChanged( newVal, oldVal )
*	Event handler invoked when the `alphaValue` property changes.
*
* @param {Number} newVal - new value
* @param {Number} oldVal - old value
*/
function alphaValueChanged( newVal, oldVal ) {
	/* jshint validthis: true */
	var err;

	if ( oldVal === void 0 ) {
		return;
	}
	if ( !isFunction( newVal ) && ( !isNumber( newVal) || newVal < 0 || newVal > 1) ) {
		err = new TypeError( 'alphaValue::invalid assignment. Must be a positive number on the interval [0, 1]. Value: `' + newVal + '`.' );
		this.fire( 'err', err );
		this.alpha = oldVal;
		return;
	}

	if ( isFunction( newVal ) ) {
			this._alphaScale.domain( this._alphaDomain( this.alphaMin, this.alphaMax ) );
	}
	if ( this.autoUpdate ) {
		// [1] Update the dots:
		this.$.dots.style( 'opacity', this._alpha );
	}

	this.fire( 'alphaValue', {
		'type': 'change'
	});
	this.fire( 'alphaValue', {
		'attr': 'alphaValue',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION alphaValueChanged()


// EXPORTS //

module.exports = alphaValueChanged;
