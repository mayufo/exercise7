module.exports = function (str) {
  // TODO
  const match = str.match(/^0x[A]/)
  return match ? match[1] : null
}