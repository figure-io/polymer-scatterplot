'use strict';

/**
* FUNCTION: createDots()
*	Creates graph dot elements.
*
* @returns {Object} context
*/
function createDots() {
	/* jshint validthis:true */

	// Remove any existing marks...
	if ( this.$.marks ) {
		this.$.marks.remove();
	}
	// Create a `marks` group:
	this.$.marks = this.$.graph.append( 'svg:g' )
		.attr( 'property', 'marks' )
		.attr( 'class', 'marks' )
		.attr( 'clip-path', 'url(#' + this._clipPathID + ')' );

	// Add dots:
	this.$.dots = this.$.marks.selectAll('.dot')
		.data( this.data )
		.enter()
		.append('circle')
			.attr('class', 'dot')
			.attr('r', this.radius )
			.attr('cx', this._cx )
			.attr('cy', this._cy );

	return this;
} // end FUNCTION createDots()


// EXPORTS //

module.exports = createDots;
