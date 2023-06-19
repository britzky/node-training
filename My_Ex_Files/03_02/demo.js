var fs = require('fs');

fs.readdir('c:/', (errr, data) => {
    console.log(data)
})