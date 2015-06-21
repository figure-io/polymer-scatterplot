Scatterplot
===
[![NPM version][npm-image]][npm-url] [![Bower version][bower-image]][bower-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> A [Polymer](https://www.polymer-project.org/) web component for displaying scatterplots.

---
1. [Installation](#install)
1. [Usage](#usage)
	-	[Properties](#properties)
		*	[data](#prop-data)
		*	[xValue](#prop-xvalue)
		* 	[yValue](#prop-yvalue)
		*	[alphaValue](#prop-alphavalue)
		*	[alphaMin](#prop-alphamin)
		*	[alphaMax](#prop-alphamax)
		*	[radiusValue](#prop-radiusValue)
		*	[radiusMin](#prop-radiusmin)
		*	[radiusMax](#prop-radiusmax)
		* 	[isDefined](#prop-isdefined)
		*	[config](#prop-config)
		*	[colors](#prop-colors)
		*	[width](#prop-width)
		*	[height](#prop-height)
		*	[paddingLeft](#prop-paddingleft)
		*	[paddingRight](#prop-paddingright)
		*	[paddingTop](#prop-paddingtop)
		*	[paddingBottom](#prop-paddingbottom)
		*	[title](#prop-title)
		*	[xLabel](#prop-xlabel)
		*	[yLabel](#prop-ylabel)
		*	[xMin](#prop-xmin)
		*	[xMax](#prop-xmax)
		*	[yMin](#prop-ymin)
		*	[yMax](#prop-ymax)
		*	[xTickFormat](#prop-xtickformat)
		*	[yTickFormat](#prop-ytickformat)
		*	[xNumTicks](#prop-xnumticks)
		*	[yNumTicks](#prop-ynumticks)
		*	[xAxisOrient](#prop-xaxisorient)
		*	[yAxisOrient](#prop-yaxisorient)
		*	[isDraggable](#prop-isdraggable)
		*	[isDroppable](#prop-isdroppable)
		*	[autoUpdate](#prop-autoupdate)
		*	[autoResize](#prop-autoresize)
		*	[events](#prop-events)
	-	[Methods](#methods)
		*	[clear()](#method-clear)
		*	[stream()](#method-stream)
	-	[Events](#events)
		*	[err](#evt-err)
		*	[change](#evt-change)
		*	[data](#evt-data)
		*	[width](#evt-width)
		*	[height](#evt-height)
		*	[xMin](#evt-xmin)
		*	[xMax](#evt-xmax)
		*	[yMin](#evt-ymin)
		*	[yMax](#evt-ymax)
		*	[resized](#evt-resized)
		*	[clicked](#evt-clicked)
		*	[annotation](#evt-annotation)
		*	[dragStart](#evt-dragstart)
		*	[dragEnd](#evt-dragend)
		*	[dragEnter](#evt-dragenter)
		*	[dragLeave](#evt-dragleave)
		*	[dropped](#evt-dropped)
1. 	[Examples](#examples)
1. 	[Development](#development)
1. 	[Build](#build)
1. 	[Tests](#tests)
	-	[Unit](#unit)
	-	[Coverage](#test-coverage)
1. 	[License](#license)

### Properties

<a name="prop-data"></a>
#### el.data

Chart data. The expected format is an `object array`, where each array element is an `object` with multiple properties.

``` javascript
el.data = [
	{'x': 1, 'y': 0.25 },
	{'x': 2, 'y': 0.23 },
	{'x': 5, 'y': 0.24 },
	{'x': 7, 'y': 0.24 }
];
```

<a name="prop-xvalue"></a>
#### el.xValue

Defines the x-value accessor. The default accessor assumes that the x-values are stored in the `x` property of each datum.

``` javascript
// Default:
el.xValue = function( d ) {
	return d.xi;
};

// Example of custom accessor:
el.xValue = function( d, i ) {
	// assuming each datum has an `age` property
	return d.age;
};
```

<a name="prop-yvalue"></a>
#### el.yValue

Defines the y-value accessor. The default accessor assumes that the y-values are stored in the `y` property of each datum.

``` javascript
// Default:
el.yValue = function( d ) {
	return d.y;
};

// Example of custom accessor:
el.yValue = function( d, i ) {
	// assuming each datum has an `height` property
	return d.height;
};
```

<a name="prop-alphavalue"></a>
#### el.alphaValue

Defines the `alpha` value / `opacity` of each circle. If set to a constant on the interval `[0,1]`, the `opacity` is the same for all circles. If set to a `function`, each alpha-value is mapped to a value on the interval `[0,1]`. The default `opacity` for all circles is `1`.

``` javascript
// Default:
el.alphaValue = 1;

// Example of an object based accessor:
el.alphaValue = function alphaValue( d, i ) {
	// assuming each datum has an `alpha` property
	return d.alpha;
};
```


<a name="prop-alphamin"></a>
#### el.alphaMin

Defines the minimum value of the alpha-domain. Default is `null`.

``` javascript
el.alphaMin = -10;
```

If set to `null`, the `alphaMin` is dynamically calculated from the data. This attribute is only relevant when the alpha-value accessor is a `function`.


<a name="prop-alphamax"></a>
#### el.alphaMax

Defines the maximum value of the z-domain. Default is `null`.

``` javascript
el.alphaMax = 10;
```

<a name="prop-radiusvalue"></a>
#### el.radiusValue

Defines the radius-value accessor. radius-values determine the `radius` of a circle. If set to a constant, the same `radius` is applied to all circles. If set to a `function`, each radius-value is mapped to a value on the interval `[3,20]`. The default `radius` for all cells is `3`.

``` javascript
// Default:
el.radiusValue = 3;

// Example of an object based accessor:
el.radiusValue = function radiusValue( d, i ) {
	// assuming each datum has a `size` property
	return d.size;
};
```


<a name="prop-radiusmin"></a>
#### el.radiusMin

Defines the minimum value of the radius-domain. Default is `null`.

``` javascript
el.zMin = -10;
```

If set to `null`, the `radiusMin` is dynamically calculated from the data. This attribute is only relevant when the radius-value accessor is a `function`.


<a name="prop-radiusmax"></a>
#### el.radiusMax

Defines the maximum value of the radius-domain. Default is `null`.

``` javascript
el.radiusMax = 10;
```

<a name="prop-width"></a>
#### el.width

Chart canvas width. If not explicitly set, defaults to the width of the parent node.

``` javascript
el.width = 600; // px
```


<a name="prop-height"></a>
#### el.height

Chart canvas height. If not explicitly set, defaults to the height of the parent node.

``` javascript
el.height = 400; // px
```


<a name="prop-paddingleft"></a>
#### el.paddingLeft

Chart canvas left padding; i.e., space between the left canvas edge and the left graph edge. Typically needed to create room for a left oriented y-axis. Default is `90` pixels.

``` javascript
el.paddingLeft = 120; // px
```

<a name="prop-paddingright"></a>
#### el.paddingRight

Chart canvas right padding; i.e., space between the right canvas edge and the right graph edge. Typically needed to create room for a right oriented y-axis. Default is `20` pixels.

``` javascript
el.paddingRight = 90; // px
```

<a name="prop-paddingtop"></a>
#### el.paddingTop

Chart canvas top padding; i.e., space between the top canvas edge and the top graph edge. Typically needed to create room for a chart title or top positioned legend. Default is `80` pixels.

``` javascript
el.paddingTop = 200; // px
```

<a name="prop-paddingbottom"></a>
#### el.paddingBottom

Chart canvas bottom padding; i.e., space between the bottom canvas edge and the bottom graph edge. Typically needed to create room for a bottom oriented x-axis or bottom positioned legend. Default is `80` pixels.

``` javascript
el.paddingBottom = 100; // px
```

<a name="prop-title"></a>
#### el.title

Chart title. Default is an empty `string`.

``` javascript
el.chartTitle = 'Awesome chart.';
```

<a name="prop-xlabel"></a>
#### el.xLabel

x-axis label.

``` javascript
el.xLabel = 'age';
```

<a name="prop-ylabel"></a>
#### el.yLabel

y-axis label.

``` javascript
el.yLabel = 'height';
```

<a name="prop-xmin"></a>
#### el.xMin

Defines the minimum value of the x-axis domain. Default is `null`.

``` javascript
el.xMin = new Date() - 186000;
```

If set to `null`, the `xMin` is dynamically calculated from the data.


<a name="prop-xmax"></a>
#### el.xMax

Defines the maximum value of the x-axis domain. Default is `null`.

``` javascript
el.xMax = new Date();
```

If set to `null`, the `xMax` is dynamically calculated from the data.


<a name="prop-ymin"></a>
#### el.yMin

Defines the minimum value of the y-axis domain. Default is `null`.

``` javascript
el.yMin = 0;
```

If set to `null`, the `yMin` is dynamically calculated from the data.


<a name="prop-ymax"></a>
#### el.yMax

Defines the maximum value of the y-axis domain. Default is `null`.

``` javascript
el.yMax = 1;
```

If set to `null`, the `yMax` is dynamically calculated from the data.


<a name="prop-xtickformat"></a>
#### el.xTickFormat

Defines the x-axis [tick format](https://github.com/mbostock/d3/wiki/SVG-Axes#tickFormat).

``` javascript
el.xTickFormat = '%H:%M';
```

<a name="prop-ytickformat"></a>
#### el.yTickFormat

Defines the y-axis [tick format](https://github.com/mbostock/d3/wiki/Formatting).

``` javascript
el.yTickFormat = '%%';
```

<a name="prop-xnumticks"></a>
#### el.xNumTicks

Defines the (suggested) number of x-axis [tick](https://github.com/mbostock/d3/wiki/SVG-Axes#ticks) marks.

``` javascript
el.xNumTicks = 5;
```

 TODO: describe what happens when set to `null`.


<a name="prop-ynumticks"></a>
#### el.yNumTicks

Defines the (suggested) number of y-axis [tick](https://github.com/mbostock/d3/wiki/SVG-Axes#ticks) marks.

``` javascript
el.yNumTicks = 5;
```

TODO: describe what happens when set to `null`.


<a name="prop-xaxisorient"></a>
#### el.xAxisOrient

Defines the x-axis [orientation](https://github.com/mbostock/d3/wiki/SVG-Axes#orient). Default is `bottom`.

``` javascript
el.xAxisOrient = 'top';
```

<a name="prop-yaxisorient"></a>
#### el.yAxisOrient

Defines the y-axis [orientation](https://github.com/mbostock/d3/wiki/SVG-Axes#orient). Default is `left`.

``` javascript
el.yAxisOrient = 'right';
```

<a name="prop-isdraggable"></a>
#### el.isDraggable

Specifies whether chart components (e.g., legend entries) should be [draggable](http://www.html5rocks.com/en/tutorials/dnd/basics/). Default is `true`.

``` javascript
el.isDraggable = false;
```

<a name="prop-isdroppable"></a>
#### el.isDroppable

Specifies whether data can be [dropped](http://www.html5rocks.com/en/tutorials/dnd/basics/) into the chart. Default is `true`.

``` javascript
el.isDroppable = false;
```

<a name="prop-autoupdate"></a>
#### el.autoUpdate

Specifies whether the element should auto update whenever a property changes. Default is `true`.

``` javascript
el.autoUpdate = false;
```

<a name="prop-autoresize"></a>
#### el.autoResize

Specifies whether the element should auto resize when the window resizes. Default is `true`.

``` javascript
el.autoResize = false;
```

<a name="prop-events"></a>
#### el.events

List of [event](#events) names. The `events` property is intended to be __read-only__. One possible use case for the `events` property is for programmatically determining possible events to which you can subscribe; e.g., when logging.

``` javascript
var evts = el.events;
```

### Methods

<a name="method-clear"></a>
#### el.clear()

Clears the chart and resets axes.

``` javascript
el.clear();
```

<a name="method-stream"></a>
#### el.stream( [options] )

Returns a writable chart stream.

``` javascript
var stream = el.stream();
```

TODO: define. Options. Behavior.


### Events

The component emits events during both chart configuration and interaction. The following events are emitted...

<a name="evt-err"></a>
#### 'err'

The element emits an `err` event whenever an error occurs; e.g., improper setting of properties.

``` javascript
el.addEventListener( 'err', function onError( err ) {
	console.log( err );
});
```

__NOTE__: the event name will change to `error` once issue [#138](https://github.com/webcomponents/webcomponentsjs/issues/138) is resolved. The preferred name is `error`.


<a name="evt-change"></a>
#### 'change'

The element emits a `change` event whenever a property changes.

``` javascript
el.addEventListener( 'change', function onChange( evt ) {
	console.log( evt.attr, evt.prev, evt.curr, evt.data );
});
```

<a name="evt-data"></a>
#### 'data'

The element emits a `data` event when the `data` property changes.

``` javascript
el.addEventListener( 'data', function onEvent( evt ) {
	console.log( this.data );
});
```

<a name="evt-width"></a>
#### 'width'

The element emits a `width` event when the `width` property changes.

``` javascript
el.addEventListener( 'width', function onEvent( evt ) {
	console.log( this.width );
});
```

<a name="evt-height"></a>
#### 'height'

The element emits a `height` event when the `height` property changes.

``` javascript
el.addEventListener( 'height', function onEvent( evt ) {
	console.log( this.height );
});
```

<a name="evt-xmin"></a>
#### 'xMin'

The element emits an `xMin` event when the `xMin` property changes.

``` javascript
el.addEventListener( 'xMin', function onEvent( evt ) {
	console.log( this.xMin );
});
```

<a name="evt-xmax"></a>
#### 'xMax'

The element emits an `xMax` event when the `xMax` property changes.

``` javascript
el.addEventListener( 'xMax', function onEvent( evt ) {
	console.log( this.xMax );
});
```

<a name="evt-ymin"></a>
#### 'yMin'

The element emits a `yMin` event when the `yMin` property changes.

``` javascript
el.addEventListener( 'yMin', function onEvent( evt ) {
	console.log( this.yMin );
});
```

<a name="evt-ymax"></a>
#### 'yMax'

The element emits a `yMax` event when the `yMax` property changes.

``` javascript
el.addEventListener( 'yMax', function onEvent( evt ) {
	console.log( this.yMax );
});
```

<a name="evt-resized"></a>
#### 'resized'

The element emits a `resized` event when the element's resize listener is triggered.

``` javascript
el.addEventListener( 'resized', function onResize( evt ) {
	console.log( 'Chart received a resize event.' );
});
```

<a name="evt-clicked"></a>
#### 'clicked'

The element emits a `clicked` event when a chart element having a click handler is clicked.

``` javascript
el.addEventListener( 'clicked', function onClick( evt ) {
	console.log( evt );
});
```

<a name="evt-annotation"></a>
#### 'annotation'

The element emits an `annotation` event when an annotation element is clicked and toggled to an active state.

``` javascript
el.addEventListener( 'annotation', function onClick( evt ) {
	console.log( evt.idx, evt.value );
});
```

__Note__: one use case for this event is linking the chart with an external element whose responsibility is displaying and filtering annotations. While annotation text could be displayed over top the graph, this will invariably be suboptimal within the context of an SVG. A more flexible solution would be to display the annotation text in a separate UI element which is activated when a corresponding SVG element is activated.


<a name="evt-dragstart"></a>
#### 'dragStart'

The element emits a `dragStart` event when a legend entry is dragged.

``` javascript
el.addEventListener( 'dragStart', function onDragStart( evt ) {
	console.log( evt );
});
```

<a name="evt-dragend"></a>
#### 'dragEnd'

The element emits a `dragEnd` event when a legend entry stops being dragged.

``` javascript
el.addEventListener( 'dragEnd', function onDragEnd( evt ) {
	console.log( evt );
});
```

<a name="evt-dragenter"></a>
#### 'dragEnter'

The element emits a `dragEnter` event when a draggable element enters the chart area.

``` javascript
el.addEventListener( 'dragEnter', function onDragEnter( evt ) {
	console.log( evt );
});
```

<a name="evt-dragleave"></a>
#### 'dragLeave'

The element emits a `dragLeave` event when a draggable element leaves the chart area.

``` javascript
el.addEventListener( 'dragLeave', function onDragLeave( evt ) {
	console.log( evt );
});
```

<a name="evt-dropped"></a>
#### 'dropped'

The element emits a `dropped` event when a draggable element is dropped into the chart area.

``` javascript
el.addEventListener( 'dropped', function onDrop( evt ) {
	console.log( evt );
});
```

__Note__: this event is only emitted when `isDroppable` is `true`.

## Examples

To run the example code, navigate to the parent directory and start a [simple python server](https://docs.python.org/2/library/simplehttpserver.html),

``` bash
$ cd ..
$ python -m SimpleHTTPServer 9090
```

Once the server is running, open the following URL in your browser

```
http://127.0.0.1:9090/polymer-timeseries/examples
```


## Development

To install development dependencies,

``` bash
$ make install
```

which installs [node modules](https://www.npmjs.org/) and [bower components](http://bower.io/).

> WARNING: bower components are installed in the parent directory, __not__ the component directory.

By installing components in the parent directory, we mimic a production environment, in which bower components are siblings (needed for correct relative paths). Beware, however, that this may result in conflicts with existing components. Or worse, where existing sibling components are being developed (git repositories), completely overwriting siblings.

To avoid such issues, you may want to clone the repository into its own isolated directory. The downside of this approach is increased disk usage due to (possibly) duplicated dependencies.


## Build

The `src` directory contains the component source files. Source files must be [browserified](https://github.com/substack/node-browserify) and then [vulcanized](https://github.com/polymer/vulcanize) before creating a distributable component. To run the build,

``` bash
$ make build
```

which generates a `build` directory containing [browserified](https://github.com/substack/node-browserify) scripts and a [vulcanized](https://github.com/polymer/vulcanize) distributable in the top-level directory.


## Tests

### Unit

Unit tests are run via [web component tester](https://github.com/Polymer/web-component-tester), which in turn uses the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) to instrument code coverage. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. The [Figure.io](https://github.com/figure-io) Authors.


[npm-image]: http://img.shields.io/npm/v/.svg
[npm-url]: https://npmjs.org/package/

[bower-image]: https://img.shields.io/bower/v/polymer-scatterplot.svg
[bower-url]: https://github.com/figure-io/polymer-scatterplot

[travis-image]: http://img.shields.io/travis/figure-io/polymer-scatterplot/master.svg
[travis-url]: https://travis-ci.org/figure-io/polymer-scatterplot

[coveralls-image]: https://img.shields.io/coveralls/figure-io/polymer-scatterplot/master.svg
[coveralls-url]: https://coveralls.io/r/figure-io/polymer-scatterplot?branch=master

[dependencies-image]: http://img.shields.io/david/figure-io/polymer-scatterplot.svg
[dependencies-url]: https://david-dm.org/figure-io/polymer-scatterplot

[dev-dependencies-image]: http://img.shields.io/david/dev/figure-io/polymer-scatterplot.svg
[dev-dependencies-url]: https://david-dm.org/dev/figure-io/polymer-scatterplot

[github-issues-image]: http://img.shields.io/github/issues/figure-io/polymer-scatterplot.svg
[github-issues-url]: https://github.com/figure-io/polymer-scatterplot/issues
