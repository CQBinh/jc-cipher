import {_} from 'underscore'
const BASE64TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
let KEY
function b64Encode(data) {
  let o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = ''
  if (!data) { return data }
  do {
    o1 = data[i++]
    o2 = data[i++]
    o3 = data[i++]
    bits = o1 << 16 | o2 << 8 | o3
    h1 = bits >> 18 & 0x3f
    h2 = bits >> 12 & 0x3f
    h3 = bits >> 6 & 0x3f
    h4 = bits & 0x3f
    enc += BASE64TABLE.charAt(h1) + BASE64TABLE.charAt(h2) + BASE64TABLE.charAt(h3) + BASE64TABLE.charAt(h4)
  } while (i < data.length)
  r = data.length % 3
  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3)
}

function b64Decode(data) {
  let o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = []
  if (!data) { return data }
  data += ''
  do {
    h1 = BASE64TABLE.indexOf(data.charAt(i++))
    h2 = BASE64TABLE.indexOf(data.charAt(i++))
    h3 = BASE64TABLE.indexOf(data.charAt(i++))
    h4 = BASE64TABLE.indexOf(data.charAt(i++))
    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4
    o1 = bits >> 16 & 0xff
    o2 = bits >> 8 & 0xff
    o3 = bits & 0xff
    result.push(o1)
    if (h3 !== 64) {
      result.push(o2)
      if (h4 !== 64) {
        result.push(o3)
      }
    }
  } while (i < data.length)
  return result
}

function keyCharAt(i) {
  return KEY.charCodeAt( Math.floor(i % KEY.length) )
}

function xorEncrypt(data) {
  return _.map(data, function(c, i) {
    return c.charCodeAt(0) ^ keyCharAt(i)
  })
}

function xorDecrypt(data) {
  return _.map(data, function(c, i) {
    return String.fromCharCode( c ^ keyCharAt(i) )
  }).join('')
}

function encode(data, key) {
  KEY = key
  data = xorEncrypt(data.toString())
  return b64Encode(data)
}

function decode(data, key) {
  KEY = key
  data = b64Decode(data)
  return xorDecrypt(data)
}
// let en = encode(456)
// console.log('encode', en)
// console.log('decode', decode(en))
export default {
  decode,
  encode
}