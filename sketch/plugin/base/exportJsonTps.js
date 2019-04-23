var doc = context.document
var selection = context.selection
var openPanel = NSOpenPanel.openPanel();
openPanel.setCanChooseDirectories(true);
openPanel.setCanCreateDirectories(true);
openPanel.setAllowedFileTypes(['json']);

// var clicked = [openPanel runModal];
var clicked = openPanel.runModal()
// check if Ok has been clicked

if (clicked == NSFileHandlingPanelOKButton) {
  var isDirectory = true;
  //get the folder path
  var firstURL = [[openPanel URLs] objectAtIndex:0];
  //format it to a string
  var file_path = [NSString stringWithFormat:@"%@", firstURL];

  //remove the file:// path from string
  if (0 === file_path.indexOf("file://")) {
    file_path = file_path.substring(7);
    log(file_path)
  }
}
//loop through the selected layers and export the XML
for(var i = 0; i < selection.count(); i++){
  var layer = selection[i];
  exportJSON(layer, file_path);
}

// function exportJSON(layer, file_path){
//   log(`layer: ${layer} file_path: ${file_path} `)
// }

function exportJSON(layer, file_path){

  //initialize the layer array
  var layerArray = [];

  //create the variables
  var layerName = String(layer.name());
  var layerFrame = layer.absoluteRect();
  var layerXpos = String(layerFrame.x());
  var layerYpos = String(layerFrame.y());
  var layerHeight = String(layerFrame.height());
  var layerWidth = String(layerFrame.width());

  // add the strings to the array
  layerArray.push({
      name: layerName,
      xPos: layerXpos,
      yPos: layerYpos,
      height: layerHeight,
      width: layerWidth,
  });

	// Create the JSON object from the layer array
  var jsonObj = { "layer": layerArray };
  log(jsonObj)
  // Convert the object to a json string
  var file = NSString.stringWithString(JSON.stringify(jsonObj, null, "\t"));
  // Save the file
  // [file writeToFile:file_path+layerName+".json" atomically:true encoding:NSUTF8StringEncoding error:null];
  [file writeToFile:file_path+"hello.json" atomically:true encoding:NSUTF8StringEncoding error:nil];

  var alertMessage = layerName+".json saved to: " + file_path;
  // alert("Layer JSON Exported!", alertMessage);
  log(alertMessage);

}
