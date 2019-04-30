// modal export panel
const openPanel = NSOpenPanel.openPanel()
openPanel.setCanChooseDirectories(true)
openPanel.setCanCreateDirectories(true)
openPanel.setAllowedFileTypes(['json'])
openPanel.setAllowedFileTypes(['json'])
// const clicked = [openPanel runModal]
// const clicked = openPanel.runModal()
// check if Ok has been clicked
var save = NSSavePanel.savePanel();
save.setNameFieldStringValue('nomDuFichier.json');
save.setExtensionHidden(false);
const clicked = save.runModal()

if (clicked == NSFileHandlingPanelOKButton) {
  const isDirectory = true;
  //get the folder path
  // var firstURL = [[openPanel URLs] objectAtIndex:0];
  var firstURL = [[save URLs] objectAtIndex:0];
  //format it to a string
  var file_path = [NSString stringWithFormat:@"%@", firstURL];

  //remove the file:// path from string
  if (0 === file_path.indexOf("file://")) {
    file_path = file_path.substring(7);
    log(file_path)
  }
}


const sketch = require('sketch')
const document = sketch.getSelectedDocument()
const selectedLayers = document.selectedLayers
const layerArray = []

const layer = selectedLayers.map( i => i )

layer.forEach(item => {
  layerArray.push({
    name  : item.name,
    xPos  : item.frame.x,
    yPos  : item.frame.y,
    height: item.frame.height,
    width : item.frame.width
  })
  // // push to stored in nested array
  // layerArray.push( [item.name, item.frame.x, item.frame.y, item.frame.height, item.frame.width] )
})

log(layerArray)

exportJSON(layerArray, file_path);

function exportJSON(obj, file_path){
  // initialize the layer array
  // Convert the object to a json string
  var file = NSString.stringWithString(JSON.stringify(obj, null, "\t"));
  // Save the file
  // [file writeToFile:file_path+layerName+".json" atomically:true encoding:NSUTF8StringEncoding error:null];
  [file writeToFile:file_path+"hello.json" atomically:true encoding:NSUTF8StringEncoding error:nil];

  // fix layerName by fileName which would be giver by user
  var alertMessage = layerName+".json saved to: " + file_path;
  // alert("Layer JSON Exported!", alertMessage);
  log(alertMessage);

}
