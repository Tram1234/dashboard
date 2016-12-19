/**
 * Created by vlad on 03/12/2016.
 */
const parser = require('body-parser');
module.exports = {
    json:parser.json(),
    url :parser.urlencoded({extended: false})
};