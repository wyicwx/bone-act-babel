'use strict';
var assert = require('assert');
var path = require('path');
var bone = require('bone');


bone.setup(path.join(__dirname, './raw'));
require('./bone/bonefile.js');
bone.run();

var FileSystem = require('bone/lib/fs.js');
var bonefs = FileSystem.fs;

bone.status.test = true;
bone.log.log('test start.');

describe('babel', function() {
    it('', function() {

    });
});