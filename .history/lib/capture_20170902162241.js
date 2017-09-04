module.exports = function (str) {
  // TODO

  const match = str.match(/x=(\d+)/)
  return match ? match[1]: null
}