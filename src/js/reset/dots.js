'use strict';

/**
* FUNCTION: resetDots()
*	Resets graph dot elements.
*
* @returns {Object} context
*/
function resetDots() {
	/* jshint validthis:true */
	var dots;

	// Bind the data and update existing dots:
	dots = this.$.marks.selectAll( '.dot' )
		.data( this.data )
		.attr( 'cx', this._cx )
		.attr( 'cy', this._cy )
		.style( 'opacity', this._alpha );

	// Remove any old dots:
	dots.exit().remove();

	// Add any new dots:
	dots.enter().append( 'circle' )
		.attr( 'class', 'dot' )
		.attr( 'r', this._radius )
		.attr( 'cx', this._cx )
		.attr( 'cy', this._cy )
		.style( 'opacity', this._alpha );

	// Cache a reference to the dots:
	this.$.dots = dots;

	return this;
} // end FUNCTION resetDots()


// EXPORTS //

module.exports = resetDots;
