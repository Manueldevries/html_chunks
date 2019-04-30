// var app = [NSApplication sharedApplication];
// [app displayDialog:'hola' withTitle:"Yo!"];
const sketch = require('sketch')
const document = sketch.getSelectedDocument()
const selectedLayers = document.selectedLayers
const layerName = selectedLayers.map( i => i.name )

var writeTextToFile = function(text, filePath) {
  var t = [NSString stringWithFormat:@"%@", text],
  f = [NSString stringWithFormat:@"%@", filePath];
  return [t writeToFile:f atomically:true encoding:NSUTF8StringEncoding error:nil];
}

writeTextToFile(layerName, '/Users/Manuel/Downloads/test/layername.txt')

log(`${layerName}`)