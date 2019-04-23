const sketch = require('sketch')
const document = sketch.getSelectedDocument()
// initialize the layer array
var layerArray = []

const selectedLayers = document.selectedLayers
const layer = selectedLayers.map( i => i )
// create the variables
var layerName = layer.map( i => i.name )
// var layerFrame = layer.absoluteRect()
var layerXpos = layer.map( i => i.frame.x )
var layerYpos = layer.map( i => i.frame.y )
var layerHeight = layer.map( i => i.frame.height )
var layerWidth = layer.map( i => i.frame.width )

layerArray.push({
  name: layerName,
  xPos: layerXpos,
  yPos: layerYpos,
  height: layerHeight,
  width: layerWidth
})

log(layerArray)