module.exports = function (str) {
  // TODO
  const match = str.match(/^0x[A-F|a-f|]/)
  return match ? match[1] : null
}