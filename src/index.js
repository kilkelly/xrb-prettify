'use strict'

const UNIT_RAW = 'raw'
const UNIT_UXRB = 'uxrb'
const UNIT_MXRB = 'mxrb'
const UNIT_XRB = 'xrb'
const UNIT_KXRB = 'kxrb'
const UNIT_MXRB_ = 'Mxrb'
const UNIT_GXRB = 'Gxrb'

const units = {
  [UNIT_RAW]: {
    places: 0
  },
  [UNIT_UXRB]: {
    places: 18
  },
  [UNIT_MXRB]: {
    places: 21
  },
  [UNIT_XRB]: {
    places: 24
  },
  [UNIT_KXRB]: {
    places: 27
  },
  [UNIT_MXRB_]: {
    places: 30
  },
  [UNIT_GXRB]: {
    places: 33
  }
}

// ---------------------------------------------------

function formatXrbValue (xrbValue,
  {
    commas,
    decimals,
    decimalPlaces,
    unit
  }) {
  let unitPlaces = units[unit].places
  let fractionalPartOfXrbValue = xrbValue.substring(xrbValue.length - unitPlaces)  
  let integerPartOfXrbValue = xrbValue.substring(0, xrbValue.length - fractionalPartOfXrbValue.length)
  let integerPartOfXrbValueWithCommas = []

  if (commas) {
    let commasInsertTrigger = 0 // when equal to 3 then this is the trigger to insert a comma

    for (let i = integerPartOfXrbValue.length - 1; i >= 0; i--) {
      // Comma insert has been triggered and we are not at the beginning of the integer part
      if (commasInsertTrigger === 3 && i >= 0) {
        integerPartOfXrbValueWithCommas.unshift(',')
        commasInsertTrigger = 0
      }

      integerPartOfXrbValueWithCommas.unshift(integerPartOfXrbValue[i])
      commasInsertTrigger++
    }

    integerPartOfXrbValue = integerPartOfXrbValueWithCommas.join('')
  }

  if (unit === UNIT_RAW) {
    return integerPartOfXrbValue
  } else {
    if (decimals) {
      return integerPartOfXrbValue + '.' + (decimalPlaces === 0 ? fractionalPartOfXrbValue : fractionalPartOfXrbValue.substring(0, decimalPlaces))
    } else {
      return integerPartOfXrbValue
    }
  }
}

// ---------------------------------------------------

function xrbPrettify_ (
  raw,
  {
    unit = 'Mxrb',
    commas = true, // include commas? e.g. '4,002.513383'
    decimals = true, // include decimal places? e.g. 4002.513383
    decimalPlaces = 6
  } = {}
) {
  // Check that the raw value we are working with is a string
  if (typeof raw !== 'string') {
    console.error('xrb-prettify must be supplied with a string. Please check your types.')
    return 'XRB_PRETTIFY_DISPLAY_ERROR'
  }

  // let importantRawDigits = extractImportantDigitsFromRaw(raw)
  let importantRawDigits = raw
  // let rawXrbValueInProcess = formatXrbValueWithDecimalPoint(importantRawDigits, unit)
  let rawXrbValueInProcess = importantRawDigits

  return formatXrbValue(rawXrbValueInProcess, {
    commas,
    decimals,
    decimalPlaces,
    unit
  })
}

// ---------------------------------------------------

export default xrbPrettify_
export const xrbPrettify = xrbPrettify_
