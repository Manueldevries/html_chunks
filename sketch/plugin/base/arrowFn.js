const document = sketch.getSelectedDocument()
const selectedLayers = document.selectedLayers
const selectedCount = selectedLayers.length
const  doc = context.document;

if (selectedCount === 0) {
  doc.showMessage('No layers are selected.')
} else {
  console.log('Selected layers:');
  selectedLayers.map( (layer) => doc.showMessage(`${layer.name}, w:${layer.frame.width}px h:${layer.frame.height}px x:${layer.frame.x} y:${layer.frame.y} `)
  )
}