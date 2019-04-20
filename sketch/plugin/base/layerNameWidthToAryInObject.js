const mock_ary = ['string', 6, 'yolo', 'yolpa']
const mock_obj = {string:'string', number: 6, string2: 'yolo', string3: 'yolpa'}
const sketch = require('sketch')
const document = sketch.getSelectedDocument()
const selectedLayers = document.selectedLayers
const layerAry = selectedLayers.map( i => i )
const layerName = layerAry.map( i => i.name )
const layerWidth = layerAry.map( i => i.frame.width )
const layTab = layerName.map( (item,idx) => [item,layerWidth[idx]] )

log( layTab[2] )
