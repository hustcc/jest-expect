/**
 * Created by hustcc 18/4/26.
 * Contract: i@hust.cc
 */

describe('toBeApproximate', () => {
  test('pass', () => {
    expect(Math.PI).toBeApproximate(3);
    expect(Math.PI).toBeApproximate(3.14);
    expect(Math.PI).toBeApproximate(3.1416);

    expect(Math.PI).not.toBeApproximate(4);
    expect(Math.PI).not.toBeApproximate(3.15);
    expect(Math.PI).not.toBeApproximate(3.1415);
  });

  test('fail', () => {
    expect(() => expect(Math.PI).toBeApproximate(3.1415)).toThrowErrorMatchingSnapshot();
    expect(() => expect(Math.PI).not.toBeApproximate(3.14)).toThrowErrorMatchingSnapshot();
  });
});
