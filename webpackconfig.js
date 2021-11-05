const path = require('path');
const { dirname } = require('path/posix');

module.export ={
    node: 'development',
    devtool: 'eval-source-map',
    entry:'./src/index.js',
    output:{
        path: path.resolve(dirname,'public'),
        filename: 'bundle.js'
    }

}