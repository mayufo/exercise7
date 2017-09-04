module.exports = function (str) {
  // TODO
  const match = str.match(/\bx$ /)
  return match ? match[1] : null
}