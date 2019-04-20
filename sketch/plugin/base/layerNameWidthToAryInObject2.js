const mock_ary = ['string', 6, 'yolo', 'yolpa']
const mock_obj = {string:'string', number: 6, string2: 'yolo', string3: 'yolpa'}
const sketch = require('sketch')
const document = sketch.getSelectedDocument()
const selectedLayers = document.selectedLayers
const layerAll = selectedLayers.map( i => i )
const layerAry = layerAll.map( i => [i.name,i.frame.width,i.frame.height,i.frame.x,i.frame.y] )
const layTab = layerAry.map( item => item )

log( layTab )
