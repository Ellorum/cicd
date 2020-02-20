const index = require('./services');

test('adds 1 + 2 to equal 3', () => {
  expect(index.sum(1, 2)).toBe(3);
});

test('multipies 1 by 2 to equal 2', () => {
  expect(index.product(1, 2)).toBe(2);
});

