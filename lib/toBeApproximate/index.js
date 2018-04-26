'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeApproximate = undefined;

var _jestMatcherUtils = require('jest-matcher-utils');

var _fixedRound = require('fixed-round');

var _fixedRound2 = _interopRequireDefault(_fixedRound);

var _jestExtended = require('jest-extended/');

var _jestExtended2 = _interopRequireDefault(_jestExtended);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var passMessage = function passMessage(number, value) {
  return function () {
    return (0, _jestMatcherUtils.matcherHint)('.not.toBeApproximate') + '\n\n' + 'Expected number to not be approximately equal to:\n' + ('  ' + (0, _jestMatcherUtils.printExpected)(value) + '\n') + 'Received:\n' + ('  ' + (0, _jestMatcherUtils.printReceived)(number));
  };
}; /**
    * Created by hustcc 18/4/26.
    * Contract: i@hust.cc
    */

var failMessage = function failMessage(number, value) {
  return function () {
    return (0, _jestMatcherUtils.matcherHint)('.toBeApproximate') + '\n\n' + 'Expected number to be approximately equal to:\n' + ('  ' + (0, _jestMatcherUtils.printExpected)(value) + '\n') + 'Received:\n' + ('  ' + (0, _jestMatcherUtils.printReceived)(number));
  };
};

/**
 * 获得一个小数点的位数
 * @param value
 * @returns {number}
 */
var digit = function digit(value) {
  var v = '' + value;
  var idx = v.lastIndexOf('.');
  return idx === -1 ? 0 : v.length - v.lastIndexOf('.') - 1;
};

var toBeApproximate = exports.toBeApproximate = function toBeApproximate(number, value) {
  var pass = (0, _fixedRound2.default)(number, digit(value)) === value;
  if (pass) {
    return {
      pass: pass,
      message: passMessage(number, value)
    };
  }
  return {
    pass: pass,
    message: failMessage(number, value)
  };
};