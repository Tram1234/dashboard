/**
 * Created by vlad on 03/12/2016.
 */
const mongoose = require('mongoose');
const config = require('config');
mongoose.Promise = Promise;

if (process.env.MONGOOSE_DEBUG){
    mongoose.set('debug',true);
}

mongoose.connect(config.mongoose.server.uri, config.mongoose.server.options);

module.exports = mongoose;
