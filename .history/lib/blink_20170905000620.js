var marked = require('marked')

module.exports = function (str) {
  var md = marked(str) // markdown 语法变为html, 把
  // TODO
  console.log(md)
  return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>')
}