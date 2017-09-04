var marked = require('marked')

module.exports = function (str) {
  var md = marked(str) // mar
  // TODO
  console.log(md)
  return null
}