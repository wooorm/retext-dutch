/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module retext:dutch
 * @fileoverview Test suite for `retext-dutch`.
 */

'use strict';

/* eslint-env node, mocha */

/*
 * Dependencies.
 */

var assert = require('assert');
var retext = require('retext');
var Dutch = require('parse-dutch');
var dutch = require('./');

/*
 * Methods.
 */

var equal = assert.strictEqual;

/*
 * Tests.
 */

describe('dutch()', function () {
    it('should work', function (done) {
        retext.use(dutch).use(function (processor) {
            equal(processor.Parser, Dutch);
            done();
        });
    });
});
