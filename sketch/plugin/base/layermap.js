console.log('This is an example Sketch script.')

var sketch = require('sketch')

const document = sketch.getSelectedDocument()
const selectedLayers = document.selectedLayers
const selectedCount = selectedLayers.length
const  doc = context.document
const layerAry = selectedLayers.map( i => i )
const layerName_Width = layerAry.map( i => i.name +' w:'+ i.frame.width )

log(`${Array.isArray(layerName_Width)}`)