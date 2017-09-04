module.exports = function (str) {
  // TODO
  const match = str.match(/^0x(A-F|a-f|\d+)/)
  return match ? match[1] : null
}