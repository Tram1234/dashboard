/**
 * Created by vlad on 03/12/2016.
 */

const path = require('path');

module.exports = {
    root: process.cwd(),
    port:8000,
    mongoose:{
        server:{
            uri: 'mongodb://138.197.42.197/threatData',
            options: {
                socketOptions: {
                    keepAlive:1
                },
                poolSize:5
            }
        }
    }
};
