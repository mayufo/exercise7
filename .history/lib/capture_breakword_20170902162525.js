module.exports = function (str) {
  // TODO
  const match = str.match(/\bx$=(\d)/)
  return match ? match[1] : null
}