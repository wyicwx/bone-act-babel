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
    it('es6', function(done) {
        bonefs.readFile('~/dist/es6.js', function(error, buffer) {
            if(error) {
                return done(false);
            }

            var content = buffer.toString();

            if(content.indexOf('class A') != -1) {
                return done(false);
            }

            if(content.indexOf('() => {}') != -1) {
                return done(false);
            }

            done();
        });
    });

    it('react', function(done) {
        bonefs.readFile('~/dist/react.js', function(error, buffer) {
            if(error) {
                return done(false);
            }

            var content = buffer.toString();

            if(content.indexOf('var { dom } = require("deku");') != -1) {
                return done(false);
            }

            if(content.indexOf('var profile = <div>') != -1) {
                return done(false);
            }

            done();
        });
    });
});