# xrb-prettify

Format RaiBlocks raw amounts (xrb) to be more human-readable. Adds decimal point and commas where necessary.

e.g. 1002513383 becomes 1,002.513383

## Install
```sh
npm install --save xrb-prettify
```

## Include in scripts

```sh
// require
var xrbPrettify = require('xrb-prettify').xrbPrettify

// require (ES6 version)
const { xrbPrettify } = require('xrb-prettify')

// import
import xrbPrettify from 'xrbPrettify'
```

## Usage Example
```sh
xrbPrettify(1002513383)
// "1,002.513383"
```

## API

### xrbPrettify(xrbValue, config &lt;optional&gt;)

**Parameters**

*xrbValue* (number) - The raw XRB amount, usually returned when performing API calls to a RaiBlocks node.

*config* (object) &lt;optional&gt; - Configuration for the returned result. The configurations are:
* commas (boolean) - Choose whether or not to display commas where necessary e.g. 1,000,000.000000. Default: true
* decimals (boolean) - Choose whether or not to display decimal places. Default: true

#### Examples

Prettify an XRB amount

```sh
xrbPrettify(1002513383)
// Result: "1,002.513383"
// returns a string
```

Prettify an XRB amount without commas

```sh
xrbPrettify(1002513383, { commas: false })
// Result: 1002.513383
// returns a number
```

Prettify an XRB amount without decimal places

```sh
xrbPrettify(1002513383, { decimals: false })
// Result: "1,002"
```

## Tests

```sh
/* run this command inside xrb-prettify's
   node_modules folder */

npm run test
```

## Feedback

Pull requests and opened issues are welcome!

## License

MIT

