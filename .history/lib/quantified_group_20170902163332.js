module.exports = function (str) {
  // TODO
  const match = str.match(/^hex/)
  return match ? match[1] : null
}