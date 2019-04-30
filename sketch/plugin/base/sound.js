// https://github.com/turbobabr/Sketch-Plugins-Cookbook
var filePath = "/System/Library/Sounds/Pop.aiff"

var sound = NSSound.alloc().initWithContentsOfFile_byReference(filePath,true);
sound.play();