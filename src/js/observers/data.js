'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isObjectArray = require( 'validate.io-object-array' );

// OBSERVER //

/**
* FUNCTION: dataChanged( newVal, oldVal )
*	Event handler invoked when the `data` property changes.
*
* @param {Array[]} newVal - new value
* @param {Array[]} oldVal - old value
*/
function dataChanged( newVal, oldVal ) {
	/* jshint validthis:true */
	var domain,
		err;
	if ( oldVal === void 0 ) {
		return;
	}
	if ( !isObjectArray( newVal ) && !( isArray( newVal ) && !newVal.length ) ) {
		err = new TypeError( 'data::invalid assignment. Data must be an array of objects.' );
		this.fire( 'err', err );
		return;
	}
	// Do we even have any data arrays?
	if ( !newVal.length ) {
		if ( this.$.dots ) {
			this.$.dots.remove();
		}
		return;
	}
	// [0] Update the xDomain:
	domain = this._xDomain( this.xMin, this.xMax );

	// [1] Update the xScale:
	this._xScale.domain( domain );

	// [2] Update the yDomain:
	domain = this._yDomain( this.yMin, this.yMax );

	// [3] Update the yScale:
	this._yScale.domain( domain );

	// [4] Update the alphaDomain:
	domain = this._alphaDomain( this.alphaMin, this.alphaMax );

	// [5] Update the alphaScale
	this._alphaScale.domain( domain );

	if ( this.autoUpdate ) {
		// [6] Update the xAxis:
		this.$.xAxis.call( this._xAxis );

		// [7] Update the yAxis:
		this.$.yAxis.call( this._yAxis );

		/*
		// [8] Update annotations: (TODO: this is not always necessary. Only when updating data such that the xMin and/or xMax changes.)
		this.$.annotationMarkers.attr( 'd', this._triangle );
		this.$.annotationLines.attr( 'd', this._vline );
		*/

		// [9] Create new dots:
		this._resetDots();
	}
	this.fire( 'data', {
		'type': 'change'
	});
	this.fire( 'change', {
		'attr': 'data',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION dataChanged()


// EXPORTS //

module.exports = dataChanged;
