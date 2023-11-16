const fs = require('fs');

fs.writeFile("./message.txt", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

fs.readFile("message.txt", 'utf8', (err, data) => {
    if(err) {
        return console.log(err);

    }
    console.log(data);
})