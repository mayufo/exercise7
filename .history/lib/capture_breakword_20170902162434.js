module.exports = function (str) {
  // TODO
  const match = str.match(/\b$/)
  return match ? match[1] : null
}