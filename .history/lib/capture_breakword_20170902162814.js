module.exports = function (str) {
  // TODO
  const match = str.match(/\b^x$=(\d+)/)
  console.log(match)
  return match ? match[1] : null
}