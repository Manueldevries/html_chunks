// https://gist.github.com/abynim/04fd575a7e63ae2908a9
var removeFileOrFolder = function(filePath) {
    [[NSFileManager defaultManager] removeItemAtPath:filePath error:nil];
}

removeFileOrFolder('/Users/Manuel/Downloads/test')