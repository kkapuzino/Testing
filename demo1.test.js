const sum = require('./sum');
test('syötteet merkkijonoja, heitetään poikkeus', () => {
    expect(() => {
        sum("jesse", "minna")
    }).toThrow('ei lukuja');
});