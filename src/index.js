/**
 * Created by hustcc 18/4/26.
 * Contract: i@hust.cc
 */

// use jest-extended
import 'jest-extended';

import { toBeApproximate } from './toBeApproximate';

const jestExpect = global.expect;

// 扩展 expect
jestExpect.extend({
  toBeApproximate,
});
