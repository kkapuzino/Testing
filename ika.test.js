const ika = require('./ika');
test('ikä on alaikäinen', () => {
    expect(ika(15)).toBe(false);
});

test('ikä on täysikäinen', () => {
    expect(ika(18)).toBe(true);
});

test('ikä on täysikäinen', () => {
    expect(ika(45)).toBe(true);
});

test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        ika()
    }).toThrow('ei parametreja');
})