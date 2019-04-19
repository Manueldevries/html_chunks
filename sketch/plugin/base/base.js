// @see doc https://developer.sketch.com/reference/api/#document
const sketch = require('sketch')
var Document = require('sketch/dom').Document
var document = Document.getSelectedDocument()
var selection = document.selectedLayers
// var layers = document.getLayersNamed(name)

console.log(
  selection.forEach(layer => log(layer.name))
)

