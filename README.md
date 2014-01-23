# responsive-iframe

Add some responsive qualities to iframe elements.

## Getting Started
### On the server
Install the module with: `npm install responsive-iframe`

```javascript
var responsive_iframe = require('responsive-iframe');
responsive_iframe.awesome(); // "awesome"
```

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jack/responsive-iframe/master/dist/responsive-iframe.min.js
[max]: https://raw.github.com/jack/responsive-iframe/master/dist/responsive-iframe.js

In your web page:

```html
<script src="dist/responsive-iframe.min.js"></script>
<script>
awesome(); // "awesome"
</script>
```

In your code, you can attach responsive-iframe's methods to any object.

```html
<script>
var exports = Bocoup.utils;
</script>
<script src="dist/responsive-iframe.min.js"></script>
<script>
Bocoup.utils.awesome(); // "awesome"
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Jack Bishop  
Licensed under the MIT license.
