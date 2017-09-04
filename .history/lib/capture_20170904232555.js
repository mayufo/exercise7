module.exports = function (str) {
  // TODO

  const match = str.match(/x=(\d+)/)
  console.log(match)
  return match ? match[1] : null
}