// MODAL
const save = NSSavePanel.savePanel()
save.setNameFieldStringValue('nom_du_fichier.json')
save.setExtensionHidden(false)
const clicked = save.runModal()

// check if Ok has been clicked
if (clicked == NSFileHandlingPanelOKButton) {
  //get the folder path
  var file_path = save.URL().path()
  //remove the file:// path from string
  if (0 === file_path.indexOf("file://")) {
    file_path = file_path.substring(7);
  }
}

// SAVE OBJ
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

// EXPORT TO FILE
exportJSON(layerArray, file_path)

log(layerArray)

function exportJSON(obj, file_path){
  // initialize the layer array
  // Convert the object to a json string
  const file = NSString.stringWithString(JSON.stringify(obj, null, "\t"))
  // Save the file
  [file writeToFile:file_path atomically:true encoding:NSUTF8StringEncoding error:nil];

  // fix layerName by fileName which would be giver by user
  const alertMessage = file_path.substring(file_path.lastIndexOf('/') + 1)+" saved to: " + file_path;
  // alert("Layer JSON Exported!", alertMessage);
  log(alertMessage);

}
