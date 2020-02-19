const index = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(index.sum(1, 2)).toBe(3);
});


test('expect to fail', () => {
  expect(index.sum(1, 2)).toBe(4);
});
