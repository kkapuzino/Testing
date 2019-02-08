const sum = require('./sum');

test('suorittaa yhteen laskun 1 + 2, tulos 3', () => {
    expect(sum(1, 2)).toBe(3);
});