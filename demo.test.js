const sum = require('./sum');
test('syötteet numeromaisia merkkijonoja', () => {
    expect(sum("1", "2")).toBe(3);
});