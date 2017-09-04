module.exports = function (str) {
  // TODO
  const match = str.match(/^0x[]/)
  return match ? match[1] : null
}