var contents = [
	{ "name": "s1", "xPos": 0, "yPos": 0, "height": 167, "width": 620 }, { "name": "s2c1s1", "xPos": 0, "yPos": 167, "height": 51, "width": 158 }, { "name": "s2c1s2", "xPos": 0, "yPos": 218, "height": 112, "width": 158 }, { "name": "s2c2", "xPos": 158, "yPos": 167, "height": 163, "width": 254 }, { "name": "s2c3s1", "xPos": 412, "yPos": 167, "height": 51, "width": 208 }, { "name": "s2c3s2", "xPos": 412, "yPos": 218, "height": 58, "width": 208 }, { "name": "s2c3s3", "xPos": 412, "yPos": 276, "height": 54, "width": 208 }, { "name": "s3c1", "xPos": 0, "yPos": 330, "height": 102, "width": 342 }, { "name": "s3c2", "xPos": 342, "yPos": 330, "height": 102, "width": 278 }
];

contents.map((content, index, array) => {
    switch(content.yPos) {
        case 0:
            console.log("y is 0 and next slice is: ", array[index+1] ? array[index+1].name : 'empty');
            break;
        case 167 || 218 || 276:
            console.log("y is 167", array[index+1] ? array[index].name+'\n'+array[index+1].name : 'empty')
            break;
    }
});