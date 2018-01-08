# xrb-prettify

Prettify / Format RaiBlocks (XRB) Raw amounts to be more human-readable. Adds decimal point and commas where necessary. Raw amounts are commonly returned when interacting with a RaiBlocks node (rai_node)

e.g. "2100176034320859259343606608761791" becomes "2,100.176034"

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
xrbPrettify("2100176034320859259343606608761791")
// "2,100.176034"
```

## Note

**xrb-prettify** works with strings only. If you need to deal with numbers you can try converting returned results to a numeric format using parseInt or parseFloat where applicable. 

## API

### xrbPrettify(raw, config &lt;optional&gt;)

**Parameters**

**raw** *(number)* - The Raw amount, returned when performing API calls to a RaiBlocks node (rai_node).

**config** *(object)* &lt;optional&gt; - Configuration for the returned result. The configurations are:
* **unit** *(Possible values: 'raw', 'uxrb', 'mxrb', 'xrb', 'kxrb', 'Mxrb', 'Gxrb')* - Specify which RaiBlocks unit is used to prettify the Raw amount. Default unit is 'Mxrb'.
* **commas** *(boolean)* - Choose whether or not to display commas where necessary e.g. "1,000,000.000000". Default: true
* **decimals** *(boolean)* - Choose whether or not to display decimal places. Default: true
* **decimalPlaces** *(number)* - Number of decimal places to display. Default is 6. Enter 0 to show all decimal places.

#### Examples

Prettify a Raw amount

```sh
xrbPrettify("2100176034320859259343606608761791")
// Result: "2,100.176034"
```

Prettify a Raw amount using the 'xrb' unit (overridiing the default unit 'Mxrb')

```sh
xrbPrettify("2100176034320859259343606608761791", { unit: 'xrb' })
// Result: "2,100,176,034.320859"
```

Prettify a Raw amount without commas

```sh
xrbPrettify("2100176034320859259343606608761791", { commas: false })
// Result: "2100.176034"
```

Prettify a Raw amount without decimal places

```sh
xrbPrettify("2100176034320859259343606608761791", { decimals: false })
// Result: "2,100"
```

Prettify a Raw amount with 10 decimal places (overridiing the default of 6 decimal places)

```sh
xrbPrettify("2100176034320859259343606608761791", { decimalPlaces: 10 })
// Result: "2,100.1760343208"
```

Prettify a Raw amount using a combination of configurations

```sh
xrbPrettify("2100176034320859259343606608761791", 
  {
    commas: false,
    decimals: true,
    unit: 'xrb',
    decimalPlaces: 10
  }
)
// Result: "2100176034.3208592593"
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

