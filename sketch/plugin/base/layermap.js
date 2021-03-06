// https://gist.github.com/abynim/04fd575a7e63ae2908a9
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