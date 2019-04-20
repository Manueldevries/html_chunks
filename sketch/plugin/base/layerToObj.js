var sketch = require('sketch')

const document = sketch.getSelectedDocument()
const selectedLayers = document.selectedLayers
const layerAry = selectedLayers.map( i => i )
const layerName = layerAry.map( i => i.name )
const layerWidth = layerAry.map( i => i.frame.width )

const Layer_obj = function(name, width) {
  this.name = name
  this.width = width
}

const selLayer = new Layer_obj(layerName, layerWidth)

log(`${Array.isArray(selLayer)}`)
log(`${selLayer.name} width:${selLayer.width}`)