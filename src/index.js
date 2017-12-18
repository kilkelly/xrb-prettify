'use strict'

import BigNumber from 'bignumber.js'
import numeral from 'numeral'

// ---------------------------------------------------

function formatXrbValueWithDecimalPoint (xrbValue) {
  return new BigNumber(xrbValue || 0).dividedBy(new BigNumber(10).pow(6)).toFixed()
}

// ---------------------------------------------------

const formatXrbValueWithCommas = function (xrbValue) {
  return numeral(xrbValue).format('0,0.[00000000000]')
}

// ---------------------------------------------------

function xrbPrettify_ (
  rawXrbValue,
  {
    commas = true, // include commas? e.g. '4,002.513383'
    decimals = true // include decimal places? e.g. 4002.513383
  } = {}
) {
  let rawXrbValueInProcess = formatXrbValueWithDecimalPoint(rawXrbValue)

  // Don't show decimal places
  if (!decimals) {
    rawXrbValueInProcess = Math.floor(rawXrbValueInProcess)
  }

  // Include commas in the value (outputs a string)
  if (commas) {
    return formatXrbValueWithCommas(rawXrbValueInProcess)
  } else { // No commas in the value
    return parseFloat(rawXrbValueInProcess)
  }
}

// ---------------------------------------------------

export default xrbPrettify_
export const xrbPrettify = xrbPrettify_
