/**
 * Created by vlad on 03/12/2016.
 */
const favicon = require('serve-favicon');
const path = require('path');

module.exports = favicon(path.join(__dirname,'..' ,'public', 'favicon.ico'));

