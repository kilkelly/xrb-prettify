'use strict';var _units;Object.defineProperty(exports,'__esModule',{value:!0});function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var UNIT_RAW='raw',UNIT_UXRB='uxrb',UNIT_MXRB='mxrb',UNIT_XRB='xrb',UNIT_KXRB='kxrb',UNIT_MXRB_='Mxrb',UNIT_GXRB='Gxrb',units=(_units={},_defineProperty(_units,UNIT_RAW,{places:0}),_defineProperty(_units,UNIT_UXRB,{places:18}),_defineProperty(_units,UNIT_MXRB,{places:21}),_defineProperty(_units,UNIT_XRB,{places:24}),_defineProperty(_units,UNIT_KXRB,{places:27}),_defineProperty(_units,UNIT_MXRB_,{places:30}),_defineProperty(_units,UNIT_GXRB,{places:33}),_units);function formatXrbValue(a,b){var c=b.commas,d=b.decimals,e=b.decimalPlaces,f=b.unit,g=units[f].places,h=a.substring(a.length-g),j=a.substring(0,a.length-h.length),k=[];if(c){for(var l=0,m=j.length-1;0<=m;m--)3==l&&0<=m&&(k.unshift(','),l=0),k.unshift(j[m]),l++;j=k.join('')}return f===UNIT_RAW?j:d?j+'.'+(0===e?h:h.substring(0,e)):j}function xrbPrettify_(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},c=b.unit,d=c===void 0?'Mxrb':c,e=b.commas,f=b.decimals,g=b.decimalPlaces,h=g===void 0?6:g;if('string'!=typeof a)return console.error('xrb-prettify must be supplied with a string. Please check your types.'),'XRB_PRETTIFY_DISPLAY_ERROR';return formatXrbValue(a,{commas:!(e!==void 0)||e,decimals:!(f!==void 0)||f,decimalPlaces:h,unit:d})}exports.default=xrbPrettify_;var xrbPrettify=exports.xrbPrettify=xrbPrettify_;