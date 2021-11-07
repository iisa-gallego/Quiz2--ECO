const path = require("path");
/*const { dirname } = require('path/posix');*/

module.exports ={
    mode: "development",
    devtool: 'eval-source-map',
    entry:"./src/main.js",
    output:{
        path: path.resolve(__dirname,"public"),
        filename: "main.js"
    }

};