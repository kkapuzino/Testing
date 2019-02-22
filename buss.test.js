const buss = require('./buss');
test('ikä on alle 7.v', () => {
    expect(buss(7)).toBe('ilmainen');
});

test('ikä on alle 16.v', () => {
    expect(buss(15)).toBe('1€');
});

test('ikä on yli 16.v mutta alle 25.v', () => {
    expect(buss(20)).toBe('1.50€');
});

test('ikä on yli 25.v mutta alle 65.v', () => {
    expect(buss(25)).toBe('3€');
});
test('ikä on yli 65.v', () => {
    expect(buss(70)).toBe('1.50€');
});

test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        buss()
    }).toThrow('ei parametreja');
})