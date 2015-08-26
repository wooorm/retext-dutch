/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module retext:dutch
 * @fileoverview Dutch language support for retext.
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var Parser = require('parse-dutch');

/**
 * Attach `parse-dutch`.
 *
 * @param {Retext} processor - Instance.
 */
function attacher(processor) {
    processor.Parser = Parser;
}

/*
 * Expose.
 */

module.exports = attacher;
