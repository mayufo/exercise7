var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  console.log(md)
  return null
}