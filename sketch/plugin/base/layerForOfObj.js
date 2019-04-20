var sketch = require('sketch')

const document = sketch.getSelectedDocument()
const selectedLayers = document.selectedLayers
const layerAry = selectedLayers.map( i => i )
const layerName = layerAry.map( i => i.name )
const layerWidth = layerAry.map( i => i.frame.width )
const layTab = layerName.map( (n,layerWidth) => [n,layerWidth] )

const Layer_obj = function(layTab) {
  this.item = [layTab]
}

const selLayer = new Layer_obj(layTab)
log(selLayer)
// for (const [key, value] of Object.entries(selLayer)) {
//   console.log(key, value) // => 'first', 'John' -- etc.
// }