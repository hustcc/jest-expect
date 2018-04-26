/**
 * Created by hustcc 18/4/26.
 * Contract: i@hust.cc
 */

import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import round from 'fixed-round';
import matcher from 'jest-extended/'

const passMessage = (number, value) => () =>
  matcherHint('.not.toBeApproximate') +
  '\n\n' +
  'Expected number to not be approximately equal to:\n' +
  `  ${printExpected(value)}\n` +
  'Received:\n' +
  `  ${printReceived(number)}`;


const failMessage = (number, value) => () =>
  matcherHint('.toBeApproximate') +
  '\n\n' +
  'Expected number to be approximately equal to:\n' +
  `  ${printExpected(value)}\n` +
  'Received:\n' +
  `  ${printReceived(number)}`;


/**
 * 获得一个小数点的位数
 * @param value
 * @returns {number}
 */
const digit = value => {
  const v = `${value}`;
  const idx = v.lastIndexOf('.');
  return idx === -1 ? 0 : v.length - v.lastIndexOf('.') - 1;
};

export const toBeApproximate = (number, value) => {
  const pass = round(number, digit(value)) === value;
  if (pass) {
    return {
      pass,
      message: passMessage(number, value)
    };
  }
  return {
    pass,
    message: failMessage(number, value)
  };
};
