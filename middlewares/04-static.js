/**
 * Created by vlad on 03/12/2016.
 */
const express = require('express');
const path = require('path');
module.exports = express.static(path.join(__dirname,'..','public'));
