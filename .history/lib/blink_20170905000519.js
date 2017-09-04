var marked = require('marked')

module.exports = function (str) {
  var md = marked(str) // markdown 语法变为html
  // TODO
  console.log(md)
  
  return null
}