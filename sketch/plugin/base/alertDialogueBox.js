//reference the Application
var app = [NSApplication sharedApplication];
const sketch = require('sketch')
const document = sketch.getSelectedDocument()
const selectedLayers = document.selectedLayers
const  doc = context.document;

const layerAll = selectedLayers.map( i => i )
const layerAry = layerAll.map( i => [i.name,i.frame.width,i.frame.height,i.frame.x,i.frame.y] )
const layTab = layerAry.map( item => item )

doc.showMessage( layTab )
[app displayDialog:layTab withTitle:"Your selected layer: [name,w,h,x,y]"];