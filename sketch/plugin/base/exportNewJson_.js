const sketch = require('sketch')
const document = sketch.getSelectedDocument()
// initialize the layer array
const layerArray = []

const selectedLayers = document.selectedLayers
const layer = selectedLayers.map( i => i )

layer.forEach(item => {
  // // push to stored in separate objects
  // layerArray.push({
  //   name  : item.name,
  //   xPos  : item.frame.x,
  //   yPos  : item.frame.y,
  //   height: item.frame.height,
  //   width : item.frame.width
  // })
  // push to stored in nested array
  layerArray.push( [item.name, item.frame.x, item.frame.y, item.frame.height, item.frame.width] )
})

log(layerArray)