/**
 * Created by xiaowei.wzw on 18/4/26.
 * Contract: xiaowei.wzw@antfin.com
 */


describe('jest-extended', () => {
  test('toBeWithin', () => {
    expect(Math.PI).toBeWithin(3, 4);
  });
});
