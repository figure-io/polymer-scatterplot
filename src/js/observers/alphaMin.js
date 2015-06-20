'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' ),
	isFunction = require( 'validate.io-function' );


// OBSERVER //

/**
* FUNCTION: alphaMinChanged( oldVal, newVal )
*	Event handler for changes to a minimum alpha-value.
*
* @param {Null|Number} oldVal - old value
* @param {Null|Number} newVal - new value
*/
function alphaMinChanged( oldVal, newVal ) {
	/* jslint validthis:true */
	var alphaScale = this._alphaScale,
		domain,
		err;

	if ( oldVal === void 0 ) {
		return;
	}

	if ( newVal !== null && !isNumber( newVal ) ) {
		err = new TypeError( 'alphaMin::invalid assignment. Must be a numeric or `null`. Value: `' + newVal + '`.' );
		this.fire( 'err', err );
		this.alphaMin = oldVal;
		return;
	}

	// [0] Update the domain:
	domain = alphaScale.domain();
	domain = this._alphaDomain( newVal, domain[1] );

	alphaScale.domain( domain );

	if ( this.autoUpdate ) {
		this.$.dots.style( 'opacity', isFunction( this.alphaValue ) ? this._alpha : this.alphaValue );
	}
	this.fire( 'alphaMin', {
		'type': 'change'
	});
	this.fire( 'change', {
		'attr': 'alphaMin',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION alphaMinChanged()


// EXPORTS //

module.exports = alphaMinChanged;
