'use strict';

require('jest-extended');

var _toBeApproximate = require('./toBeApproximate');

/**
 * Created by hustcc 18/4/26.
 * Contract: i@hust.cc
 */

// use jest-extended
var jestExpect = global.expect;

// 扩展 expect
jestExpect.extend({
  toBeApproximate: _toBeApproximate.toBeApproximate
});