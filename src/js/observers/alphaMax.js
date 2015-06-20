'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' ),
	isFunction = require( 'validate.io-function' );


// OBSERVER //

/**
* FUNCTION: alphaMaxChanged( oldVal, newVal )
*	Event handler for changes to a maximum alpha-value.
*
* @param {Null|Number} oldVal - old value
* @param {Null|Number} newVal - new value
*/
function alphaMaxChanged( oldVal, newVal ) {
	/* jslint validthis:true */
	var alphaScale = this._alphaScale,
		domain,
		err;

	if ( oldVal === void 0 ) {
		return;
	}

	if ( newVal !== null && !isNumber( newVal ) ) {
		err = new TypeError( 'alphaMax::invalid assignment. Must be a numeric or `null`. Value: `' + newVal + '`.' );
		this.fire( 'err', err );
		this.alphaMax = oldVal;
		return;
	}

	// [0] Update the domain:
	domain = alphaScale.domain();
	domain = this._alphaDomain( domain[ 0 ], newVal );

	alphaScale.domain( domain );

	if ( this.autoUpdate ) {
		this.$.dots.style( 'opacity', this._alpha );
	}
	this.fire( 'alphaMax', {
		'type': 'change'
	});
	this.fire( 'change', {
		'attr': 'alphaMax',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION alphaMaxChanged()


// EXPORTS //

module.exports = alphaMaxChanged;
